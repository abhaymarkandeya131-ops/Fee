console.clear();
console.log("Sr. No. 1");
const fs =  require("fs/promises");
fs.readFile("sample.txt","utf8")
.then((response)=>{
    console.log("Sr.No. 2");
    console.log("response received");
    console.log(response);
})

.catch((error)=>{
    console.error("Error reading the file:", error.message);
});

console.log("Sr.No. 3");
 