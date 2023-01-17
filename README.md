# Rock, Paper, Scissors - 'the Office' Style!
### Abstract:
We were tasked with creating our own rock, paper, scissors game where the user can select a 'fighter' to play against the computer whose fighter will be randomly selected. We also had to create a version of rock, paper, scissors where there are 5 possible fighters with a way to select and switch between the two games. Wins for each 'player' should be displayed as well as the winner of each game. The game should also reset itself automatically.

I chose to create an office style theme for my game where Michael is the rock, Jim is the paper, and Dwight is the scissors. I also included a welcome message informing the users of the concept and some computer feedback in the form of character quotes based off wins, losses or draws.

### Installation Instructions:
1. Copy the SSH key on GitHub inside the code dropdown
1. Using the terminal, run `git clone [SSH key here]`
1. Run command `cd rock-paper-scissors` to move into the project directory
1. Run command `open index.html` to launch the application in the web browser

### Preview of App:
GitHub Pages Link: TBD

### Context:
This project was created during our 5th week in Turing as our final solo project. I spent an estimated 30 hours of time on this project with around half of it being on the core requirements for the project. The other half was spent on creating the office theme, creating a scaling functionality, creating a mathematical algorithm to solve the game and adding in little extras.

### Contributors:
This was a solo project. See my other work here: https://github.com/qrispi

### Learning Goals:
- Solidify and demonstrate your understanding of:
  - DRY JavaScript
  - Event delegation to handle similar event listeners
- Understand the difference between the data model and how the data is displayed on the DOM
- Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge

### Wins + Challenges
- Challenges:
  - Working with CSS to scale intuitively between a wide range of screen sizes.
  - Knowing where to start with creating the player and game classes and how they interact.
  - Getting the correct specific win message to display (i.e. Dwight intimidates Toby insead of Dwight wrestles Michael and Intimidates Toby)
  
- Wins:
  - While extremely time-consuming, creating an algorithm to solve rock, paper, scissors for an infinite amount of odd fighters was pretty cool.
  - In the same boat, while unnecessary, getting specifc rules for why a game was a win or loss to display felt like a nice intuitive touch.
  - Implementing extra features like scaling and computer 'feedback' (Robert California quotes pop up on a timer when you win, loss or draw)
  - Figuring out the correct way and timing for showing/hiding/creating HTML elements when multiple things are clickable and happening simultaneously.
  
### Possible Extensions:
- Letting the user pick their own avatar
- Setting up local browser storage
- Improving scalability
- Quotes from the characters are displayed when the mouse is hovered over them
- Adding a third game option using my algorithm that will create a new game with whatever 'fighters' the user puts in.
- Letting the user pick their opponent and each opponent will have a difficulty setting (i.e. easy wins 10% of the time, hard wins 90% of the time etc.)
