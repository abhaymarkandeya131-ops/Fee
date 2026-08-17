console.clear();
async function getUsers(){
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users/3");

    if(!response.ok){
        throw new Error(`HTTP Error: ${response.status}`);
    }

    const users = await response.json();
    console.log("users received:");
    console.log(users);
    }
    catch(error){
        console.log("Something went wrong:");
        console.log(users);
    }
    finally{
        console.log("Fetch operatons commpleted.");
    }
}
getUsers();