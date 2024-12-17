const express = require('express');
const cors = require('cors');
const connection = require('./connection');
const userRoute = require('./routes/user');
// const planstreamerauth = require('./routes/planstreamer/auth/authentication');
// const expenses = require('./routes/planstreamer/expenses/expenses');
// const income = require('./routes/planstreamer/income/income');
// const investment = require('./routes/planstreamer/investment/investment');
// const liabilities = require('./routes/planstreamer/liabilities/liabilities');
// const realestate = require('./routes/planstreamer/realestate/realestate');
const app = express();
const path = require('path');



// app.set("views",path.join(__dirname, "views"));
// app.set("view engine", "ejs")
// app.get('/',(req,res)=>{
// 	res.render("demo")
// });

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use('/user', userRoute);
app.use('/user',userRoute);
// app.use('/userauth', planstreamerauth);
// app.use('/expenses',expenses);
// app.use('/income',income);
// app.use('/investment',investment);
// app.use('/liabilities',liabilities);
// app.use('/realestate',realestate);

module.exports = app;