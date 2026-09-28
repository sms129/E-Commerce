const mongoose= require("mongoose"); 
const bcrypt= require("bcrypt"); 
const DataSchema = new mongoose.Schema(  
    {
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase:true,
        trim: true, 

    },
    password: { type: String, required: true},

    cus_name: { type: String },
    cus_add: { type: String },
    cus_city: { type: String },
    cus_country: { type: String },
    cus_fax: { type: String },
    cus_phone: { type: String },
    cus_postcode: { type: String },
    cus_state: { type: String },

    // Shipping
    ship_name: { type: String },
    ship_add: { type: String },
    ship_city: { type: String },
    ship_country: { type: String },
    ship_phone: { type: String },
    ship_postcode: { type: String },
    ship_state: { type: String },

},
{
    timestamps: true,
    versionKey: false,
}
);


DataSchema.pre("save", async function (next){  
    
    if (!this.isModified("password"))return;  
    this.password =await bcrypt.hash(this.password,10); 
   
});

const userModel= mongoose.model("users",DataSchema); 

module.exports = userModel;
