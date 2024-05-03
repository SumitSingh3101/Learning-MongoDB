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

const user1 = new User({
    name: "Abhishek",
    email: "john.c.calhoun@examplepetstore.com",
    age: 20,
});

user1.save();