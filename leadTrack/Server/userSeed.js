import User from "./models/User.js"
import bcrypt from 'bcrypt'
import connectToDb from "./db/db.js"


const userRegister =async ()=>{
    connectToDb()

    try {



        const hashPassword = await  bcrypt.hash('1234',10)
        const newUser = new User({

            name:"manager",
            email:"manager@gmail.com",
            password:hashPassword,
            role:"manager"


        })
        await newUser.save()
        
    } catch (error) {
        console.log(error)
        
    }

}


userRegister();
