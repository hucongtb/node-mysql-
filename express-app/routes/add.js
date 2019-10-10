const express = require('express')
const router = express()
router.get('/',function(req,res){
    
var result = req.query; //这个是前台穿过来的表单数据
console.log(result.age);
if(result.age>=18&&result.age<100){
    res.send({
        "_id": "5d0b5275a406185114c9a2a2",
        "name": "你成年了！",
        "age": result.age,
        "msg": "成年人可以进入！"
    },);
}else if(result.age>=100){
    res.send({
		"name": "你太老了！",
        "age":result.age,
        "msg": "你太老了！"
    },);
}
else{
    res.send({
        "name": "未成年不能进入！",
        "age": result.age,
        "msg": "未成年不能进入！"
    },);
}
});

module.exports = router