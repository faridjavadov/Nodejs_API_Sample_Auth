import { User } from "../models/User.js"

export const AuthController = {
    getData: (req, res) => {
        User.find().then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send(err);
        })
    },
    getDataById: (req, res) => {
        User.findById(req.params.id).then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send(err);
        })
    },
    createUser: async(req, res) => {
        let valarray = await User.find()
        if (valarray.find(c => c.email == req.body.email)) {
            res.status(500).send('User is already registered')
        }
        else {
            User.create({
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                password: req.body.password
            }).then(data => {
                res.send(data)
            }).catch(err => {
                res.status(500).send(err)
            })
        }
    },
    loginUser: async(req,res)=>{
        let valarray = await User.find()
        let valuser = valarray.find(c=>c.email == req.body.email)
        if(!valuser){
            res.send('There is not registered user for this email,please go to the registration page')
        }
        else if(valuser.password==req.body.password){
            res.send('Succesfully signed in!')
        }
        else{
            res.send('Password is incorrect!')
        }
    },
    deleteUser: async(req,res)=>{
        let id = req.params.id;
        User.findByIdAndDelete(id).then(data=>{
            res.status(200).send(data);
        }).catch(err=>{
            res.status(500).send('Couldnt Delete!')
        })
    },
    editUser: async(req,res)=>{
        let id = req.params.id;
        User.findByIdAndUpdate(id,{
            name:req.body.name,
            surname:req.body.surname,
            password:req.body.password
        }).then(data=>{
            res.status(200).send(data)
        }).catch(err=>{
            res.status(500).send('Couldnt Update!')
        })
    }
    
}