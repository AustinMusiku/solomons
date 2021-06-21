const express = require('express');

const router = express.Router();

//get requests
router.get('/', (req, res) => {
    console.log('/home');
    res.render('home', { msg: "Homepage"})
})

router.get('/about', (req, res) => {
    console.log('/about');
    res.render('about', { msg: "about"})
})

router.get('/contact', (req, res) => {
    console.log('/contact');
    res.render('contact', { msg: "contact"})
})

router.get('/shop', (req, res) => {
    console.log('/shop');
    res.render('shop', { msg: "shop"})
})

router.get('/faqs', (req, res) => {
    console.log('/faqs');
    res.render('faqs', { msg: "faqs"})
})

router.get('/cart', (req, res) => {
    console.log('/cart');
    res.render('cart', { msg: "cart"})
})

router.get('/checkout', (req, res) => {
    console.log('/checkout');
    res.render('checkout', { msg: "checkout"})
})

module.exports = router;