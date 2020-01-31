var app = require('./config/server')
var PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log("servidor on")
});
