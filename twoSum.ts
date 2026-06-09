// #1-two sum   [Easy]                                                 

/**
 * Problem:
   Given an array of integers `nums` and a target integer `target`,
   return the indices of the two numbers that add up to `target`
   Exactly one solution exists; you may not use the same element twice.

  Approach: Hash Map (One-Pass)
   For each number we compute its complement (target - num)
   If the complement is already in the map -> we found our pair
   Otherwise we store the current number and its index for future lookups

 time:  O(n) single pass through the array
 space: O(n)  the hash map holds at most n entries
 */

 function twosum(nums: number[], target: number): number[] {
    const map = new Map<number,number>();
    
    for (let i = 0; i < nums.length; i++) {
        const Complement = target - nums[i];
        if (map.has(Complement)) {
            return [map.get(Complement)!, i];
        }

        map.set(nums[i], i);
    }

    return [];
 }