const fs= require('fs');

const getNotes=function(){
    return 'Notes...';
}
//add new notes
const addNote= function(title, body){
    const notes =  loadNotes();
    const duplicateNotes=notes.filter(function(notes){
        return notes.title=== title
    })
    if(duplicateNotes.length===0){
    notes.push({
        title:title,
        body:body
    })
    saveNotes(notes);
    console.log('new added');
} else{
    console.log('notes already taken')
}
}
    const saveNotes= function(notes){
        const dataJSON=JSON.stringify(notes);
        fs.writeFileSync('newNotes.json',dataJSON)
    }
    const loadNotes=function(){
        try{
            const dataBuffer = fs.readFileSync('newNotes.json');
            const dataJSON= dataBuffer.toString();
            return JSON.parse(dataJSON);
        }catch(e){
            return [];
        }
        
    }
module.exports={
    getNotes:getNotes,
    addNote:addNote
};