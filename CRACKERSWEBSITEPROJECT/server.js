const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const app = express();


app.use(cors());
app.use(express.json());

// database 
mongoose.connect('mongodb://localhost:27017/crackers', {
   
})
.then(() => {
    console.log("Successfully connected to the database");
})
.catch(err => {
    console.log('Could not connect to the database.', err);
    process.exit();
});

//  Customer schema 
const customerSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    customerMobileNumber: { type: String, required: true },
    customerEmail: { type: String, required: true, unique: true },
    customerPassword: { type: String, required: true }
}, {
    timestamps: true
});

const Customer = mongoose.model('Customer', customerSchema);

// Item schema 
const itemSchema = new mongoose.Schema({
    itemImage: { type: String, required: true },
    itemName: { type: String, required: true },
    itemPrize: { type: Number, required: true }
}, {
    timestamps: true
});

const Item = mongoose.model('Item', itemSchema);

//  Purchase schema 
const purchaseSchema = new mongoose.Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
    customerName: { type: String },
    itemName: { type: String },
    itemPrize: { type: Number },
    totalPrice: { type: Number, required: true },
    purchaseDate: { type: Date, default: Date.now }
}, {
    timestamps: true
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

app.post('/items', async (req, res) => {
    const { itemImage, itemName, itemPrize } = req.body;

    if (!itemImage || !itemName || !itemPrize) {
        return res.status(400).send({ message: "All fields are required" });
    }

    try {
        const newItem = new Item({ itemImage, itemName, itemPrize });
        const savedItem = await newItem.save();
        res.status(201).send(savedItem);
    } catch (err) {
        console.error("Error saving item:", err);
        res.status(500).send({ message: "Error saving item" });
    }
});

app.post('/api/purchases', async (req, res) => {
    const { customerId, itemId, totalPrice } = req.body;

    if (!customerId || !itemId || !totalPrice) {
        return res.status(400).send({ message: "All fields are required" });
    }

    try {
        const customer = await Customer.findById(customerId);
        const item = await Item.findById(itemId);

        if (!customer) {
            return res.status(404).send({ message: "Customer not found" });
        }
        if (!item) {
            return res.status(404).send({ message: "Item not found" });
        }

        const purchase = new Purchase({
            customerId,
            itemId,
            customerName: customer.customerName,
            itemName: item.itemName,
            itemPrize: item.itemPrize,
            totalPrice
        });

        const savedPurchase = await purchase.save();
        res.status(201).send(savedPurchase);
    } catch (err) {
        console.error("Error saving purchase:", err);
        res.status(500).send({ message: "Error saving purchase" });
    }
});

app.post('/api/customers', async (req, res) => {
    const { customerName, customerEmail, customerMobileNumber, customerPassword } = req.body;

    if (!customerName || !customerEmail || !customerMobileNumber || !customerPassword) {
        return res.status(400).send({ message: "Please fill all the required fields" });
    }

    try {
        const existingCustomer = await Customer.findOne({ customerEmail });
        if (existingCustomer) {
            return res.status(400).send({ message: "Email already registered" });
        }

        const hashedPassword = await bcrypt.hash(customerPassword, 10);

        const newCustomer = new Customer({
            customerName,
            customerEmail,
            customerMobileNumber,
            customerPassword
        });

        const savedCustomer = await newCustomer.save();
        res.status(201).send(savedCustomer);
    } catch (err) {
        console.error("Error registering customer:", err);
        res.status(500).send({ message: "Error registering customer" });
    }
});

// Route for customer login
app.post('/api/login', async (req, res) => {
    const { customerEmail, customerPassword } = req.body;

    if (!customerEmail || !customerPassword) {
        return res.status(400).send({ message: "Email and password are required" });
    }

    try {
        const customer = await Customer.findOne({ customerEmail });
        if (!customer) {
            return res.status(404).send({ message: "Customer not found" });
        }

        const isMatch = await bcrypt.compare(customerPassword, customer.customerPassword);
        if (!isMatch) {
            return res.status(400).send({ message: "Invalid password" });
        }

        const { customerPassword, ...customerData } = customer.toObject();
        res.status(200).send(customerData);
    } catch (err) {
        console.error("Error logging in customer:", err);
        res.status(500).send({ message: "Error logging in customer" });
    }
});


app.listen(7000, () => {
  console.log('Server is running on port 7000');
});