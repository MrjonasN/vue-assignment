const http = require('http')
const port = process.env.port || 5000
const app = require('./app')
const mongodb = require('mongoose')

const serverUri = 'http://localhost:' + port
const mongoUri = 'mongodb+srv://JonasN:bytmig123@cluster0-zubfg.mongodb.net/webapidb?retryWrites=true&w=majority'

http.createServer(app).listen(port, () => console.log('WEBSERVER: ' + serverUri))
mongodb.set('useCreateIndex', true).connect(mongoUri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MONGODB: Running'))