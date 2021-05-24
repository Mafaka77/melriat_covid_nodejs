const AddCases=require('../Models/CovidCaseModel')

exports.store=(req,res,next) => {
    const active_cases=req.body.active_cases;
    const total_cases=req.body.total_cases;
    const recovered=req.body.recovered;
    const total_deaths=req.body.total_deaths;

    const add=new AddCases({
        active_cases: active_cases,
        total_cases: total_cases,
        recovered: recovered,
        total_deaths: total_deaths
    });
    add.save().then(re=>{
       var data=JSON.stringify(re);
       res.send(data);
    }).catch(err=>console.log(err))
}
exports.index=(req,res, next)=>{
    AddCases.find().then(re=>{
        // console.log(re)
        var data = JSON.stringify(re)
        res.send(data);
    }).catch(err=>console.log(err))
}

exports.updateData=(req,res,next)=>{
    const id=req.params.id;
//     const active_cases=req.body.active_cases;
//     const total_cases=req.body.total_cases;
//     const recovered=req.body.recovered;
//     const total_deaths=req.body.total_deaths;
//    const add={};
//    add.active_cases=active_cases;
//    add.total_cases= total_cases;
//    add.recovered= recovered;
//    add.total_deaths= total_deaths;
    AddCases.findByIdAndUpdate(id,req.body,{ useFindAndModify: false }).then(re=>{
            console.log(re)
            var data = JSON.stringify(re)
            res.send(data);
    }).catch(err=>console.log(err))
}