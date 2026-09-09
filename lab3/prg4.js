import http from 'http'

const server = http.createServer((req,res)=>{
    const products ={
    id:1,
    Name: "Mobile",
    price: 250000,
    rating: 4.5,
    review: 123,

    };
if (req.url === '/api/products'){
    res.end(JSON.stringify(products));

} else{
    res.statusCode= 404;
    res.end();
}
});
server.listen(3000,()=>console.log('prg4 is running...'))