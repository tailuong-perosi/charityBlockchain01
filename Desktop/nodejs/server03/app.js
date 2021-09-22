var express = require("express");
var app = express();
var server = require("http").createServer(app);
server.listen(process.env.PORT || 3000);
app.set("view engine","ejs");
app.set("views","./views");


app.get("/",function(req,res){
    //hiển thị lên 1 dòng
    //res.send("<font color=red>HELLO WORLD</font>");

    // hiển thj lên 1 trang web
    res.render("trangchu");

});
app.get("/dki",function(req,res){
    res.render("sign_up")});

//routing: dân đường tới huy
app.get("/huy",function(req,res){
    res.send("ROUTING");
});
//lấy các số ở params trên thanh địa chỉ
app.get("/lay/:so1/:so2",function(req,res){
    var n = req.params.so1;
    n = parseInt(n);

    var m = req.params.so2; 
    m = parseInt(m);
    const tong = n+m;
    res.send("<h1>" + tong + "</h1>");
});