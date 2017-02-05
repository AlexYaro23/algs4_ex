<?php
namespace Sorting;

class MergeBU extends Sorting
{
    public function sort()
    {
        $count = count($this->data);
        for ($sz = 1; $sz < $count; $sz = $sz + $sz) {
            for ($lo = 0; $lo < $count - $sz; $lo += $sz + $sz) {
                $this->merge($lo, $lo + $sz - 1, min($lo + $sz + $sz - 1, $count - 1));
            }
        }
    }

    private function merge($lo, $mid, $hi)
    {
        $aux = [];
        for ($k = $lo; $k <= $hi; $k++) {
            $aux[$k] = $this->data[$k];
        }

        $i = $lo;
        $j = $mid + 1;
        for ($k = $lo; $k <= $hi; $k++) {
            if ($i > $mid) $this->data[$k] = $aux[$j++];
            else if ($j > $hi) $this->data[$k] = $aux[$i++];
            else if ($this->less($aux[$j], $aux[$i])) $this->data[$k] = $aux[$j++];
            else $this->data[$k] = $aux[$i++];
        }
    }
}
