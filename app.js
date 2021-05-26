const express=require('express');
// const bodyParser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const path=require('path');


const app = express();

var corsOptions = {
    origin: 'https://melriat.herokuapp.com'
  };
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