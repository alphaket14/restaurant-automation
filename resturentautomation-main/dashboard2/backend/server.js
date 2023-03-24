// import modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();
// app
const app =express();
const port = process.env.PORT || 5000;
// middleware
app.use(cors());
app.use(express.json());
// db
mongoose
    .connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("MongoDB database connection established successfully");
})
const restaurantRoute = require('./routes/restaurant');
const invoiceRoute = require('./routes/invoice');
const outletRoute = require('./routes/outlet');
const foodCategoryRoute = require('./routes/foodCategory');
const commonVarRoute = require('./routes/commonVar');
const inventoryCategoryRoute = require('./routes/inventoryCategory');
const inventoryUnitRoute = require('./routes/inventoryUnit');
const inventoryStockRoute = require('./routes/inventoryStock');
const toppingRoute = require('./routes/toppings');
const fooditemRoute = require('./routes/fooditem');
const addonRoute = require('./routes/addons');
const designationRoute = require('./routes/designation');
const section = require('./routes/section');
const table = require('./routes/tableslist');
const orderRoute = require('./routes/addOrderDetails');
const tax = require('./routes/addtax');
const charge = require('./routes/addcharge');
const customer = require('./routes/addCustomer');
app.use('/restaurant', restaurantRoute)
app.use('/invoice', invoiceRoute)
app.use('/outlet', outletRoute)
app.use('/food-category', foodCategoryRoute)
app.use('/common-var', commonVarRoute)
app.use('/inventory-category', inventoryCategoryRoute)
app.use('/inventory-unit', inventoryUnitRoute)
app.use('/inventory-stock', inventoryStockRoute)
app.use('/toppings', toppingRoute)
app.use('/fooditem', fooditemRoute)
app.use('/addons', addonRoute)
app.use('/designation', designationRoute)
app.use('/section', section)
app.use('/table', table)
app.use('/order', orderRoute)
app.use('/taxes', tax)
app.use('/charges', charge)
app.use('/customer', customer)
const server = app.listen(port, () =>
    console.log(`Server on ${port}`)
);