import com.test.sorting.Selection;
import com.test.util.StdIn;

public class Main {

    public static void main(String[] args)
    {
        int[] arr = StdIn.readAllInts();

        long startTime = System.currentTimeMillis();
        Selection sort = new Selection(arr);
        sort.sort();
        sort.show();
        long endTime = System.currentTimeMillis();
        System.out.println("Total execution time: " + (endTime-startTime) + "ms");
    }
}
