#README.md
1.) Home page 
HTML: Create a form to accept user data
    On submit: Store the user data in local storage
    THEN redirect the user to the map/list page [check!]

2.) Map/List page 
HTML: Create a ul to inject quests into [check]
    BEFORE ANYTHING, IF ALL QUESTS ARE COMPLETED, REDIRECT TO THE RESULTS PAGE
Grab quest data, loop through it, and generate a link for each quest [check]
    -if the quest has been completed, cross it out
    -if the quest has not been completed, there should be a link to the correct quest
    if the user has <=0 redirect them 



3.) Quest page
HTML: header, image, paragraph, and a list of radio buttons [check]
-Grab the id of the quest from the URL [check]
-Use that id to 'findById' that quest in our quest data [check]
-Use the quest to populate the elements of the html [check]
-On Submit: 
    -Calculate the users new stats (HP and gold)
    -Put the new stats in local storage
    -Send user back to the map



4.) Results page
    -Display some custom ending determined by the  user's stats
    -button to play again (clears local storage and redirects to home page)
