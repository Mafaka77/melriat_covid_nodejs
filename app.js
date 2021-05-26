const express=require('express');
// const bodyParser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const path=require('path');


const app = express();

var corsOptions = {
    origin: [ 
    'http://melriat.herokuapp.com/addCovidCases',
    'http://melriat.herokuapp.com/index',
    'http://melriat.herokuapp.com/update/:id',
    'http://melriat.herokuapp.com/addQuarantineList',
    'http://melriat.herokuapp.com/getAllQuarantineList'
]
  };
  app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(express.static(path.join(__dirname, 'public')));
const routes=require('./routes/CovidRoutes');
app.use(routes);

mongoose.connect('mongodb+srv://Mafaka:m_mafaka77@cluster0.pn94u.mongodb.net/covid_melriat?retryWrites=true&w=majority')
.then(()=>{
    app.listen(process.env.PORT || 3000)
})
.catch(err =>{
    console.log(err)
})