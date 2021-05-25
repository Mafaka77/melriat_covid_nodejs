const ActiveCases=require('../Models/ActiveCaseModel');

exports.store=(req,res,next)=>{
    const name=req.body.name;
    const age=req.body.age;
    const section=req.body.section;
    const admitted_to=req.body.admitted_to;
    const admitted_date=req.body.admitted_date;

    const add=new ActiveCases({
        name: name,
        age: age,
        section: section,
        admitted_to: admitted_to,
        admitted_date: admitted_date,
    });

    add.save().then(re=>{
        let data=JSON.stringify(re);
        res.send(data);
    })
}
exports.index=(req,res, next)=>{
    ActiveCases.find().then(re=>{
        let data=JSON.stringify(re);
        res.send(data);
    })
}

exports.delete=(req,res,next)=>{
    let id=req.params.id;
    ActiveCases.findByIdAndDelete(id).then(re=>{
        let data=JSON.stringify(req);
        res.send(data);
    })
}