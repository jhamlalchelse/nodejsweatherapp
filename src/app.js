const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 8000;
const path = require('path');

const staticPath = path.join(__dirname,"../public")
const templatePath = path.join(__dirname,'../template/views')
const partialsPath = path.join(__dirname,"../template/partials")

app.set('view engine','hbs')
app.set('views',templatePath)
hbs.registerPartials(partialsPath)


//public ststic path
app.use(express.static(staticPath))

//routing
app.get('',(req,res)=>{
    res.render('index')
})
app.get('/weather',(req,res)=>{
    res.render('weather')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('*',(req,res)=>{
    res.render('404',{
        errorMsg:"Oops! Page Not Found"
    })
})
app.listen(port,()=>{
    console.log(`listing port no at ${port}`);
})