var user = {
    email: "coded@codedStudios.com",
    pass: "fgyr747tygyf",
    login() {
        console.log(this.email, this.pass);
    }
};

user.login();