package com.test.sorting;


public class Shell extends Sorter
{
    public Shell(int[] arr)
    {
        super(arr);
    }

    @Override
    public void sort()
    {
        int N = arr.length;
        int h = 1;
        while (h < N/3) {
            h = 3*h + 1;
        }
        while (h >= 1) {
            for (int i = h; i < N; i++) {
                for (int j = i; j >= h && less(arr[j], arr[j-h]); j-=h) {
                    exch(j, j-h);
                }
            }

            h = h/3;
        }
    }
}
