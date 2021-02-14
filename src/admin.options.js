const AdminBro = require('admin-bro');
const AdminBroMongoose = require('@admin-bro/mongoose')

const UserAuth = require('./models/users/user.auth');
const ProjectsOptions = require('./models/projects/projects.options');
const Comment = require('./models/comments/comment.item');
const Order = require("./models/orders/order.item");
const Services = require("./models/services/services.options")

AdminBro.registerAdapter(AdminBroMongoose);

const options = {
    resources: [UserAuth, ProjectsOptions, Comment, Order, Services],
};


module.exports = options;

