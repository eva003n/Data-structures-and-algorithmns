#include<stdio.h>
#include<stdlib.h>

struct Map {
    int key;
    int value;
};

int *twoSum(int *nums, int numSize, int target, int *returnSize ) {
    // create a hash table datastructure

    struct Map *map = malloc(numSize * sizeof(struct Map));

    for(int i = 0; i < numSize; i++) {
        // cur + x = target -> x = target - cur
        if(nums[i] == target - nums[i]) {
            int indices[] = {}
        }


    }

}
int main() {
    return 0;
}