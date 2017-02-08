package com.test.sorting;


public class Quick extends Sorter
{
    public Quick(int[] arr)
    {
        super(arr);
    }

    @Override
    public void sort()
    {
        sort(arr, 0, arr.length - 1);
    }

    private void sort(int[] arr, int lo, int hi)
    {
        if (hi <= lo) return;
        int j = partition(arr, lo, hi);
        sort(arr, lo, j-1);
        sort(arr, j+1, hi);
    }

    private int partition(int[] arr, int lo, int hi)
    {
        int i = lo;
        int j = hi + 1;
        int v = arr[lo];

        while (true) {
            while(less(arr[++i], v)) if (i == hi) break;
            while(less(v, arr[--j])) if (j == lo) break;
            if (i >= j) break;

            exch(i, j);
        }
        exch(lo, j);

        return j;
    }
}
