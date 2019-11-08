# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express and MongoDB back-end skills.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- Body Parser
- Chance

## How it Works

- When loaded, you will see a list of tweets already created
- To add one yourself, click the arrow below 'Write a new tweet'
  - This will be added to the list of tweets in chronological order starting with the newest tweet
- To hide the tweet box, just click the arrow again!
- If user does not have an account, the following information will be created for the user:
  - a name
  - an @ Id
  - a profile picture
- To focus on a tweet, mouse over it and the user will be able to "flag", "retweet", or "like" (functionality not built)
- If the webpage is viewed on a smaller webpage it will be restructred to visually fit the page properly

## Cool Features
- The arrow button moves when the cursor is on it to indicate to the user it can be clicked
- The tweet box slides in and out when the arrow button is clicked
- If the tweet is empty or is over 140 characters, the user is notified
- A button pops up when midway through the page to give the user a quick way to scroll to the top
- The tweets show time stamps either in seconds, minutes, hours or days
- Typing 'enter' also submits a tweet

## Screenshots

![Screenshot of Tweeter when rendered on small browser](https://raw.githubusercontent.com/SamuelRush/tweeter/master/docs/tweetBoxSmall.png)

![Screenshot of Tweeter when rendered on large browser](https://raw.githubusercontent.com/SamuelRush/tweeter/master/docs/tweetBoxBig.png)

![Screenshot of Tweeter when highlighting a tweet, as well as the scroll up arrow](https://raw.githubusercontent.com/SamuelRush/tweeter/master/docs/hightlightAndScrollUp.png)