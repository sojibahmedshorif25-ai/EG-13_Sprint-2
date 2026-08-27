/**
 * 1. Reverse a String
 * @param {string} str
 * @return {string}
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * 2. Find Maximum
 * @param {number[]} nums
 * @return {number}
 */
function findMax(nums) {
    return Math.max(...nums);
}

/**
 * 3. Check for Palindrome
 * @param {string} str
 * @return {boolean}
 */
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

/**
 * 4. Sum Array Elements
 * @param {number[]} nums
 * @return {number}
 */
function sumArray(nums) {
    return nums.reduce((sum, num) => sum + num, 0);
}

/**
 * 5. Count Vowels
 * @param {string} str
 * @return {number}
 */
function countVowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

/**
 * 6. Two Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

/**
 * 7. Flatten a Nested Array
 * @param {Array} arr
 * @return {Array}
 */
function flattenArray(arr) {
    return arr.flat(Infinity);
}

/**
 * 8. Group Anagrams
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    const map = new Map();
    for (const str of strs) {
        const key = str.split('').sort().join('');
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }
    return Array.from(map.values());
}

/**
 * 9. Longest Substring Without Repeating Characters
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    const map = new Map();
    let maxLen = 0;
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            left = Math.max(left, map.get(s[right]) + 1);
        }
        map.set(s[right], right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}

/**
 * 10. Deep Clone an Object
 * @param {Object} obj
 * @return {Object}
 */
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }
    const cloned = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }
    return cloned;
}
