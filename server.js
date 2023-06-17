const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require("mongoose").default
const AuthRoute = require('./routes/AuthRoute.js')
const ShareRoute = require('./routes/ShareRoute.js')

const UserRoute = require('./routes/UserRoute.js')
const PostRoute = require('./routes/PostRoute.js')
const UploadRoute = require('./routes/UploadRoute.js')
const ChatRoute = require('./routes/ChatRoute.js')
const MessageRoute = require('./routes/MessageRoute.js')
const CommentRoute = require('./routes/CommentRoute.js')
const SchemeRoute = require('./routes/SchemeRoutes.js')
const { createServer } = require('http')
require('dotenv').config()



const httpServer = createServer(app)




app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// app.use(express.static(__dirname + '/build'))
// app.get("/", function (req, res) {
//     return res.sendFile(path.join(__dirname, "build", "index.html"))
// })


app.use('/share', ShareRoute)

const PORT = process.env.PORT
const CONNECTION = process.env.MONGODB_CONNECTION
const port = process.env.PORT
httpServer.listen(port || 5000)
console.log(`Server running on port: ${port || 5000}`)
