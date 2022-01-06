const { connect, connection, Mongoose } = require('mongoose');

// mongoose connection
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/socialNetworkApi';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;