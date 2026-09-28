const mongoose= require("mongoose"); // nodes js and mongodb er connection create kore
const bcrypt= require("bcrypt"); //to hide the password,encrypted pass save hobe
const DataSchema = new mongoose.Schema(  //creating a blueprint for mongodb, how will data stracture , mongodb cannot create its own,so mongoose do it
    {
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase:true,
        trim: true, //unecessary space cut

    },
    password: { type: String, required: true},

},
{
    timestamps: true,
    versionKey: false,
}
);


//Hash pass before saving

DataSchema.pre("save", async function (next){  //pre save because,it will check the pass changed or not before save in database 
    //we use async here because this is time consuming work, if we donot use it password will not save properly, it will go next without waiting
    //async means signal to javascript that this function is time consuming, wait untill finish it
    if (!this.isModified("password"))return;  //if pass not new or changed it will go next other wise in next line it will haseh
    this.password =await bcrypt.hash(this.password,10); //password will be change 10 time during hashing 
    //we use await here because we are telling to javascript this this is time consuming line wait here unitll it finished, then go next.
    //this is the build in , save hooar aage mongoose database er shb this er bhitore rakhe and tokhn amra chaile this diye email and pass khuje pete pari
});

const adminModel= mongoose.model("admins",DataSchema); //admins is collection, it will create admins folder/table collection into database and there email and pass info will save


module.exports = adminModel;
