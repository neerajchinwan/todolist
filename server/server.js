const mongoose  = require('mongoose'); 

const app = require('./app');
const PORT = 5000;
const LOCAL_CONN_STRING = 'mongodb://127.0.0.1:27017/Project1'

mongoose.connect(LOCAL_CONN_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(conn => console.log('DB is connected successfully'))
.catch(error => console.log('Error', error.message))

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));