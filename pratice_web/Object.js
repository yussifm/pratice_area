// Object Litterals

// <---- Not the best method--->
// var userone = {
//     email: "coded@codedStudios.com",
//     pass: "fgyr747tygyf",
//     name: "coded",
//     login() {
//         console.log(this.email, this.pass);
//     },

//     logout() {
//         console.log(this.name, this.pass);
//     }
// };

// var usertwo = {
//     email: "coded23@codedStudios.com",
//     pass: "fgyr74237tygyf",
//     name: "codedSpartant",
//     login() {
//         console.log(this.email, this.pass);
//     },

//     logout() {
//         console.log(this.name, this.pass);
//     }
// };

// userone.login();
// userone.logout();
// usertwo.login();
// usertwo.logout();

// <----------- using Classes --------->
// class User {

//     // constructor
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;

//     }

//     // Method
//     display() {
//         console.log(this.email, this.name);
//     }

// }

// // <---------- Method chaining----------->
// // inheritance
// class Admin extends User {
//     deleteUser(users) {
//         users = Users.filter(function u() {
//             return u.email != User.email;
//         });
//     }

// }
// var userone = new User("userone", "fyger");

// var usertwo = new User("UserTwo", "gmail");

// var Users = [userone, usertwo, admin];

// var admin = new Admin("me", "pass");
// admin.deleteUser(usertwo);
// console.log(Users);

// /Generators/;

// function* gen() {
//     yield "Apple";
//     yield "Apple34";
//     yield "Apple44";
//     yield "Apple55";

//     console.log("All done");
//     return "all final done";
// }

// var genty = gen();
// console.log(genty.next());
// console.log(genty.next());
// console.log(genty.next());
// console.log(genty.next());
// console.log(genty.next());
// console.log(genty.next());



// // optional augu
// function addPonies(ponies) {
//     let poniesInRace = [];
//     for (var i = 0; i < arguments.length; i++) {
//         poniesInRace.push(arguments[i]);
//         console.log(poniesInRace[i]);
//     }

// }
// addPonies('Rainbow Dash', 'Pinkie Pie', 'honey dash');


// //better with rest operator 
// function addPonies(...ponies) {
//     let poniesInRace = [];
//     for (let pony of ponies) {
//         poniesInRace.push([pony]);

//     }


// }
// addPonies('Rainbow Dash', 'Pinkie Pie', 'honey dash');

// //Classes 

// class Pony {
//     constructor(...color) {
//         this.color = color;
//     }

//     toString() {
//         return `${this.color} pony`;
//         // see that? It is another cool feature of ES2015, called template literals
//         // we'll talk about these quickly!
//     }
// }
// const bluePony = new Pony('blue', 'red');
// console.log(bluePony.toString());

//promises, async, await;

let one = async() => await setTimeout(() => console.log("one"), 4000);
let two = () => console.log("two");
let three = () => console.log("three");


one();
two();
three();


https: //www.youtube.com/watch?v=X-vjBas_pTU&list=PLsjmv9aDmNDAN5adZxbGTlQHlgU2je7KE