// #4 - Median of Two Sorted Arrays [Hard]

/**
 * Problem:
   Given two sorted arrays nums1 and nums2 of size m and n respectively, 
   return the median of the two sorted arrays.
   Example: nums1 =, nums2 = [2] -> Merged = [1,2,3] -> Median = 2.0

   Approach: Two-pointer merge (Linear Scan)
   Iterate through both sorted arrays simultaneously using two pointers. 
   Compare and push the smaller element into a merged array. Append any 
   remaining elements, then compute the median based on the total length 
   (odd vs. even).

 time:  O(m + n) we traverse both input arrays completely to merge them
 space: O(m + n) we allocate a new array to store all combined elements
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let mergedArray: number[] = [];
  let i = 0, j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
        mergedArray.push(nums1[i++]);
    } else {
        mergedArray.push(nums2[j++]);
    }
  }

  const finalArray = [...mergedArray, ...nums1.slice(i), ...nums2.slice(j)];
  const mid = Math.floor(finalArray.length / 2);

  if (finalArray.length % 2 === 0) {
    return (finalArray[mid] + finalArray[mid - 1]) / 2;
  } else {
    return finalArray[mid];
  }
}