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
    date:{ type:Date},
    dischrage_date:{ type:Date}
   
},schemaOptions);
var AddQuarantine=mongoose.model('AddQuarantine',addQuarantineList)
module.exports=AddQuarantine;