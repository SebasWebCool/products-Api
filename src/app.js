const express = require('express');

const db = require('./tools/database')
const config = require('./config');
const productRouter = require('./products/products.routers')

const app = express

app.use(express.json())

db.authenticate()
    .then(() => console.log('DB Authentication Succesfully'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.status(200).json({ message: 'All ok!' });
});
    
app.use('/products', productRouter);

app.listen(config.port, () => {
    console.log(`Server started at por ${config.port}`)
})