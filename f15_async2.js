console.clear();

const fs = require =("fs/promises");

async function readLocalFile() {
    try{
        console.log("begin");
        const data = await fs.readFile("sample.txt", "utf8");
        console.log("Success! File content below:");
        console.log(data);
    }
    catch(error){
        console.error("Error reading the file:",error.message);
    } 
    finally{
        console.log("End...");
    }
}
readLocalFile();
console.log("this was last sync code which is displayed here"); 