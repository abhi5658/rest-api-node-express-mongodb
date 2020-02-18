console.log('hello');

let express = require('express');
const app = express();
const PORT = 3000;

// middleware : takes the request, can make necessary additions/deletions/modifications
// i.e. processes and sends to next executing function/code
app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`);
    // res.send('middleware');
    next(); // important to send the control to next function
})

//adding person route
const personRoute = require('./routes/person');
app.use(personRoute);

//serving static HTML page
app.use(express.static('public'));

//Handling errors at the end of all middlewares
// handling 404 - Resource not found
app.use((req, res, next) => {
    res.status(404).send('You have jumped in the middle of nowhere!')
})

app.listen(PORT, () => console.info(`Server started on ${PORT}`));
