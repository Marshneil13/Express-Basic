const express = require("express")
const app = express();
// console.dir(app);
app.use((req,res)=>{
    console.log("WE GOT A NEW REQUEST");
    // console.dir(req);
    // res.send('HELLO, WE GOT YOUR REQUEST!THIS IS A NEW RESPONSE');
    // res.send({colors: 'red'});
    res.send('<h1>This is my webpage</h1>')
    //the above statement sends a http response
})

app.listen(8080, ()=>{
    console.log("LISTENING ON PORT 8080!")
})