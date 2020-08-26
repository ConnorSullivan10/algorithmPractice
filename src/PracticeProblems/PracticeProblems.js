// Beginner (basics)
// QUESTION 1

// Sort an array
// Given an array of integers, sort the values in order without using native methods like array.sort()

// Example 1:
// Input : [3,4,1]
// Output : [1,3,4]

// Example 2:
// Input : [-6,0,56,-100,3]
// Output : [-100,-6,0,3,56]

// Example 3:
// Input : [6,4,8,34,67,0]
// Output : [0,4,6,8,34,67]

// =====================================================================================

// Beginner
// QUESTION 2

// Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
// Original alphabet:      abcdefghijklmnopqrstuvwxyz
// Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc

// For example, the text “There’s-a-starman-waiting-in-the-sky” with the alphabet rotated by 3 will result in an encrypted string of “Wkhuh’v-d-vwdupdq-zdlwlqj-lq-wkh-vnb”.
// Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.
// Implement a function “caesarCipher” that takes two arguments, a string to encode and the size of the shift to use. It should return the encoded string.

// Example 1:
// Input : X = "Don’t forget to drink your Ovaltine!",  Y = "35"
// Output : “Mxw'c oxapnc cx marwt hxda Xejucrwn!”

// ==================================================================
// ==================================================================
// ==================================================================

// Non - Beginner
// QUESTION 1

// Given a string, check if it is a permutation of a palindrome. The permutations do not have to be dictionary words
// A palindrome is a word, phrase, number or sequence of words that reads the same backward as forward.
// ignore upper and lower cases
// Example 1:
// Input : Taco Coa
// Output : True  (“taco cat”, “acto cta, ...)

// Example 2:
// Input : Top Spot
// Output : True  (“pot spot”, “opt stpo, ...)

// Example 3:
// Input : “0005554444555000”
// Output : True  (“4455000550005544”, and so on ...)

// Example 4:
// Input : tv radar
// Output : false

// Non - Beginner
// Question 2:

// Given a string, sort it in decreasing order based on the frequency of characters.

// Example 1:
// Input: "tree"
// Output: "eert"
// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

// Example 2:
// Input: "cccaaa"
// Output: "cccaaa"
// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.

// Example 3:
// Input: "Aabb"
// Output: "bbAa"
// Explanation:
// "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.
