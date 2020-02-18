console.log('hello');

let express = require('express');
const app = express();
const PORT = 3000;

const path = require('path');

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
// handling error 404 - Resource not found
app.use((req, res, next) => {
    res.status(404).send('You have jumped in the middle of nowhere!')
});

//handling error 500 - Internal server error
// have to add a function which can generate this error
// adding the error generating func in person router
app.use((err, req, res, next) => {
    console.log(err.stack);

    res.status(500).sendFile(path.join(__dirname, '../public/500.html'));
})

app.listen(PORT, () => console.info(`Server started on ${PORT}`));
