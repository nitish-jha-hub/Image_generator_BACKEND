require('dotenv').config()
const mongoose = require('mongoose');
const app = require('./app.js');

// const url = 'mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.dpithd6.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0';
const url = "mongodb+srv://nitishkumar0914:Kt20hhjoUHJAa3kg@cluster0.moge4ap.mongodb.net/mern_kiet_image";

// let dbLink = url.replace("$_USERNAME_$", process.env.DB_USER);
// dbLink = dbLink.replace("$_PASSWORD_$", process.env.DB_PASSWORD);
// dbLink = dbLink.replace("$_DB_NAME_$", process.env.DB_NAME);

mongoose.connect(url).then(() => {
  console.log('-------- Database Connected --------');
});

app.listen(1111,() => {
    console.log('----------- App Started -----------')
});