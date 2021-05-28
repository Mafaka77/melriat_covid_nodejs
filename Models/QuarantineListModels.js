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
const addQuarantineList=new Schema({ 
    categories:{ type:String},
    name:{ type:String},
    mobile:{ type:String},
    address:{ type:String},
    date:{ type:String},
    discharge_date:{ type:String}
   
},schemaOptions);
var AddQuarantine=mongoose.model('AddQuarantine',addQuarantineList)
module.exports=AddQuarantine;