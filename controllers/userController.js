import User from  '../models/userModel.js'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const JWT_SECRET=process.env.JWT_SECRET||'your_jwt-secret-here';
const TOKEN_EXPIRES='24h';
const createToken=(userId)=>jwt.sign({id:userId},JWT_SECRET,{expiresIn:TOKEN_EXPIRES});
//register function
export async function registerUser(req,res)
{
    const{name,email,password}=req.body;
    if(!name ||!email || !password){
        return res.status(400).json({success:false,message:"All fields are required"});

    }
     if (typeof email !== 'string' || !validator.isEmail(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email"
    });
  }

  // 3. Validate password length
  if (typeof password !== 'string' || password.length < 8) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 8 characters"
    });
  }
    try{
        if(await User.findOne({email})){
            return res.status(409).json({success:false,message:"User already exists"});
        }
        const hashed=await bcrypt.hash(password,10);
        const user=await User.create({name,email,password:hashed});
        const token=createToken(user._id);
        res.status(201).json({success:true,token,user:{id:user._id,name:user.name,email:user.email}});

    }
    catch(err){
        console.log(err);
        res.status(500).json({success:false,message:"Server error"});

    }
}
//Login FUNCTION
export async function loginUser(req,res){
   const{email,password}=req.body;
   if(!email||!password){
    return res.status(400).json({success:false,message:"Email and password required"});

   }
   try{
    const user=await User.findOne({email});
    if(!user){
        return res.status(401).json({success:false,message:"Invalid credentials"})
    }
    const match=await bcrypt.compare(password,user.password);
    if(!match){
        return res.status(401).json({success:false,message:"Invalid credentials."})
    }
    const token=createToken(user._id);
    res.json({success:true,token,user:{id:user._id,name:user.name,email:user.email}});

   }
   catch(err){
    console.log(err);
    res.status.json({success:false,message:"Server error"});
   }
}
//Get current user
export async function getCurrentUser(req,res){
    try{
        const user=await User.findById(req.user.id).select("name email");
        if(!user){
             return res.status(400).json({success:false,message:"User not found"});
        }
        res.json({success:true,user}) 
    }
    catch(err){
        console.log(err);
        res.status(500).json({success:false,message:"Server error"});
    }
}
//Update user profile
export async function updateProfile(req,res)
{
    const{name,email}=req.body;
    if(!name||!email||!validator.isEmail(email))
    {
        return res.status(400).json({success:false,message:"Valid name and email required"});

    }
    try{
        const exists=await User.findOne({email,_id:{$ne:req.user.id}});
        if(exists){
            return res.status(409).json({success:false,message:"Email already exists"});
        }
        const user=await User.findByIdAndUpdate(
         req.user.id,
         {name,email},
         {new:true,runValidators:true,select:"name email"}
        );
        res.json({success:true,user})
    }
    catch(err)
    {
          console.log(err);
          res.status(500).json({success:false,message:"Server error"});
    }
}
//Change password function
export async function updatePassword(req,res){
    const{currentPassword,newPassword}=req.body;

if(!currentPassword||!newPassword||newPassword.length<8){
    return res.json(400).json({success:false,message:"Password invalid or too short"})
}
try{
    const user=await User.findById(req.user.id).select("password");
    if(!user){
        return res.status(404).json({success:false,message:"User not found"});
    }
    const match=await bcrypt.compare(currentPassword,user.Password);
    if(!match){
        return res.status(401).json({success:false,message:"Current password incorrect"});
    }
    user.password=await bcrypt.hash(newPassword,10);
    await user.save();
    res.json({success:true,message:"Password changed"});

} 
catch(err)
    {
          console.log(err);
          res.status(500).json({success:false,message:"Server error"});
    }
}  
