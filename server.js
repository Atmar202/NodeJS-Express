const express = require('express');
const app = express();

app.get("/", function(request, response) {
    console.log(request);
    response.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(request, response) {
    response.send("Contact me at my_email@...com");
});

// Individual Task
app.get("/about", function(request, response) {
    response.write("<h1>About Me</h1>");
    response.write("<p>My name is Atmar, I'm learning Software Development.</p>");
    response.write("<p>I'm currently learning NodeJS</p>");
    response.send();
});


app.listen(3000, function() {
    console.log("Server running on port 3000");
});