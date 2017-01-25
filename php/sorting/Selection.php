<?php
namespace Sorting;

class Selection extends Sorting
{
    public function sort()
    {
        $count = count($this->data);
        for ($i = 0; $i < $count; $i++) {
            $min = $i;
            for ($j = $i+1; $j < $count; $j++) {
                if ($this->less($this->data[$j], $this->data[$min])) {
                    $min = $j;
                }
            }
            $this->data = $this->exch($this->data, $i, $min);
        }
    }
}
