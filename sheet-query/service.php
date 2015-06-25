<?php

/* autoload */
spl_autoload_register(function($class){
    $class = str_replace('\\', '/', $class);
    list($folder) = explode('/', $class);
    include __DIR__ . "/src/{$class}.php";
});


class GoogleSheet extends \GoogleSheet\GoogleSheet{};


$sheet = new GoogleSheet;

