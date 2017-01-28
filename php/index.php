<?php
ini_set('memory_limit', '4096M');
set_time_limit(-1);
require __DIR__ . '/../vendor/autoload.php';

use \Sorting\Insertion;

$arr = file($argv[1]);
$arr = array_map(function ($item) {
    return (int) trim($item);
}, $arr);

$time = -microtime(true);

$sort = new Insertion($arr);
$sort->sort();
$sort->show();

$time += microtime(true);

echo  sprintf('Total execution time: %f s', $time) . PHP_EOL;