#include<stdio.h>

int main() {
    int arr[] = {1, 2, 3, 4, 5}; 
    int length = sizeof(arr) / sizeof(int);
    int i = 0;

    // for loop
    for(i; i < length; i++) {
        printf("arr[%d] = %d\n", i, arr[i]);
    }

    // while loop
    while( i < length) {
        printf("arr[%d] = %d\n", i, arr[i]);

        i++;
    }

    //for each
    for (i; i < length; i++)
    {
        printf("arr[%d] = %d\n", i, arr[i]);
    }

    return 0;
}