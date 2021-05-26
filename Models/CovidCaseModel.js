const mongoose = require('mongoose');
const Schema=mongoose.Schema;
var schemaOptions={
    timestamps:true,
    toJSON:{ 
        virtuals:true
    },
    toObject:{
        virtuals:true
    }
};
const addCovidCases=new Schema({
    active_cases:{ type:String},
    total_cases:{ type:String},
    recovered:{ type:String},
    total_deaths:{ type:String},
    home_quarantine:{type:String}
},schemaOptions);
 var AddCovidCases=mongoose.model('CovidCase',addCovidCases)
 module.exports=AddCovidCases;