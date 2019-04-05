/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
Events: notifications that are sent to notify the code that something happene on the webpage.

Examples: clicking a button, resizing windows, scrolling down or pressing a key.

Event Listener: a function that performs an action based on a certain event. It waits for a specific event to happen.

Message Queue: this is where all the events that happen in the browser are put. And they sit there, waiting to be processed which only happens once the Execution Stack is empty.
*/

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// Reset all scores
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function() {

    // 1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1;
    // console.log(dice);
    
    // 2. Display Result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // 3. Update the round score IF the rolled number was not a 1
    if (dice !== 1)
    {
        // Add Score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else
    {
        // Next player
        nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {

    // 1. Add current score to global score
    scores[activePlayer] += roundScore;

    // 2. Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; 

    // 3. Check if player won the game
    if (scores[activePlayer] >= 20)
    {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    }
    else
    {
        // 4. Next player's turn
        nextPlayer();
    }

});

/* Functions */

function nextPlayer()
{
    roundScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}