const express = require('express');
const authRouter = require('./routes/authRoutes')
const app = express()

app.use('/auth',authRouter )

app.listen(3001,()=>console.log('server is running'))