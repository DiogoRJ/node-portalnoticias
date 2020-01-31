var app = require('./config/server')
var PORT = process.env.PORT || 5000;

app.listen(PORT, function(){
    console.log("servidor on")
});
