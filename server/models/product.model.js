const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please include a Title!"],
    minlength: [2, "Title must be at least 2 characters!"],
  },
  price: {
    type: Number,
    required: [true, "Please include a price!"],
    minlength: [1, "Some amount required!"],
  },
  description: {
    type: String,
    required: [true, "Please include a last name!"],
    maxlength: [250, "Staaaahp, too much stuff! Limit is 250 characters"],
  },

}, 
{timestamps:true}

);

const Product = mongoose.model("Product", ProductSchema);
        
module.exports = Product;


//!setting up updated and created at time stamps*
//   created_at: {
  //     type: Date,
  
  //   },
  //   updated_at: {
    //     type: Date,
    //   },
    
    
    
    
    
    //TODO: determine working solution for update_at (currently giving us the created at time...)
    //!setting up updated and created at time stamps*
    // ProductSchema.pre('save', function(next){
      //     now = new Date();
      //     this.updated_at = now;
      //     if (!this.created_at) {
        //         this.created_at = now;
        //     }
        //     next();
        // })
        
        

