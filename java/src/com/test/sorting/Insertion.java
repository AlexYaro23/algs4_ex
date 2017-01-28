package com.test.sorting;


public class Insertion extends Sorter
{
    public Insertion(int[] arr)
    {
        super(arr);
    }

    @Override
    public void sort()
    {
        int N = arr.length;
        for (int i = 1; i < N; i++) {
            for (int j = i; j > 0 && less(arr[j], arr[j-1]); j--) {
                exch(j, j-1);
            }
        }
    }
}
