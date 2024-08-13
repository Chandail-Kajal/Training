const fs = require('fs')


fetch("https://jsonplaceholder.typicode.com/todos")
.then((res) => {
  return res.json()
})
.then((data)=>{

})
.catch((err) => {
    
});