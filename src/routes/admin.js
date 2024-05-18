import express from "express";
import { Vendor } from "../models/User.js"
import { Product } from  "../models/productSchema.js"
export const adminRouter = express.Router();

adminRouter.get("/", async (req, res) => {
    try {
        const vendors = await Vendor.find({});
        const products = await Product.find({});

        // Add the count of products for each vendor
        vendors.forEach(vendor => {
            if (vendor.productsList) {
                vendor.productCount = vendor.productsList.length;
            } else {
                vendor.productCount = 0;
            }
        });

        res.render('admin_page', {
            vendorsList: vendors,
            productsList: products
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving vendors and products');
    }
})

