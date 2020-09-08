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
class User {


    // constructor
    constructor(name, email) {
        this.name = name;
        this.email = email;

    }

    // Method
    display() {
        console.log(this.email, this.name);
    }

}



// <---------- Method chaining----------->
// inheritance 
class Admin extends User {
    deleteUser(users) {
        users = Users.filter(function u() {
            return u.email != User.email;
        });
    }


}
var userone = new User("userone", "fyger");

var usertwo = new User("UserTwo", "gmail");

var Users = [userone, usertwo, admin];

var admin = new Admin("me", "pass");
admin.deleteUser(usertwo);
console.log(Users);