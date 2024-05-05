const mongoose = require('mongoose');

main().then((res) => {
    console.log("connection Sucess");
}).catch((err) =>
    console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("user", userSchema);



User.deleteOne({name: "Abhishek"}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});



// User.find({age: {$gt: 47}}).then((res) => {
//     console.log(res[0].name);
// }).catch((err) => {
//     console.log(err);
// });

// User.insertMany([
//     {name: "Sumit Singh", email: "sumitsingh310106@gmail.com", age: 18},
//     {name: "Ansh", email: "ansh1307neeraj1978@gmail.com", age: 16},
//     {name: "Sneaking", email: "sumit1.2.2005singh@gmail.com", age: 18},
// ]).then(res => {
//     console.log(res);
// });


// const user1 = new User({
//     name: "Abhishek",
//     email: "john.c.calhoun@examplepetstore.com",
//     age: 20,
// });

// user1.save();

// const user2 = new User({
//     name: "Shilu",
//     email: "jonybhaiya@jpg.com",
//     age: 69,
// });

// user2.save().then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });