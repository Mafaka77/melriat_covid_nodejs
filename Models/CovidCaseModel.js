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
    male_case:{type:String},
    female_case:{type:String},
    naupang_case:{type:String},
    thalai_case:{type:String},
    upa_case:{ type:String},
    home_quarantine:{type:String},
    male_quarantine:{ type:String},
    female_quarantine:{ type:String},
    naupang_quarantine:{ type:String},
    thalai_quarantine:{ type:String},
    upa_quarantine:{ type:String},
    recover_percent:{type:String},
    total_quarantine:{type:String},
    quarantine_center:{type:String},
    
    

},schemaOptions);
 var AddCovidCases=mongoose.model('CovidCase',addCovidCases)
 module.exports=AddCovidCases;