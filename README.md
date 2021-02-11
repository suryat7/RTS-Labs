# RTS-Labs
Question 1:

Implementation in array.js

Test with node array.js

Question 2:
Implementation in rotate.js

Test with node rotate.js

Question 3: If you could change 1 thing about your favorite framework/language/platform (pick one), what would it be?

If i could change I would change Angular's two-way binding as it works on the principle of a digest-cycle, which is a recursive call to check the scope of each $scope variable or watcher in the HTML. In the case of huge nesting in the dom tree. Recursion consumes a lof of memory since the stacks keep getting filled in, which is a common mistake as the most of the angular developers exceed the number of watchers per page resulting in a lag in the system.
