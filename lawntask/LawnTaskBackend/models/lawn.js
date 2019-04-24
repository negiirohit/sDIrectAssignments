const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

const Address = new Schema({
    street:{

    },
    city:{
        
    },
    state:{
                
    },
    country:{
                
    },
    geometry :{
        lat : {type: Number },
        long : {type: Number }
      } 

})




var Lawn = new Schema({

        address: {
            type: Address
        },
        silty: {
            type:String
        },
        grass: {
            type: String
        },
        squareFoot:{
            type: Number
        },
        user_id :{
            type : Schema.Types.ObjectId, ref : 'User'
        },
        temperature : [Number],
        precipitation : [Number]

},{
    timestamps: true
})

module.exports = mongoose.model('rnLawn',Lawn);
