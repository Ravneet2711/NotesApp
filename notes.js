const fs = require('fs');
const chalk = require('chalk');

const getNotes= function(){
    return 'Hello, Ravneet' ;
}
//adding note
const addNote= (title,body) =>{
    const notes= loadNotes()
    // const duplicateNotes= notes.filter(function(notes){
    //     return notes.title=== title
    // })
    // const duplicateNotes= notes.filter((notes)=>{
    //     return notes.title=== title
    // })
    const duplicateNotes= notes.filter((notes)=> notes.title=== title
    )
    // if (duplicateNotes.length===0){
    //     notes.push({
    //         title:title,
    //         body:body
    //     })
    debugger
    if (!duplicateNotes){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log('New note added!')
    }   else{
        console.log('Note title taken!')
    }
    
   
}
const saveNotes = (notes)=>{
    const dataJson=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}
const loadNotes=()=>{
    try{
    const dataBuffer =  fs.readFileSync('notes.json');
    const dataJson =  dataBuffer.toString()
    return JSON.parse(dataJson);
    } catch(e){
        return [];
    }
}
//remove note
const removeNote=(title)=>{
    // console.log(title);
    const notes=loadNotes();
    // const notesTokeep= notes.filter(function(notes){
    //     return notes.title!==title
    // })
    const notesTokeep= notes.filter((notes)=>{
        return notes.title!==title
    })
    if(notes.length>notesTokeep){
        const textGreen=chalk.green('Note Removed');
        console.log(textGreen);
        saveNotes(notesTokeep);
    }else{
        const textRed=chalk.red('No note found');
        console.log(textRed);
    }
}

//Listup
const listNote=()=>{
    const notes=loadNotes();
    console.log(chalk.inverse('Your Notes'));
    notes.forEach((notes) => 
        console.log(notes.title)
    );
}
//read
const readNote=(title)=>{
    const notes=loadNotes();
    const note=notes.find((notes)=> notes.title === title)

    if(notes){
        console.log(chalk.inverse(notes.title));
        console.log(notes.body);

    }else{
       console.log(chalk.red.inverse('Note not found')); 
    }
}

module.exports = {
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNote:listNote,
    readNote:readNote
};