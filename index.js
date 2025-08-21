const express = require("express");
const path = require("path"); 
const app = express();
const port = 8080;
const mysql = require('mysql2');
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'userdata',
    password: '#Keshav24'
});


app.get("/", (req, res) => {
    res.render("index");  
});

app.get("/payment.ejs",(req,res)=>{
    res.render("payment")
})
app.post("/payment", (req, res) => {
    const { first_name, last_name, email, address, city, state, zip } = req.body;

    console.log("Received data:", req.body); // ✅ Debugging log

    const query = `
        INSERT INTO payment (first_name, last_name, email, address, city, state, zip) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    connection.query(query, [first_name, last_name, email, address, city, state, zip], (err, result) => {
        if (err) {
            console.error("❌ DB Insert Error:", err);
            return res.send("Error saving data");
        }
        console.log("✅ Data inserted:", result);
        res.send("✅ Payment details saved successfully!");
        
    });
});

app.get("/user",(req,res)=>{
    let q=`SELECT * FROM payment`;
    try {
        connection.query(q,(err,payment)=>{
            if(err) throw err;
            res.render("showusers.ejs",{payment});
        });
    }
    catch(err){
        console.log(err);
        res.send("Some ERROR in DATABASE");
    }
});


app.listen(port, () => {
    console.log("Port is Listening on " + port);
});
