const express = require('express');
const cors = require('cors');
const path = require('path');
const enforce = require('express-sslify');

if(process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

app.listen(port, error => {
    if(error) throw error;
    console.log('Server is running on port' + port)
})

app.post('/payment', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd',
    }
    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if(stripeErr) {
            res.status(500).send({ error: stripeErr })
        } else{
            res.status(200).send({ success: stripeRes })
        }
    })
})

// app.post('/payment', (req,res) => {
//     const {priceForStripe, token} = req.body
//     const idempotencykey = uuidv4()
 
//     return stripe.customers.create({
//         email: token.email,
//         source: token.id
//     })
//     .then(customer => {
//         stripe.charges.create({
//             amount: priceForStripe,
//             currency: "usd",
//             customer: customer.id,
//             receipt_email: token.email,
//         },{idempotencykey})
//     })
//     .then(result => res.status(200).json(result))
//     .catch(error => console.log(error))
// })