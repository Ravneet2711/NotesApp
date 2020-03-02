
/*
// we first have to require fs from node modules then only we can use it further.
//write in the other file and append the text to existing file.

const fs = require('fs');
// fs.writeFileSync('notes.txt','this file was created by nodejs');
fs.appendFileSync('notes.txt',' Hey I append a text in existing file');
*/

// const add = require('./utils.js');
//  const sum = add(4,-2);
// console.log(sum);



// const validator= require('validator');
const chalk = require('chalk');
const yargs= require('yargs')
const notes = require('./notes.js');
//  const msg= notes();
// console.log(msg);
// const textGreen=chalk.green.bgYellow.bold.inverse('Success!')
// console.log(textGreen);
// console.log(validator.isEmail('andrew@example.com'));

// console.log(process.argv);
//customize yargs version
yargs.version('1.1.0');


//create add command
yargs.command({
    command:'add',
    describe:'add new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type: 'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler( argv){
        // console.log('Title:' , argv.title);
        // console.log('Body:', argv.body);
        notes.addNote(argv.title, argv.body);
    }
})
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:' note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        // console.log('remove a new note')
        notes.removeNote(argv.title);
    }
})
yargs.command({
    command:'list',
    describe:'lists of notes',
   
    handler(){
        // console.log('lists of notes in app')
        notes.listNote();
    }
})
yargs.command({
    command:'read',
    describe:'read note',
    builder:{
        title:{
            describe:' note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        // console.log('read new note')
        notes.readNote(argv.title);
    }
})

//add remove read list
yargs.parse();
// console.log(yargs.argv);