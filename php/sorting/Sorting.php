<?php
namespace Sorting;

abstract class Sorting
{
    protected $data = [];
    public function __construct(array $arr)
    {
        $this->data = $arr;
    }
    abstract public function sort();
    protected function less($a, $b)
    {
        return (int) $a < (int) $b;
    }

    protected function exch($arr, $i, $j)
    {
        $temp = $arr[$i];
        $arr[$i] = $arr[$j];
        $arr[$j] = $temp;

        return $arr;
    }

    public function show()
    {
        $count = count($this->data);
        for ($i = 0 ; $i < $count; $i++) {
            echo $this->data[$i];
        }

        echo PHP_EOL;
    }
}
