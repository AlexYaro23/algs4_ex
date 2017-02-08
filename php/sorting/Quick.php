<?php
namespace Sorting;

class Quick extends Sorting
{
    public function sort()
    {
        $this->sortRec(0, count($this->data) - 1);
    }

    private function sortRec(int $lo, int $hi)
    {
        if ($hi <= $lo) return;
        $j = $this->partition($lo, $hi);
        $this->sortRec($lo, $j - 1);
        $this->sortRec($j + 1, $hi);
    }

    private function partition(int $lo, int $hi)
    {
        $i = $lo;
        $j = $hi + 1;
        $v = $this->data[$lo];

        while (true) {
            while($this->less($this->data[++$i], $v)) if ($i == $hi) break;
            while($this->less($v, $this->data[--$j])) if ($j == $lo) break;
            if ($i >= $j) break;
            $this->exch($i, $j);
        }

        $this->exch($lo, $j);

        return $j;
    }
}
