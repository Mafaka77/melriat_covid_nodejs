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
const activeCase=new Schema({
    name:{ type: String},
    age:{ type:String},
    section:{ type:String},
    admitted_to:{ type:String},
    admitted_date:{ type:String}
},schemaOptions);

const ActiveCases=mongoose.model('ActiveCases',activeCase);
module.exports=ActiveCases;