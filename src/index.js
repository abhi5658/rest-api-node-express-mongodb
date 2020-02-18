console.log('hello');

let express = require('express');
const app = express();
const PORT = 3000;

const personRoute = require('./routes/person');
app.use(personRoute);

app.use(express.static('public'));

app.listen(PORT, () => console.info(`Server started on ${PORT}`));
