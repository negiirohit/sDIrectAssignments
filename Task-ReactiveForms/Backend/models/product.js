const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({

      	 SKU: {
            type: String,
            required:true,
	    unique: true
          },
	
          name: {
              type: String,
              required: true  
          },
           quantity : {
                type: Number,
		required: true
          },
	
},{ timestamps: true});





module.exports = mongoose.model('rohitProduct',Product);
