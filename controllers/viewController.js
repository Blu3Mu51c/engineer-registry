const Engineer = require("../models/engineer");


const viewController = {
    // Home page
    home: (req, res) => {
        res.render("home", { title: "Engineer Directory" });
    },

    // Show all engineers
    index: async (req, res) => {
        try {
            const engineers = await Engineer.find();
            res.render("engineers/index", { engineers });
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    // New engineer form
    new: (req, res) => {
        res.render("engineers/new");
    },

    // Show one engineer
    show: async (req, res) => {
        try {
            const engineer = await Engineer.findById(req.params.id);
            if (!engineer) return res.status(404).send("Engineer not found");
            res.render("engineers/show", { engineer });
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    // Edit engineer form
    edit: async (req, res) => {
        try {
            const engineer = await Engineer.findById(req.params.id);
            if (!engineer) return res.status(404).send("Engineer not found");
            res.render("engineers/edit", { engineer });
        } catch (err) {
            res.status(500).send(err.message);
        }
    },
};

module.exports = viewController;
