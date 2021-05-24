const express=require('express');
var path = require('path');
const router=express.Router();
const AddCovidCasesController=require('../Controllers/CovidCaseController');
const AddQuarantine = require('../Controllers/QuarantineListController')

router.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });
  //COVID CASES ROUTES
router.post('/addCovidCases',AddCovidCasesController.store);
router.get('/index',AddCovidCasesController.index)
router.put('/update/:id',AddCovidCasesController.updateData);

//QUARANTINE_LIST routes
router.post('/addQuarantineList',AddQuarantine.store);
router.get('/getAllQuarantineList',AddQuarantine.index);
router.delete('/deleteQuarantineList/:id',AddQuarantine.delete);
module.exports =router;