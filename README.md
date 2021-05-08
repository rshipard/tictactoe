# Tic Tac Toe Game

This is a game designed as my first project within the GA Software Immersive Flex Program. We needed to ensure it:

- **Render a game in the browser**
- **Switch turns** between more than one player
- **Design logic for winning** & **visually display which player won**
- **Include separate HTML / CSS / JavaScript files**
- Use **Javascript** for **DOM manipulation**
- **Deploy your game online**, where the rest of the world can access it
- Use **semantic markup** for HTML and CSS (adhere to best practices)

## Check out the end result!

[Tic Tac Toe](https://rshipard.github.io/tictactoe/)

## Technologies Used

I used: 

- HTML
- CSS
- JavaScript

## Features

I have a few different ways to check that both of the play names have been filled in. until that it done it will simply display an error message. If they try to click before the names are entered the board won't allow them to enter a value, or uncremement the turn counter.

Once the first player has been determined, they begin with "x" and the turnSwitcher function will cycle between the "x" and "o", and increment the turn counter.

After each click on the div's it wins the win conditons function to determine if anyone has won. When they have it displays a congratulation message. at the bottom. If they decide to click on random dics, it replaces them with "game over". If it gets a match to a win condition based on the "game over" messages it tells them to stop stuffing around and play a new game. (I haven't yet added a constant score tracker or a reset option)


<!-- (ADD A SCREENSHOT HERE) -->

## Planning

I began by trying to do a wireframe sketch of the layout, so I could have a sence of where things would be, and exactly what elements I would need to reference in the HTML.

Once that was done, I wrote out the HTML, as it was fairly straightforward and noted my classes/ID's within the JS and CSS files.

That done I created a pseudocode using comments within the JS file, so I had a clear understanding of the overall processes and changes I needed to make.

## Known Bugs

- I have managed to get the game to allow "o" to go first, which it shouldn't be able to do, but I haven't been able to replicate it

## Future features

- Add a display for the player scores.
- rework the CSS to be clearer and 
- make the game scaleable so players can pick their own board size etc
- I would really need to re-work my Javascript over from top to bottom in light of what I've learned, but feel like doing so would cut the code in half at least.

## My experience developing the game (Optional)

My initial thoughts were to create only a few variables, and then to use nested functions to small blocks of code that I could test individually, then bring them together within a few larger functions that would be called as people clicked on the individual cells fo the game.

I was trying to look for ways to make the game scaleable, but I decided early on that could take a backseat to getting the code done quickly. My reasoning being it's better to have code that works, and that I can easily bug test, than to do something that scale wells but I won't know if it  works until much later.

Too late I realised that the planning stages are quite possible the most important. If you push something off, or miss it entirely the time spent having to redesign or re-engineer can end up costing you hours for what should have been a 2 minute dot point in your planning.

Case in point - scaleability. If I'd factored that in early and focused on it I would have written this code completely differently.