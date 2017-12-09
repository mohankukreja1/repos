const express=require('express')
const config=require('./config')
const path=require('path')
const app=express()
app.use('/',express.static(path.join(__dirname,'frontend')))
app.get('/hello',(req,res)=>{
    res.send('hello')
})
app.listen(config.port,()=>{
    console.log('http://localhost:' + config.port)

})