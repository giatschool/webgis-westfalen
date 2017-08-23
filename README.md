LWL-GIS
=======

[![Build Status](https://travis-ci.org/giatschool/webgis-westfalen.svg?branch=master)](https://travis-ci.org/giatschool/webgis-westfalen)



###Installation Notes


##Print:
# Windows with IIS

- Download and extract PHP7 to C:\php7 http://windows.php.net/download#php-7.1
- Configure PHP7 for FastCGI mode in IIS
- Enable and configure ImageMagick for PHP7 (php.ini)
- Install ImageMagick separately as well https://www.imagemagick.org/script/download.php#windows
- Configure folder permission for `lwl-convert/temp`, `C:\Windows\Temp`: Read+Write permissions for IIS users `IUSR` and website's AppPool 
  - https://stackoverflow.com/questions/34283038/imagemagic-permission-denied-on-iis/34344023#34344023
  - https://stackoverflow.com/questions/7334216/iis7-permissions-overview-applicationpoolidentity
- Edit `conf.php` (Template: `conf.php-dist`)

# Linux with Apache

- Install Apache, php7 and php7 ImageMagick modules
- Make sure that the apache/www user has read+write permissions to `lwl-convert/temp`
- Edit `conf.php` (Template: `conf.php-dist`)

