<?php
namespace Sorting;

class Insertion extends Sorting
{
    public function sort()
    {
        $count = count($this->data);
        for ($i = 1; $i < $count; $i++) {
            for ($j = $i; $j > 0 &&  $this->less($this->data[$j], $this->data[$j-1]); $j--) {
                $this->data = $this->exch($this->data, $j, $j-1);
            }

        }
    }
}
