- Complexity refers to how time or space requirements scale compared to input variables.
- Big O notation is simply a representation of complexity, aka, for describing the rate at which those requirements scale.
- Big O can be used to describe *best case*, *average case*, and *worst case* complexity

Notation| Name | Example |
---|---|---
O(1) | constant | static (pigeon)
O(log n) | logarithmic |'divide + conquer', binary search
O(n) | linear | scales directly
O(n log n) | quasilogarithmic |merge search
O(n^2) | quadratic |
O(n^C) | polynomial | contains quadratic
O(C^n) | exponential | every +1 of N exponentially increases the constant
O(n!) | factorial | brute-force traveling salesman problem

## Determining Big O
1) Determine what variables represent the problem size
  - Variables should stand for something meaningful, and aren't always 'N', e.g. N x M.
  - If your input is two arrays, A and B, and you need to loop through B for every element of A, then your runtime would be O(A x B);
2) Describe the number of operations in terms of your variables
- Understand when to add variables and when to multiply them.
- If your algorithm involves doing task A, finishing, then doing task B, add them:
```
function fn(arr) {
  for (let x of arr) {
    //do something
  }
  for (let y of arr) {
    //do something else
  }
}
```
- If your algorithm involves doing task A with a nested task B that needs to be done for every iteration of A, multiply them:
```
function fn(arr) {
  for (let x of arr) {
    for (let y of arr) {
      //do something
    }
  }
}
```

3) Drop constants, coefficients, and insignificant terms (relatively inexpensive, and accounting for only a small percentage of the overall load)
    - 2N = N
    - N + 2 = N
    - N^2 + N = N^2
