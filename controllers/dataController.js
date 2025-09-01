const Engineer = require("../models/engineer");

// Handle all data (CRUD) logic
const dataController = {
    // Index: list all engineers
    index: async (req, res) => {
        try {
            const engineers = await Engineer.find();
            res.json(engineers);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    create: async (req, res) => {
        try {
            // Convert checkbox if needed
            const data = {
                ...req.body,
                available: req.body.available === "on" || req.body.available === true,
            };

            const engineer = await Engineer.create(data);

            // If browser form (HTML), redirect to show page
            if (req.headers.accept && req.headers.accept.includes("text/html")) {
                res.redirect(`/engineers/${engineer._id}`);
            } else {
                // If JSON/API request, return JSON (for Artillery)
                res.status(201).json(engineer);
            }
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    // Show: get one engineer
    show: async (req, res) => {
        try {
            const engineer = await Engineer.findById(req.params.id);
            if (!engineer) return res.status(404).json({ error: "Not found" });
            res.json(engineer);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Update: edit an engineer
    update: async (req, res) => {
        try {
            const data = {
                ...req.body,
                available: req.body.available === "on" || req.body.available === true,
            };
            const engineer = await Engineer.findByIdAndUpdate(req.params.id, data, {
                new: true,
                runValidators: true,
            });
            res.redirect(`/engineers/${engineer._id}`);
        } catch (err) {
            res.status(400).send(err.message);
        }
    },

    // Delete: remove an engineer
    destroy: async (req, res) => {
        try {
            await Engineer.findByIdAndDelete(req.params.id);
            res.redirect("/engineers");
        } catch (err) {
            res.status(500).send(err.message);
        }
    },
};

module.exports = dataController;
