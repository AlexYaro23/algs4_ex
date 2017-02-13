<?php
namespace Sorting;

class Quick3Way extends Sorting
{
    public function sort()
    {
        $count = count($this->data);
        $this->sortRec(0, $count - 1);
    }

    private function sortRec(int $lo, int $hi)
    {
        if ($hi <= $lo) return;
        $lt = $lo;
        $i = $lo + 1;
        $gt = $hi;
        $v = $this->data[$lo];
        while ($i <= $gt) {
            if ($this->data[$i] < $v) $this->exch($i++, $lt++);
            else if ($this->data[$i] > $v) $this->exch($i, $gt--);
            else $i++;
        }

        $this->sortRec($lo, $lt - 1);
        $this->sortRec($gt + 1, $hi);
    }
}
