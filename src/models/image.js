const mongoose=require('mongoose');

const imagen= mongoose.model('imagen',{
title:{type:String},
description:{type:String},
filname:{type:String},
path:{type:String},
originalname:{type:String},
size:{type:Number,},
create_at:{type:Date, default:Date.now()},
});


module.exports=imagen;