/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1;

document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

document.querySelector('.dice').style.display = 'none';

/*
Events: notifications that are sent to notify the code that something happene on the webpage.

Examples: clicking a button, resizing windows, scrolling down or pressing a key.

Event Listener: a function that performs an action based on a certain event. It waits for a specific event to happen.

Message Queue: this is where all the events that happen in the browser are put. And they sit there, waiting to be processed which only happens once the Execution Stack is empty.
*/