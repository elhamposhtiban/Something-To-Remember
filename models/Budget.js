const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BudgetSchema = new Schema({

    budget: {
        type: Number,
        required: true,
    },


});

const Budget = mongoose.model('Budget', UserSchema);

module.exports = Budget;
