

// const square = function(x){
//     return x*x;
// }
// console.log(square(2));

// const sauare=(x) => x*x;
// console.log(square(3));



//first method
// const event={
//     name:'Birthday Party',
//     printGuestList:function(){
//         console.log('Guest invited for '+ this.name);
//     }
// }
// event.printGuestList();

//second method used in es6 

// const event={
//     name:'Birthday Party',
//     printGuestList(){
//         console.log('Guest invited for '+ this.name);
//     }
// }
// event.printGuestList();

//third method

// const event={
//     name:'Birthday Party',
//     guestList:['a','b','c'],
//     printGuestList(){
//         console.log('Guest invited for '+ this.name);

//         this.guestList.forEach ((guest) => {
//             console.log(guest + ' is invited for ' + this.name);
//         })
//     }
// }
// event.printGuestList();

//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo(){
        return this.tasks.filter((tasks)=>   tasks.completed === false      
        )
     
    }
}

console.log(tasks.getTasksToDo())