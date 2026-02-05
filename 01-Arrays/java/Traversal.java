import javax.swing.plaf.basic.BasicInternalFrameTitlePane.SystemMenuBar;

public class Traversal {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int length = arr.length;

        System.out.println("Method 1: For loop");

        System.out.println("Linear traversal");
        for(int i = 0; i < length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();

        System.out.println("Reverse traversal");
        for(int i = length - 1; i >= 0; i--) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();

        System.out.println("Method 2: While loop");
        System.out.println("Linear traversal");
        int index = 0;
        while(index < length) {
        System.out.print(arr[index] + " ");
        index++;
        }
        System.out.println();

        System.out.println("Reverse traversal");
        index = length - 1;
        while(index >= 0) {
        System.out.print(arr[index] + " ");
        index--;
        }
        System.out.println();

        System.out.println("Method 2: ForEach loop");
        for(int element: arr) {
            System.out.print(element + " ");
        }
        System.out.println();

        //Application of traversal
           //Searching
           for(int i = 0; i < length; i++) {
            if(arr[i] == 4) {
                System.out.println("Found at position " + i );
            }
           }
           //Modifying
                System.out.println("Modiffying array...");
                for(int i = 0; i < length; i++) {
                    arr[i] += 5;
                }
                System.out.println("Modiffed array");
                for(int i = 0; i < length; i++) {
                    System.out.print(arr[i] + " ");
                }
                System.out.println();






        
    }
    
}
