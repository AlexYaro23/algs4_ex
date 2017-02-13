import com.test.sorting.Quick3Way;
import com.test.util.StdIn;

public class Main {

    public static void main(String[] args)
    {
        int[] arr = StdIn.readAllInts();

        long startTime = System.currentTimeMillis();
        Quick3Way sort = new Quick3Way(arr);
        sort.sort();
        sort.show();
        long endTime = System.currentTimeMillis();
        System.out.println("Total execution time: " + (endTime-startTime) + "ms");
    }
}
