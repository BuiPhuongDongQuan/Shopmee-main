import express from "express";
export const adminRouter = express.Router();
import {Product} from "../models/productSchema.js";

adminRouter.get('/admin', (req, res) => {
    console.log("Redirecting to my account page")
    res.render("admin_page")
})