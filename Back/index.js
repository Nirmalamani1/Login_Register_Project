const express = require('express');
const cors = require('cors');
const FormDataModel = require('./Model/FormData');
const app = express();
const Port = 8000;
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
require('./Model/db.js');
require('./Model/todo.js')

const todoRoutes = require('./routes/todos');
app.use('/todos', todoRoutes);

app.post('/register', (req, res) => {
    const { email, password } = req.body;
    FormDataModel.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json("Already Registered")
            }
            else {

                FormDataModel.create(req.body)
                    .then(log_reg => res.json(log_reg))
                    .catch(err => res.json(err))
            }
        })
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    FormDataModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                }
                else {
                    res.json("Wrong PAssword");
                }
            }
            else {
                res.json("No Record Found");
            }
        })
})

app.listen(Port, () => {
    console.log(`Server listening on Port ${Port}`);
})

