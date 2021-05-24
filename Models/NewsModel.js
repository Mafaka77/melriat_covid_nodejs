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
const addNews=new Schema({
    headings:{ type:String},
    details:{ type:String},
    post_date:{ type:String},
    image:{ type:String},
},schemaOptions);

var AddNews=mongoose.model('AddNews',addNews);
module.exports=AddNews;