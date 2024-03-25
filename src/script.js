// let user=["Yalya", "Kantor"];
// let [name, sename] =user;
// console.log(name,' ',sename );

// let [...user] = "Yalya Kantor Victorovna 1965".split(' ');
// // console.log(name,' ',sename );
// console.log(user);

// let user={
//     name: 'Yalya',
//     sename: 'Kantor'     
// }
// let {sename:s,name:n} = user;
// console.log(n,s);//Yalya Kantor

// let users = [
//     {
//         name: 'Yalya',
//         sename: 'Kantor' ,
//         age: 25    
//     },
//     {
//         name: 'Petya',
//         sename: 'Frenk' ,
//         age: 29    
//     }
// ]
// users.map(user=> user.age +=4);
// let student = [...users];
// console.log(student);


// let arr=[1,5,8,3,12,6];
// let brr= [...arr, 0];
let pages=[
    {page: 20, autor:'Petter'},
    {page: 40, autor:'Petter2'},
    {page: 10, autor:'Petter3'}
]
// console.log(brr);
// //по возрастанию
// arr.sort((a,b)=>a-b)
// console.log(arr);
// pages.sort((a,b)=>b.page-a.page)

let str = ['aaa','abc', 'cdw','aa'];

pages.sort((a,b)=> a.autor.localeCompare(b.autor));
console.log(pages);



