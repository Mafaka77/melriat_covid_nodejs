const express=require('express');
var path = require('path');
const router=express.Router();
var cors = require('cors')
const AddCovidCasesController=require('../Controllers/CovidCaseController');
const AddQuarantine = require('../Controllers/QuarantineListController')
const AddActiveCase= require('../Controllers/ActiveCaseController')
const AddNews= require('../Controllers/NewsController')

router.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });
  //COVID CASES ROUTES
router.post('/addCovidCases',cors(),AddCovidCasesController.store);
router.get('/index',cors(),AddCovidCasesController.index)
router.put('/update/:id',cors(),AddCovidCasesController.updateData);

//QUARANTINE_LIST routes
router.post('/addQuarantineList',cors(),AddQuarantine.store);
router.get('/getAllQuarantineList',cors(),AddQuarantine.index);
router.delete('/deleteQuarantineList/:id',cors(),AddQuarantine.delete);

//ACTIVE CASES ROUTES
router.post('/addActiveCase',cors(),AddActiveCase.store);
router.get('/getAllActiveCase',cors(),AddActiveCase.index);
router.delete('/deleteActiveCase/:id',cors(),AddActiveCase.delete);

//NEWS routes

router.post('/addNews',cors(),AddNews.store);
router.get('/getNews',cors(),AddNews.index);
router.delete('/deleteNews/:id',cors(),AddNews.delete);
module.exports =router;

