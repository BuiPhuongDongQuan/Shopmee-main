import express from "express";
export const adminRouter = express.Router();
// import {Product} from "../models/productSchema.js";

adminRouter.get("/", (req, res) => {
    res.render('admin_page')
})