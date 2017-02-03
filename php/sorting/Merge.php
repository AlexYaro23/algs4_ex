<?php
namespace Sorting;

class Merge extends Sorting
{
    public function sort()
    {
        $this->sortRec(0, count($this->data) - 1);
    }

    private function sortRec(int $lo, int $hi)
    {
        if ($lo >= $hi) return;

        $mid = (int) floor($lo + (($hi - $lo)/2));

        $this->sortRec($lo, $mid);
        $this->sortRec($mid+1, $hi);
        $this->merge($lo, $mid, $hi);
    }

    private function merge(int $lo, int $mid, int $hi)
    {
        for ($k = $lo; $k <= $hi; $k++) {
            $aux[$k] = $this->data[$k];
        }

        $i = $lo;
        $j = $mid+1;
        for ($k = $lo; $k <= $hi; $k++) {
            if ($i > $mid)                             $this->data[$k] = $aux[$j++];
            else if ($j > $hi)                         $this->data[$k] = $aux[$i++];
            else if ($this->less($aux[$j], $aux[$i]))  $this->data[$k] = $aux[$j++];
            else                                       $this->data[$k] = $aux[$i++];
        }
    }
}
