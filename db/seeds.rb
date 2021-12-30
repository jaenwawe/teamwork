

puts "Seed Users"

jil = User.create!(
    username: "ologn",
    password: "123abc",
    email: "candy@candy.com",
    first_name: "candy",
    avatar_url: "https://bit.ly/326tkhU",
    bio: "Super Nerd, runs O N(LogN) speed, and eats at O(1) speed.  Let's get started!"
)


candy = User.create!(
    username: "nsquared",
    password: "123abc",
    email: "candy@gmail.com",
    first_name: "Candy",
    avatar_url: "https://bit.ly/3EVQ8j4",
    bio: "Super Nerd, runs O N(LogN) speed, and eats at O(1) speed.  Let's get started!"
)


pop = User.create!(
    username: "popsickle",
    password: "123abc",
    email: "pop@gmail.com",
    first_name: "Judeo",
    avatar_url: "https://bitly.com/3DZdIdm",
    bio: "Geek squad , types, naps, listens to pop music.  I'm ready!"
)
puts "Finished Seeding  Users"


puts "Seed Challenges"
popChallenge = Challenge.create!(
    title: "TwoArray",
    question: "Recieve a non-empty array of sorted integers and return a seperate array ascending which squares the original element from the same index"
)

vagueChallenge = Challenge.create!(
    question: "Sort this array using merge sort then insertion sort and discusss the pros and cons"
)


mathChallenge = Challenge.create!(
    title: "TwoSum",
    question: "Accept an array of integers that will not be null.  Accept a target number.  Find two numbers in the first array that add up to the target integer."
)
puts "Finished Seeding Challenges"



puts "Seed Solutions"
Solution.create!(
    user_id: jil.id ,
    challenge_id: popChallenge.id,
    hints: "There should be a O(n) notation solution when an array  is already sorted.",
    questions: "Could the elements in the array be negative?"
)

Solution.create!(
    user_id: jil.id ,
    challenge_id: mathChallenge.id,
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
    photo_url: "https://bit.ly/3maxcWp"
)


Solution.create!(
    user_id: pop.id,
    challenge_id: popChallenge.id,
    explaination: "JavaScript has a Math.pow() function to add the absolute value to a create! arrray.  As you add each element use insertion sort to create another",
    questions: "If the interviewers will not accept a JavaSript built in method then, will array[i] * array[i] be old fashioned enough for them :) ? " ,

)

Solution.create!(
    user_id: jill.id,
    challenge_id: vagueChallenge.id,
    questions: "Wow, you are going to spend the first 10 minutes, if pros/cons are based on time.  Then you need to know both.  Ask about for atleast three sample inputs, each one may be different"
)

puts "Finished Seeding Solutions"