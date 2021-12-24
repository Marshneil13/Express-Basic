const express = require("express")
const app = express();
// console.dir(app);
// app.use((req,res)=>{
//     console.log("WE GOT A NEW REQUEST");
//     // console.dir(req);
//     // res.send('HELLO, WE GOT YOUR REQUEST!THIS IS A NEW RESPONSE');
//     // res.send({colors: 'red'});
//     res.send('<h1>This is my webpage</h1>')
//     //the above statement sends a http response
// })
// /cats => 'meow'
// /dogs => 'woof'
// '/'
app.get('/',(req,res)=>{
    res.send('WELCOME TO THE HOME PAGE');
})//default
// app.get('*',(req,res)=>{
//     res.send(`I DON'T KNOW THIS ROUTE!`)
// })
app.get('/r/:subreddit',(req,res)=>{
    console.log(req.params);
const { subreddit } = req.params;
res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
})
app.get('/r/:subreddit/:postId',(req,res)=>{
    console.log(req.params);
const { subreddit, postId } = req.params;
res.send(`<h1>Viewing Post ${postId} on the ${subreddit} subreddit</h1>`);
})
app.get('/cats',(req,res)=>{
    // console.log("CAT REQUEST!");
    res.send('MEOW!');
})
app.get('/dogs',(req,res)=>{
    res.send('WOOF');
})
app.post('/cats',(req,res)=>{
    res.send("POST REQUEST TO CATS!!");
})
app.get('/search',(req,res)=>{
    const {q} = req.query;
    if(!q){
        res.send("NOTHING FOUND IF NOTHING SEARCHED")
    }
    res.send(`<h1>Search results for: ${q}</h1>`);
})
app.get('*',(req,res)=>{
    res.send(`I DON'T KNOW THIS ROUTE!`)
})//for any other request
app.listen(8080, ()=>{
    console.log("LISTENING ON PORT 8080!")
})