const News=require('../Models/NewsModel');

exports.store=(req,res,next) => {
    const headings=req.body.headings;
    const details=req.body.details;
    const date=req.body.date;

    const addNews=new News({
        headings: headings,
        details: details,
        date: date,
    })
    addNews.save().then(result => {
        let data=JSON.stringify(result);
        res.send(data)
    })
}

exports.index=(req,res, next)=> {
    News.find().then(re=>{
        let news =JSON.stringify(re);
        res.send(news)
    })
}
exports.delete=(req,res,next)=>{
    let id=req.params.id
    News.findByIdAndDelete(id).then(re=>{
        let data=JSON.stringify(re);
        res.send(data);
    })
}