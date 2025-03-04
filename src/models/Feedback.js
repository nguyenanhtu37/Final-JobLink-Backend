const mongoose = require('mongoose');

const FeedbackSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    feedbackName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isHandled: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Feedback', FeedbackSchema);