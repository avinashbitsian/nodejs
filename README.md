nodejs
======

This is a search layer for searching patient's name , address and gender.
This requires mysql npm module and jquery, I have not included it here.
When the search string is passed in the search.html, the search string along with the username and password (currently hardcoded) is sent to the node server running at port 8585.
Then the server authenticates the password by encrypting it and comparing it with the value in the database.
After that the server does the query on the database to display the search results in the console (only if the user is authenticated).
Here is the snapshot of the basic authentication.


![Alt text](https://dl.dropboxusercontent.com/u/50649632/result.JPG "Sphinx with nodeJS module")


The search.js file does search over the Sphinx search server index made on the same MySQL table and returns the row.
search.js requires npm sphinxapi module.
Here is a snapshot of the result.


![Alt text](https://dl.dropboxusercontent.com/u/50649632/sphinx_node.JPG "Sphinx with nodeJS module")

