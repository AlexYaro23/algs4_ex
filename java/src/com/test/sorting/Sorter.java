package com.test.sorting;


public abstract class Sorter
{
    protected int[] arr;

    Sorter(int[] arr) {
        this.arr = arr;
    }

    abstract  public void sort();

    protected boolean less(Integer a, Integer b)
    {
        return a < b;
    }

    protected void exch(int i, int j)
    {
        Integer temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    public void show()
    {
        for (Integer item: arr) {
            System.out.print(item + " ");
        }

        System.out.println();
    }
}
