# React State Patterns

## Immutable State Updates

* Pure functions such as **.map**, **.filter**, and **.reduce** are your friends. So is the **...spread operator**

* A much better way is to make a new copy of the data structure. We can use any **pure function** to do this.

* There is a slight efficiency cost due to O(N) space/time required to make a copy, but it's almost always worth it to ensure that your app doesn't have extremely difficult do detect bugs due to mischievous side effects.

* While is sounds like an oxymoron, immutable state just means that there is an old state object and a new state object that are both snapshots in time.

* The safest way to update state is to make a copy of it, and then call this.setState with the new copy.
  
* This patterns is a good habit to get into for React Apps and **required** for using Redux.

## Mutable Data Structures

* You have to be extra careful modifying your array of objects!

* Mutating nested data structures in your state can cause problems with React.
