package com.test.sorting;


public class Selection extends Sorter
{
    public Selection(int[] arr)
    {
        super(arr);
    }

    @Override
    public void sort()
    {
        int N = arr.length;
        for (int i = 0; i < N; i++) {
            int min = i;
            for (int j = i+1; j < N; j++) {
                if (less(arr[j], arr[min])) {
                    min = j;
                }
            }

            exch(i, min);
        }
    }
}
