import com.test.sorting.Insertion;
import com.test.util.StdIn;

public class Main {

    public static void main(String[] args)
    {
        int[] arr = StdIn.readAllInts();

        long startTime = System.currentTimeMillis();
        Insertion sort = new Insertion(arr);
        sort.sort();
        sort.show();
        long endTime = System.currentTimeMillis();
        System.out.println("Total execution time: " + (endTime-startTime) + "ms");
    }
}
