const express = require('express'); 
const router = express.Router();
const bodyParser = require('body-parser');
const query = require('../utils/queries');


const urlencodedParser = bodyParser.urlencoded({ extended: false });



router.post('/currentUser', urlencodedParser, (req, res) => {
    
    //const ID = 1;
    // user_data.users[0].newID += 1;
    // let ID = user_data.users[0].newID

    // owner/coworker radio buttons verification and values
    // if (req.body.owner == undefined && req.body.coworker == undefined) {
    //     res.end("please select a usertype!");
    // } else {
    //     if (req.body.owner = 'on') owner = true;
    //     else owner = false;
    // }
    
    const currentUser = {
        username: req.body.username,
        password: req.body.password
    };
    console.log(currentUser);
    // user_data.users.push(currentUser);
    // user_data.currentUser[0] = currentUser;
    // let data = JSON.stringify(user_data, null, 2);
    // fs.writeFile(file_location, data, ()=> console.log('succesfully wrote to user_data.json'));
    // data = JSON.stringify(currentUser);
    // fs.writeFile('./currentUser.json', data, ()=> console.log('succesfully wrote to currentUser.json'))
    var mysql = "INSERT INTO  Users (Username, Pass) VALUES('" + currentUser.username +"','" + currentUser.password +"')";
    query(mysql);
    
    res.redirect('http://localhost:3002/setup');    
});

module.exports = router;