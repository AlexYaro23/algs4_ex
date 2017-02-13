package com.test.sorting;

public class Quick3Way extends Sorter
{
    public Quick3Way(int[] arr)
    {
        super(arr);
    }

    @Override
    public void sort()
    {
        int N = arr.length;
        sort(arr, 0, N - 1);
    }

    private void sort(int[] arr, int lo, int hi)
    {
        if (hi <= lo) return;
        int lt = lo, i = lo + 1, gt = hi;
        int v = arr[lo];
        while (i <= gt) {
            if (arr[i] < v) exch(lt++, i++);
            else if (arr[i] > v) exch(i, gt--);
            else i++;
        }

        sort(arr, lo, lt -1);
        sort(arr, gt + 1, hi);
    }
}
