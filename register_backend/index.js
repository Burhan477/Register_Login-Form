import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/formDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Databaase Connected")
}) 

const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    address: String,
    phone: String,
    gender: String,
    password: String
})

const User = new mongoose.model("demo", userSchema)


// Define Routes
app.post("/login", (req, res)=>{
    // res.send("My API login")
    const { email, password} = req.body
    User.findOne({email: email},(err, user) => {
        if(user){
                if(password === user.password){
                    res.send({message: "Login Successfull", user: user})
                } else{
                    res.send({message: "invalid Password"})
                }
        } else {
            res.send({message: "Usre Required to Register"})
        }
    })
})

app.get("/", (res) => {
    res.send({message: "Welcome to NodeJS"})
})

app.post("/register", (req, res)=>{
    // console.log(req.body)
    // res.send("My API register")

    const { fname, lname, email, address, phone, gender, password} = req.body

    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "user alredy registered"})
        } else {
            const user = new User ({
                fname,
                lname,
                email,
                address,
                phone,
                gender,
                password
            })
            user.save( err => {
                if(err) {
                    res.send(err)
                }else {
                    res.send({ message: "Successfully Registered, Login Now!"})
                }
            })
        }
    })
})

app.listen(9000,() => {
    console.log("Be started at Port 9002")
})





