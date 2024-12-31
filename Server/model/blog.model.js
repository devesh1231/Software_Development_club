const mongoose = require('mongoose');

const blogSchema = mongoose.Schema(
    {
        title: {
            type: String,
            default: ""
        },
        content: {
            type: String,
            default: ""
        },
        createdBy: {
            type: mongoose.Schema.ObjectId,
            ref: "User"
        },
        tags: {
            type: [String],
            default: []
        },
        category: {
            type: mongoose.Schema.ObjectId,
            ref: "Category" 
        },
        subCategory: {
            type: mongoose.Schema.ObjectId,
            ref: "Category" 
        },
        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "active"
        },
        likes: {
            type: Number,
            default: 0
        },
        comment: [
            {
                userId: {
                    type: mongoose.Schema.ObjectId,
                    ref: "User" 
                },
                comment: {
                    type: String
                },
                date: {
                    type: Date,
                    default: Date.now 
                }
            }
        ],
        coverImage: {
            type: String,
            default: ""
        },
        isFeatured: {
            type: Boolean,
            default: false
        },
        views: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Blog', blogSchema);
