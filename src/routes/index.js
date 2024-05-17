// RMIT University Vietnam 
// Course: COSC2430 Web Programming
// Semester: 2024A 
// Assessment: Full-Stack Web Application 
// Author: Lam Quang Nhat, Bui Phuong Dong Quan, Nguyen Minh Khoi, Tran Gia Hung, Tran Nguyen Khang 
// ID: s3980424, s3975939, s3978862, s3979486, s3935748 
// Acknowledgement: W3School, TailwindCss, ChatGPT, Passport documentation, RemixIcons, Freepik, Web Dev Simplified

import express from "express";
import { Product } from "../models/productSchema.js";
export const indexRouter = express.Router();

indexRouter.get("/", async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: 'desc'}).limit(4)
        res.render("index", {products});
    } catch(e) {
        console.error(e)
    }
})

indexRouter.get("/about-us", (req, res) => {
    res.render("about_us")
})

indexRouter.get("/contact-us", (req, res) => {
    res.render("contact_us")
})

indexRouter.get("/privacy-policy", (req, res) => {
    res.render("privacy_policy")
})

indexRouter.get("/term-of-service", (req, res) => {
    res.render("term_of_service")
})

indexRouter.get("/faqs", (req, res) => {
    res.render("faqs")
})
