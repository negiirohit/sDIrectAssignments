var express = require('express');
const Company = require('../models/companySchema');
const Job = require('../models/jobSchema');
const mongoose =require('mongoose');

module.exports.createJob = (req, res, next) => {
    var job = req.body;
    job.provider = req.user.id;

    Job.create(job)
    .then(job => {
        JPUser.findOneAndUpdate({_id:req.user.id},{$push :{ jobs : job._id }},{new:true})
        .populate('jobs')
        .then( user => {
            console.log(user);
            res.json({
                success: true,
                message: 'Job Created Succesfully',
                data : user
            });
        
    })
    .catch((err) => {
        res.status(400);
        res.json({
             success : false,
              message : err.message,
        }); 
    })

    }) 
}


module.exports.findJobs = (req, res, next) =>{
    Job.find(req.body)
    .population('provider')
    .then( jobs =>{
        console.log(jobs);
        res.json({
            success:true,
            message: 'Jobs fetched',
            data: jobs
        })
    } )
}

module.exports.getAllJobs = (req, res, next) => {
    var page_limit = Number(req.params.page_limit)
    var skip_no    = (Number(req.params.page_no)-1)*page_limit
    Job.find()
    .skip(skip_no)
    .limit(page_limit)
    .then((jobs) => {
  
        Job.countDocuments({})
        .then(count=> {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
         // res.json({count: count, jobs:jobs});
          res.json({
            success:true,
            message: 'Jobs fetched',
            data: { count : count, jobs: jobs }
        })
        } )
    }, (err) => next(err))
    .catch((err) => next(err));
  }

  module.exports.getDistinct = (req, res, next) => {
    console.log(req.params.distinctField);
    Job.distinct(req.params.distinctField)
    .then( distinctFieldValues => {
        console.log("locations: "+distinctFieldValues );
            res.json({
                success: true,
                message: 'got distinct',
                data :  distinctFieldValues
            });
        
    })
    .catch((err) => {
        res.status(400);
        res.json({
             success : false,
              message : err.message,
        }); 
    })

}

//    router.get('/getJobs/:field/:value/:page_no/:page_limit',
//    jobController.getJobs);
module.exports.getJobs = (req, res, next) => {
    console.log('query params: '+JSON.stringify(req.params))
    var field = req.params.field
    var value = req.params.value
    var page_limit = Number(req.params.page_limit)
    var skip_no    = (Number(req.params.page_no)-1)*page_limit
    let query ={};
    if(field!='all')
        query[field] = value;
    console.log(Job.find(query));    
    Job.find(query)
    .skip(skip_no)
    .limit(page_limit)
    .then((jobs) => {  
     //   console.log(Job.count({query}));
        Job.count(query)
        .then(count=> {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(
          {
            success:true,
            message: 'Jobs fetched',
            data: { count : count, jobs: jobs }
          })
        } )
    }, (err) => next(err))
    .catch((err) => next(err));
  }
