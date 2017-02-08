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
    protected function less(int $a, int $b)
    {
        return (int) $a < (int) $b;
    }

    protected function exch(int $i,int $j)
    {
        $temp = $this->data[$i];
        $this->data[$i] = $this->data[$j];
        $this->data[$j] = $temp;
    }

    public function show()
    {
        $count = count($this->data);
        for ($i = 0 ; $i < $count; $i++) {
            echo $this->data[$i] . ' ';
        }

        echo PHP_EOL;
    }
}
