const AddCases=require('../Models/CovidCaseModel')

exports.store=(req,res,next) => {
    const active_cases=req.body.active_cases;
    const total_cases=req.body.total_cases;
    const recovered=req.body.recovered;
    const total_deaths=req.body.total_deaths;
    const male_case=req.body.male_case;
    const female_case=req.body.female_case;
    const naupang_case=req.body.naupang_case;
    const thalai_case=req.body.thalai_case;
    const upa_case=req.body.upa_case;
    const home_quarantine=req.body.home_quarantine;
    const male_quarantine=req.body.male_quarantine;
    const female_quarantine=req.body.female_quarantine;
    const naupang_quarantine=req.body.naupang_quarantine;
    const thalai_quarantine=req.body.thalai_quarantine;
    const upa_quarantine=req.body.upa_quarantine;

    

    const add=new AddCases({
        active_cases: active_cases,
        total_cases: total_cases,
        recovered: recovered,
        total_deaths: total_deaths,
        female_case: female_case,
        male_case: male_case,
        naupang_case: naupang_case,
        thalai_case:thalai_case,
        upa_case: upa_case,
        home_quarantine: home_quarantine,
        male_quarantine: male_quarantine,
        female_quarantine: female_quarantine,
        naupang_quarantine: naupang_quarantine,
        thalai_quarantine:thalai_quarantine,
        upa_quarantine: upa_quarantine,

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