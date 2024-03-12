const express=require("express");
const PORT= 3000;
const path= require("path");
const morgan = require("morgan");
const multer= require("multer");
const app = express();
const uuid= require("uuid");


app.use(express.static(path.join(__dirname,'public')))
app.set('port',process.env.PORT||3000)
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}));

const storage=multer.diskStorage({
    destination:path.join(__dirname,'public/img/uploads'),
    filename:(req,file,cd,filename)=>{
        cd(null,uuid.v4()+path.extname(file.originalname))
    }
})
app.use(multer({storage:storage}).single('image'));
app.use(require('./routes/index'));


app.get("/upload",(req,res)=>{
    res.render("upload")
});


app.listen(PORT,()=>{console.log(`funcionando en el puerto ${PORT}`);})