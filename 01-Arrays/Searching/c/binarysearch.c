#include<stdio.h>

int linearSearch(int *arr, int target, int length);
int main() {

    int arr[] = {10, 8, 30, 4, 5};
    int n = sizeof(arr) / sizeof(int);
    int target = 5;

    int index = linearSearch(arr, target, n);

    printf("Element is at index: %d\n", index);
    
    return 0;
}
int linearSearch(int *arr, int target, int length) {
    for(int i = 0; i < length; i++) {
        if(arr[i] == target) {
            return i;
        }
    }
    return -1;
    
}