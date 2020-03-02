const fs =  require('fs')
/*Const book ={
    title:'Ego is the enemy',
    author:'Ryan Holiday'
}
//bookJson has string
const bookJson=JSON.stringify(book);
// console.log(bookJson);
// //here we convert that string again to object to retrieve data
// const parsedData = JSON.parse(bookJson);
// console.log(parsedData.title)
fs.writeFileSync('q-json.json', bookJson);
*/
const dataBuffer=fs.readFileSync('q-json.json');
const dataJSON= dataBuffer.toString();
const user= JSON.parse(dataJSON);

user.name="Ravneet";
user.age=25;

const userJSON = JSON.stringify(user)
fs.writeFileSync('q-json.json',userJSON)