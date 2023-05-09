const express = require('express')
const app = express()
const userRouter = require('./users.js')
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
// app.use(express.static("public"))
  app.get("/", (request,response) => {
    response.render("index",{text:"vasant"})

  })

  app.use('/users', userRouter)
  app.listen(3500)
