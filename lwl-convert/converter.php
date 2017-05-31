<?php
if(isset($_POST["svg"]) && isset($_POST["overlay"])) {
	try {
		if(file_exists('conf.php')) {
			require 'conf.php';
		} else {
			throw new Exception('Please create the config file');
		}

		$uid = uniqid(); // uniqe id for file names
		$result = array();
		$svg = $_POST["svg"];
		$overlay = $_POST["overlay"];
		$legend = $_POST["legend"];

		// The SVG vector map is taken directly from the HTML tree, it is generated by the ESRI framework
		// and it has no XML header. Add the header so ImageMagick can process the file.
		$svg_header = '<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';
		$svg_saved = false;
		if(simplexml_load_string($svg_header.$_POST["svg"])) { // check the resulting SVG for validity
			$svg_saved = file_put_contents($folder_in.$uid.".svg", $svg_header.$svg); // save file if valid
		} else {
			throw new Exception("SVG file invalid");
		}

		// check the generated JSON file for validity
		$legend_saved = false;
		if($jsonLegend = json_decode($legend)) {
			$legend_saved = file_put_contents($folder_in.$uid.".json", $legend); // save file if valid
		} else {
			throw new Exception("Legend JSON invalid");
		}

		$overlay_saved = file_put_contents($folder_in.$uid.".png", file_get_contents($overlay));

		// combine SVG map and district names PNG into one PNG image with ImageMagick
		$cmd = $imagick_folder.'convert.exe -page 2526x1785 -density 296 "'.$folder_in.$uid.'.svg" -resize 2526x1785 -page 2526x1785 "'.$folder_in.$uid.'.png" -resize 2526x1785 -composite -trim "'.$folder_out.$uid.'.png"';
		//$cmd = '"'.$imagick_folder.'magick.exe" -page 2526x1785 -density 296 "'.$folder_in.$uid.'.svg" -resize 2526x1785 -page 2526x1785 "'.$folder_in.$uid.'.png" -resize 2526x1785 -composite -trim "'.$folder_out.$uid.'.png"';
		//$cmd = '"'.$imagick_folder.'magick.exe" "'.$folder_in.$uid.'.png" "'.$folder_out.$uid.'.png"';
		//echo $cmd;
		exec($cmd, $outp, $retval);

		// check if the image was generated successfully by probing the resulting file
		$new_image_created = is_file($folder_out.$uid.'.png');

		// if everything succeeded, go ahead and send unique image ID
		if($overlay_saved && $svg_saved && $new_image_created) {
			echo json_encode(array("status" => "success", "message" => $uid));
		} else {
			// print debug info in failure
			throw new Exception(
				json_encode(
					array("status" => "failure",
							"overlay saved" => $overlay_saved,
							"svg saved" => $svg_saved,
							"json created" => $legend_saved,
							"output created" => $new_image_created,
							"cmd"=>$cmd,
							"outp"=>$outp,
							"retval"=>$retval)
				)
			);
		}
	} catch (Exception $e) {
		echo json_encode(array("status"=>"failure"));

		// in case of errors, make a log file entry
		if(isset($uid) && isset($temp_folder)) {
			file_put_contents($temp_folder.'errorlog-'.$uid.'.txt', print_r($e,true));
		} else {
			file_put_contents('errorlog-'.date('Y-m-d_h-i-s').'.txt', print_r($e,true));
		}
	}
} else {
	echo json_encode(array("status" => "error", "message" => "Invalid Parameters"));
}
?>