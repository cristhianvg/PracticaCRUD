<?php

$config = new myConfig();
$config->setPath('C:/xampp/htdocs/PracticaCRUD/');
$config->setDirUploads('C:/xampp/htdocs/PracticaCRUD/www/uploads/');

$config->setDrive('pgsql');
$config->setHost('localhost');
$config->setPort(5432);
$config->setUser('postgres');
$config->setPassword('123');
$config->setDbname('dbpracticacrud');
$config->setHash('md5');

$config->setUrl('http://localhost/PracticaCRUD/www/');