const AddQuarantine=require('../Models/QuarantineListModels');

exports.store=(req,res,next) => {
    const categories=req.body.categories;
    const name=req.body.name;
    const mobile=req.body.mobile;
    const address=req.body.address;
    const date=req.body.from_date;
    const discharge_date=req.body.discharge_date;
    const add=new AddQuarantine({
        categories:categories,
        name:name,
        mobile:mobile,
        address:address,
        date:date,
        discharge_date:discharge_date
    });
    add.save().then(re=>{
        var data = JSON.stringify(re)
        res.send(data);
    })
}
exports.index=(req,res,next)=> {
    AddQuarantine.find().then(re=>{
        console.log(re);
        var data = JSON.stringify(re)
        res.send(data);
    })
}
exports.delete=(req,res,next)=>{
    const id=req.params.id
    AddQuarantine.findByIdAndDelete(id).then(re=>{
        var data = JSON.stringify(re);
        res.send(data);
    })
}