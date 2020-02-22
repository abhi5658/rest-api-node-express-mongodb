const mongoose = require('mongoose');

const secret = require('./db_credential');

// mongodb+srv://abhishek:<password>@test-cluster-mongodb-8sljg.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://${secret.user}:${secret.password}@${secret.server}/${secret.database}`,
    { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Customer', CustomerSchema);