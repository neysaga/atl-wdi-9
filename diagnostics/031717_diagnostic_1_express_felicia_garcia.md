Question 1: What is the Request/Response Cycle? How does it work?
It requests the files that you need in the app and responds with the variables that you call in a particular function.

Question 2: What are the differences between a GET request and a POST request?

A get request is grabbing the content from another file, while a post request is pushing the content upwords.

Question 3: What does npm init do?

it insures that you're using the most updated version of the node installation.

Question 4: What does CRUD stand for? What are the HTTP verbs that are associated with each function?
Create, Route, Update, Delete. 


Question 5: If we have a form where we want to create new data, what type of method do we use in our form? 
    POST


Question 6: If the following form was submitted, what would action="myScript.js" do?
It connects the data to that specific file.

<form method="POST" action="myScript.js?_method=PUT">
  <input type="text" value="name"/>
  <button type="submit">Submit</button>
</form>
Question 7: Write an express route that handles a POST request to the url /menus and redirects to the /homepage

app.post('/menus', function(req, res) {
	res.send('/homepage')
});

Question 8: In the following express route, write how you would grab the values of :id and :song_id in javascript.

app.get("/artist/:id/song/:song_id"), function(req, res){
	res.send('/:id');
	id:song_id
});
Question 9: What is MVC? How have we been using it so far?
MVC is the framework of the app.

Bonus Question

Question 10: Write an express route that handles a GET request to the url /products and sends back the JSON object {error: "Bad Request"}