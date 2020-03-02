setTimeout(()=>{
    console.log('Two sec are up')
},2000)

const names=['abcdf','bfijf','cee'];
const shortnames=names.filter((name)=>{
    return name.length<=4
})

// const geocode=(address,callback)=>{
//     const data={
//         latt:0,
//         longi:0
//     }
//     return data
// }


// const data = geocode('delhi')
// console.log(data)


// const geocode=(address, callback) =>{
//     setTimeout(()=>{
//         const data = {
//             lattitude:0,
//             longitude:0
//         }
//         // return data;
//         callback(data)
//     }, 2000)
// }

// geocode('Philadelphia',(data) =>{
//     console.log(data)
// })
// const data = geocode('delhi')
// console.log(data)



// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add=(a,b, callback) =>{
    setTimeout(()=>{
        callback(a+b);
    },2000)
    
}



add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
