import com.test.sorting.Shell;
import com.test.util.StdIn;

public class Main {

    public static void main(String[] args)
    {
        int[] arr = StdIn.readAllInts();

        long startTime = System.currentTimeMillis();
        Shell sort = new Shell(arr);
        sort.sort();
        sort.show();
        long endTime = System.currentTimeMillis();
        System.out.println("Total execution time: " + (endTime-startTime) + "ms");
    }
}
