const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const AdminBro = require('admin-bro');
const options = require('./admin.options');
const buildAdminRouter = require('./admin.router');
const Projects = require('./models/projects/projects.item');
const bodyParser = require("body-parser");
const Comment = require('./models/comments/comment.item');
const Order = require('./models/orders/order.item');
const Services  = require("./models/services/services.item");


const app = express();
const port = 8000;

const run = async () => {
    await mongoose.connect('mongodb://localhost:27017/agency', {
        useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
    });
    const admin = new AdminBro(options);
    const router = buildAdminRouter(admin);

    app.use('/uploads', express.static('uploads'));
    app.use(admin.options.rootPath, router);
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.get('/api/services', (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")
        Services.find({}, (err, services) => {
            res.send(services);
        });
    });

    app.get('/api/projects', (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")
        Projects.find({}, (err, projects) => {
            res.send(projects);
        });
    });

    app.post('/api/order', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.setHeader("Access-Control-Allow-Origin", "*");
        const newOrder = new Order({
            ...req.body,
        })
        newOrder.save();
        res.send('okey')
    })

    app.get('/api/comments', (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")
        Comment.find({}, (err, comments) => {
            res.send(comments);
        });
    });

    app.post('/api/new-comment', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.setHeader("Access-Control-Allow-Origin", "*")
        const values = req.body;
        console.log(values);
        const newComment = new Comment({
            ...values,
        })
        newComment.save();
        res.send('okey')
    })

    app.listen(port, () => console.log(`сервер запущен на http://localhost:${port}`,));
};

module.exports = run;
