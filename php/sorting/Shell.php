<?php
namespace Sorting;

class Shell extends Sorting
{
    public function sort()
    {
        $count = count($this->data);
        $h = 1;
        while ($h < $count/3) {
            $h = round(3*$h + 1);
        }

        while ($h >= 1) {
            for ($i = $h; $i < $count; $i++) {
                for ($j = $i; $j >= $h && $this->less($this->data[$j], $this->data[$j-$h]); $j-=$h) {
                    $this->data = $this->exch($this->data, $j, $j-$h);
                }
            }
            $h = round($h/3);
        }

    }
}
