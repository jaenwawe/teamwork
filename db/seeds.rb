User.destroy_all
Challenge.destroy_all
Solution.destroy_all



puts "Seed Users"

jae = User.create!(
    username: "constant",
    password: "123abc",
    first_name: "Jae",
    bio: "Laughs and eats at O(1) speed.  Programs in a for loop!"
)

jil = User.create!(
    username: "ologn",
    password: "123abc",
    first_name: "candy",
    bio: "Super Nerd, runs O N(LogN) speed, and eats at O(1) speed.  Let's get started!"
)


candy = User.create!(
    username: "nsquared",
    password: "123abc",
    first_name: "Candy",
    bio: "Super Nerd, runs O N(LogN) speed, and eats at O(1) speed.  Let's get started!"
)


pop = User.create!(
    username: "popsickle",
    password: "123abc",
    first_name: "Judeo",
    bio: "Geek squad , types, naps, listens to pop music.  I'm ready!"
)
puts "Finished Seeding  Users"


puts "Seed Challenges"
popChallenge = Challenge.create!(
    title: "TwoArray",
    question: "Recieve a non-empty array of sorted integers and return a seperate array ascending which squares the original element from the same index."
)

vagueChallenge = Challenge.create!(
    title: "Merge and then Insertion Sort",
    question: "Sort this array using merge sort then insertion sort and discusss the pros and cons."
)


mathChallenge = Challenge.create!(
    title: "Height of Binary Tree",
    question: "Complete the function height() which takes root node of the tree as input parameter and returns an integer denoting the height of the tree. If the tree is empty, return 0."
)


mathChallenge = Challenge.create!(
    title: "Height of Binary Tree",
    question: "Complete the function height() which takes root node of the tree as input parameter and returns an integer denoting the height of the tree. If the tree is empty, return 0."
)
puts "Finished Seeding Challenges"

binary= Challenge.create!(
    title: "Determine if Two Trees are Identical",
    question: "Complete the function isIdentical() that takes two roots as parameters and returns true or false. The printing is done by the driver code."

)

solve= Challenge.create!(
    title: "Symmetric Tree",
    question: "Given a Binary Tree. Check whether it is Symmetric or not, i.e. whether the binary tree is a Mirror image of itself or not."
)


k= Challenge.create!(
    title: "Kth largest element in BST",
    question: "Given a Binary search tree. Your task is to complete the function which will return the Kth largest element without doing any modification in Binary Search Tree."
)

balance= Challenge.create!(
    title: "Check for Balanced Tree",
    question: "Given a binary tree, find if it is height balanced or not. A tree is height balanced if difference between heights of left and right subtrees is not more than one for all nodes of tree. "
)



array= Challenge.create!(
    title: "Array to BST",
    question: "Given a sorted array. Convert it into a Height balanced Binary Search Tree (BST). Find the preorder traversal of height balanced BST. If there exist many such balanced BST consider the tree whose preorder is lexicographically smallest.
    Height balanced BST means a binary tree in which the depth of the left subtree and the right subtree of every node never differ by more than 1."
)


subTree = Challenge.create!(
    title: "Check if subtree ",
    question: "Given two binary trees with head reference as T and S having at most N nodes. The task is to check if S is present as subtree in T. A subtree of a tree T1 is a tree T2 consisting of a node in T1 and all of its descendants in T1."
)

puts "Finished Seeding Challenges"




puts "Seed Solutions"
Solution.create!(
    user_id: jae.id ,
    challenge_id: subTree.id,
    hints: "There should be a O(n) notation solution when an array  is already sorted.",
    questions: "Could the elements in the array be negative?"
)

Solution.create!(
    user_id: jil.id ,
    challenge_id: solve.id,
    explaination: "Sort the array.  Add the left and the right elements.  These are actually pointers that will move while iterating.  See if you need a higher or lower value to  hit the target.  If your need to reduce the prior total remove the highest value, and vice versa",

)


Solution.create!(
    user_id: jae.id,
    challenge_id: mathChallenge.id,
    questions: "Is there a way there a solution that can add more than two numbers to equal a tota?"
)

puts "Seed Solutions"
Solution.create!(
    user_id: jil.id ,
    challenge_id: popChallenge.id,
    hints: "There should be a O(n) notation solution when an array  is already sorted.",
    questions: "Could the elements in the array be negative?"
)

Solution.create!(
    user_id: jil.id ,
    challenge_id: balance.id,
    explaination: "Sort the array.  Add the left and the right elements.  These are actually pointers that will move while iterating.  See if you need a higher or lower value to  hit the target.  If your need to reduce the prior total remove the highest value, and vice versa",

)


Solution.create!(
    user_id: candy.id,
    challenge_id: mathChallenge.id,
    questions: "Is there a way there a solution that can add more than two numbers to equal a tota?"
)

Solution.create!(
    user_id: candy.id,
    challenge_id: popChallenge.id,
    explaination: "I'm still working on it.  The tricky part is that the input would look like the top array, and the second array should be asc sorted",

)


Solution.create!(
    user_id: pop.id,
    challenge_id: k.id,
    explaination: "JavaScript has a Math.pow() function to add the absolute value to a create! arrray.  As you add each element use insertion sort to create another",
    questions: "If the interviewers will not accept a JavaSript built in method then, will array[i] * array[i] be old fashioned enough for them :) ? " ,

)

Solution.create!(
    user_id: jil.id,
    challenge_id: vagueChallenge.id,
    questions: "Wow, you are going to spend the first 10 minutes, if pros/cons are based on time.  Then you need to know both.  Ask about for atleast three sample inputs, each one may be different"
)

puts "Finished Seeding Solutions"