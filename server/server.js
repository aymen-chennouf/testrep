const express = require("express")



const {addcow ,getDailyMilkProduction,addMedicalExamination,getMidecalExaminations ,addBirth , deletecow ,getCowsbirths , allcows, addDallyMilkProduction} = require('./controllers/cow controller');


// create our express app
const app = express()

const Cors = require('cors');
app.use(Cors())

app.use(express.json())



// routes
app.get('/allcows', (req,res)=>{
    res.send(allcows())   
})
app.get('/milk', (req,res)=>{
    res.send(getDailyMilkProduction())   
})
app.post('/addmilk', (req,res)=>{
    
    addDallyMilkProduction(req.body)
    res.send("")   
})
app.get('/allbirths', (req,res)=>{
    res.send(getCowsbirths())   
})
app.get('/medicalexm', (req,res)=>{
console.log(getMidecalExaminations())
    res.send(getMidecalExaminations())   
})
app.post('/addcow', (req,res)=>{ 
    addcow(req.body)
    res.send("")
})
app.post('/addbirth', (req,res)=>{ 
    addBirth(req.body)
    res.send("")
})
app.post('/addmedicalexm', (req,res)=>{ 
    addMedicalExamination(req.body)
    res.send("")
})
app.delete('/deletecow', (req,res)=>{
    deletecow(req.body.cow_number)
    res.send("")
})
app.get('/lastindex',(req,res)=>{
    const length = allcows().length
    if (length==0){
        res.send("0")
    }else{
        res.send(allcows()[length-1].cow_number)
    }
    
    
})



//start server
app.listen(3001, ()=>{
    
    console.log("listeniing at port:3001")
}) 