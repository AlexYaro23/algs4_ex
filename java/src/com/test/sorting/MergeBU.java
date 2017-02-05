package com.test.sorting;

public class MergeBU extends Sorter
{
    private int[] aux;
    public MergeBU(int[] arr)
    {
        super(arr);
    }

    @Override
    public void sort()
    {
        int N = arr.length;
        aux = new int[N];
        for (int sz = 1; sz < N; sz = sz + sz) {
            for (int lo = 0; lo < N - sz; lo += sz + sz) {
                merge(arr, lo, lo + sz - 1, Math.min(lo + sz + sz - 1, N - 1));
            }
        }
    }

    private void merge(int[] arr, int lo, int mid, int hi)
    {
        for (int k = lo; k <= hi; k++) {
            aux[k] = arr[k];
        }


        int i = lo;
        int j = mid + 1;
        for (int k = lo; k <= hi; k++) {
            if (i > mid)                   arr[k] = aux[j++];
            else if (j > hi)               arr[k] = aux[i++];
            else if (less(aux[j], aux[i])) arr[k] = aux[j++];
            else                           arr[k] = aux[i++];
        }
    }
}
