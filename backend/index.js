const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const indexRouter = require('./routes/indexRoutes');
const holaRouter = require('./routes/holaRoutes');
const apiRouter = require("./routes/api/apiRoutes");
const userRouter = require('./routes/userRoutes')


app.use('/', indexRouter);
app.use('/hola', holaRouter);
app.use('/api', apiRouter);
app.use('/users', userRouter);


const port = 3001;

app.listen(port,()=>{
    console.log('listening on port '+ port);
});