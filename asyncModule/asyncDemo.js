const async = require('async'); 
const fs = require('fs');

const mongoose = require('mongoose');




console.log('async module tutorial');     

// /*
let f1 = () => {
    setTimeout(()=>{
        return [1,2,3,4];
    },3000)
}

let f2 = ()=> {
    setTimeout(()=>{
        return [5,6,7,8];
    },2000)
}

let f3 = ()=> {
    setTimeout(()=>{
        return [9,10,11,12];
    },1000)
}

function cb(arg){
    return(null,setTimeout(()=>{
                        return (arg);
                },1000-arg))
}

async.concat([1,2,3],cb,(err,result)=>{
    console.log("concat")
    if(err){
       console.log(err);        
    }
    else
       console.log(result);
})


async.filter(['app.js','package.json','file3'], function(filePath, callback) {
    fs.access(filePath, function(err) {
        callback(null, !err)
    });
}, function(err, results) {
    console.log("filter: ",results)
});


async.reject(['app.js','package.json','file3'], function(filePath, callback) {
    fs.access(filePath, function(err) {
        callback(null, !err)
    });
}, function(err, results) {
    console.log("reject :",results)
});



async.map(['app.js','package.json','file3'], fs.stat, function(err, results) {
    console.log("map :",results)
});


async.mapValues({f1:'app.js',f2:'package.json',f3:'file3'}, fs.stat, function(err, results) {
    console.log("map values:",results)
});


//Db Connection 
const url =  'mongodb://sdirectdb:sdirectdb@192.168.0.5/sdirectdb'
const connect = mongoose.connect(url, {
   useNewUrlParser: true
  });

const User = mongoose.model('user', new mongoose.Schema({ firstname: String, lastname : String }));

connect.then((db) => {
    
    async.groupBy(["5cc4307975cedb45939442e0","5cc6a5f2c163472c62bd9b06"], function(userId, callback) { 
        User.findById(userId, function(err, user) {
            if (err) return callback(err);
            return callback(null, user.firstname);
        });
    }, function(err, result){
        console.log(result);
        return;
    });
}, (err) => { console.log(err); });


async.every(['app.js','package.json','file3'], function(filePath, callback) {
    fs.access(filePath, function(err) {
        callback(null, !err)
    });
}, function(err, result) {
    console.log("every result: ",result);
});


async.some(['app.js','package.json','file3'], function(filePath, callback) {
    fs.access(filePath, function(err) {
        callback(null, !err)
    });
}, function(err, result) {
    console.log("some result: ",result);
});



 async.sortBy(['package.json','asyncDemo.js','app.js'], function(file, callback) {
     fs.stat(file, function(err, stats) {
         console.log(stats);
         callback(err, stats.mtime*-1);
     });
 }, function(err, results) {
     console.log("sort by result : ",results);
 });

async.sortBy([1,9,3,5], function(x, callback) {
    callback(null, x);
}, function(err,result) {
   console.log("sort by ascending : ",result)
});

// descending order
async.sortBy([1,9,3,5], function(x, callback) {
    callback(null, x*-1);    //<- x*-1 instead of x, turns the order around
}, function(err,result) {
   console.log("sort by descending : ",result)
});



async.transform([1,2,3],1, function(acc, item, index, callback) {
    // pointless async:
    process.nextTick(function() {
        acc += item * 2
        callback(null)
    });
}, function(err, result) {
    console.log("transform  : ",result);    
});

let fun1 = function(callback) {
                setTimeout(function() {
                    callback(null, 'one');
                }, 200);
            }
let fun2 = function(callback) {
                setTimeout(function() {
                    callback(null, 'two');
                }, 100);
            }

async.parallel([fun1,fun2],
function(err, results) {
    console.log('async parallel ',results)
});

// an example using an object instead of an array
async.parallel({
    one: function(callback) {
        setTimeout(function() {
            callback(null, 1);
        }, 200);
    },
    two: function(callback) {
        setTimeout(function() {
            callback(null, 2);
        }, 100);
    }
}, function(err, results) {
    console.log('async parallel ',results)    
});






// create a queue object with concurrency 2
var q = async.queue(function(task, callback) {
    console.log('hello ' + task.name);
    callback();
}, 2);

// assign a callback
q.drain = function() {
    console.log('all items have been processed');
};

// add some items to the queue
q.push({name: 'foo'}, function(err) {
    console.log('finished processing foo');
});
q.push({name: 'bar'}, function (err) {
    console.log('finished processing bar');
});

// add some items to the queue (batch-wise)
q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
    console.log('finished processing item');
});

// add some items to the front of the queue
q.unshift({name: 'bar'}, function (err) {
    console.log('finished processing bar');
});



async.series({
    one: function(callback) {
        setTimeout(function() {
            callback(null, 1);
        }, 200);
    },
    two: function(callback){
        setTimeout(function() {
            callback(null, 2);
        }, 100);
    }
}, function(err, results) {
    console.log('async series object ',results)    
});



async.series([
    function(callback) {
        // do some stuff ...
        callback(null, 'one');
    },
    function(callback) {
        // do some more stuff ...
        callback(null, 'two');
    }
],
// optional callback
function(err, results) {
    console.log('async series array: ',results)        
});




//async waterfall
async.waterfall([
        function(callback) {
            callback(null, 'one', 'two');
        },
        function(arg1, arg2, callback) {
            callback(null, 'three');
        },
        function(arg1, callback) {
            callback(null, 'done');
        }
    ], function (err, result) {
        console.log("waterfall array : ",result);
});


async.waterfall([
        (callback)=>{
            callback(null,'one1 ','two1 ' )
        },
        myFirstFunction,
        (arg1, arg2, callback) => {
            callback(null, arg1+arg2+'three ','test ');
        },
        mySecondFunction,
        myLastFunction,
    ], 
    function (err, result) {
        console.log('waterfall',result)
});


function myFirstFunction(a1,a2,callback) {
    console.log("watefall : ",a1,a2);
    callback(null, a1+a2+'one', 'two');
}

function mySecondFunction(arg1, arg2, callback) {
    callback(null, arg1+arg2+'three');
}


function myLastFunction(arg1, callback) {
    callback(null, arg1+'done');
}



async.series({
    1: (cb)=>{
        setTimeout(()=>{
            console.log('11');
            cb(null,'one')
        }),3000
    },
    2: (cb)=>{
        setTimeout(()=>{
            console.log('12');            
            cb(null,'two')
        }),1000
    },
    3: (cb)=>{
        setTimeout(()=>{
            console.log('13');            
            cb(null,'three')
        }),500
    },
},(err,result)=>{
    console.log("series :",result);
})


async.parallel({
    1: (cb)=>{
        setTimeout(()=>{
            console.log('21');            
            cb(null,'one')
        }),3000
    },
    2: (cb)=>{
        setTimeout(()=>{
            console.log('22');            
            cb(null,'two')
        }),1000
    },
    3: (cb)=>{
        setTimeout(()=>{
            console.log('23');            
            cb(null,'three')
        }),500
    },
},(err,result)=>{
    console.log("parallel :",result);
})

