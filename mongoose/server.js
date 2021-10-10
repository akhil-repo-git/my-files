const express=require('express');
const mongoose= require('mongoose');


const connect=()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/web11");
};


const userSchema = new mongoose.Schema({
    id:{type:Number,required:true,unique:true},
    email:{type:String,required:true},
    first_name:{type:String,required:true},
    last_name:{type:String,required:false},
    age:{type:Number,required:true},
    gender:{type:String,required:true},
});


const productSchema= new mongoose.Schema({
    id:{type:Number,required:true},
    name:{type:String,required:true},
    price:{type:Number,required:true},
    brand:{type:String,required:true},
    category:{type:String,required:true}
})


const User = mongoose.model("user",userSchema);
const Product=mongoose.model("product",productSchema);
const app= express();
app.use(express.json());
//--------------CRUD-------------------------//



app.post("/products",async (req, res) => {    
    

        Product.create(req.body).then((data)=>{
            return res.status(201).send({data});
        }).catch((e)=>{
            res.status(400).send(e);
        });

        
    
    

    
})


app.get("/products",async (req,res)=>{
    const data = await Product.find().lean().exec();
    return res.status(200).send({data});

});


app.patch("/products/:id",async function (req, res) {

        const data = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();

        return res.status(200).send({data});

});

app.delete("/products/:id",async function (req, res) {

    const data = await Product.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send({data});

});


app.get("/products/:id",async (req,res)=>{
    const data = await Product.find({_id:req.params.id}).lean().exec();
    return res.status(200).send({data});

});




app.post("/users",async (req,res)=>{
    const user = await User.create(req.body);
    return res.status(201).send({user});
})


app.get("/",async (req,res)=>{

    let data=await User.find({}).lean().exec();
    return res.send(data);
});



app.listen(5000,async ()=>{
    await connect();
    console.log('listening on port 5000');
});