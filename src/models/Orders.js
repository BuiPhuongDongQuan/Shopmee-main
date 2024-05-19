// RMIT University Vietnam 
// Course: COSC2430 Web Programming
// Semester: 2024A 
// Assessment: Full-Stack Web Application 
// Author: Lam Quang Nhat, Bui Phuong Dong Quan, Nguyen Minh Khoi, Tran Gia Hung, Tran Nguyen Khang 
// ID: s3980424, s3975939, s3978862, s3979486, s3935748 
// Acknowledgement: W3School, TailwindCss, ChatGPT, Passport documentation, RemixIcons, Freepik, Web Dev Simplified

import mongoose from "mongoose"

const distributionHubs = ["District 1 Hub", "District 2 Hub", "District 7 Hub"]

const orderSchema = new mongoose.Schema({
    distributionHub: {
        type: String,
        required: true,
        enum: distributionHubs,
        default: () => {
            // Randomizing the distribution hub for orders
            const randomIndex = Math.floor(Math.random() * distributionHubs.length)
            return distributionHubs[randomIndex]
        }
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Product",
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    user: {
        type: String,
        required: true,
    },
    userFullName: {
        type: String,
        required: true,
    },
    userAddress: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ["Active", "Delivered", "Canceled"]
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const Order = mongoose.model('Order', orderSchema)

export { Order }