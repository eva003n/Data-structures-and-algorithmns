#include<stdio.h>

int main() {
    int arr[] = {1, 2, 3, 4, 5}; 
    int length = sizeof(arr) / sizeof(int);
    int i =  length - 1; // last element 

    // for loop
    for(i; i >= 0; i--) {
        printf("arr[%d] = %d\n", i, arr[i]);
    }

    // while loop
    while( i >= 0) {
        printf("arr[%d] = %d\n", i, arr[i]);

        i--;
    }

    //for each
    for (i; i >= 0; i--)
    {
        printf("arr[%d] = %d\n", i, arr[i]);
    }

    return 0;
}