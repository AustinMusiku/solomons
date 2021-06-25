const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers')

// initialize database connection
let db = require('../config/db');

// MIDLEWARE
router.use(express.urlencoded({extended: true}));
router.use(express.json());
router.use((req, res, next) => {
    // assign new session userId for first time visitors
    if(!req.session.userId){
        req.session.userId = controllers.generateUuid();
    }
    next();
})

// GET REQUESTS
router.get('/', (req, res) => {
    console.log(`/home  - ${req.session.userId}`);
    res.render('home', { msg: "Homepage"})
})

router.get('/about', (req, res) => {
    console.log(`/about  - ${req.session.userId}`);
    res.render('about', { msg: "about"})
})

router.get('/contact', (req, res) => {
    console.log(`/contact  - ${req.session.userId}`);
    res.render('contact', { msg: "contact"})
})

router.get('/shop', async (req, res) => {
    console.log(`/shop  - ${req.session.userId}`);
    let products = [];
    // fetch products
    controllers.getProducts()
        .then(rows => {
            products = rows;
            res.render('shop', { products: products })
        })
})

router.get('/faqs', (req, res) => {
    console.log(`/faqs  - ${req.session.userId}`);
    res.render('faqs', { msg: "faqs"})
})

router.get('/cart', (req, res) => {
    console.log(`/cart  - ${req.session.userId}`);
    // assign cart items to cart
    //  let cart = req.session.cart;
    //  res.render('cart', { msg: "cart", cart: cart})
    res.render('cart', { msg: "cart" })
})
router.get('/getCartItems', (req, res) => {
    let cartItems = req.session.cart;
    res.json({ cartItems })
})
router.get('/checkout', (req, res) => {
    console.log('/checkout');
    res.render('checkout', { msg: "checkout"})
})


// POST REQUESTS
router.post('/addToCart', (req, res) => {
    console.log('/addToCart');
    // assign new cart if none exists
    !req.session.cart ? req.session.cart = []: req.session.cart;
    let itemId = req.body.itemId;
    //fetch cart entries
    controllers.getItemById(itemId)
        .then(row => {
            // Avoid duplicate cart entries
            let cartItemIds = req.session.cart.map(elem => elem.Id);
            if(cartItemIds.includes(row.Id)){
                // respond with plain msg
                res.json({msg: `${row.Title} is already in cart`});
            }else{
                // push new product to cart
                req.session.cart.push(row);
                res.json({msg: `${row.Title} added to cart`});
            }
        })
})

router.post('/removeFromCart', (req, res) => {
    console.log('/removeFromCart');
    let itemId = req.body.itemId;
    // fetch product
    controllers.getItemById(itemId)
        .then(row => {
            req.session.cart = req.session.cart.filter(product => {
                return product.Id != row.Id;
            })
            res.json({
                msg: `${row.Title} removed from cart`,
                rowTitle: row.Title
            });
        })
})

router.post('/incrementCartItem', (req, res) => {
    console.log('/incrementCartItem');
    // fetch product
    let incrementedCartItem = [];
    req.session.cart.forEach(item => {
        if(item.Id == req.body.itemId){
            item.Quantity++;
            incrementedCartItem.push(item);
        }
    });
    console.log(incrementedCartItem);
    res.json({ 
        msg: `incremented ${incrementedCartItem[0].Title}`,
        newQuantity: incrementedCartItem[0].Quantity
      });
})

router.post('/decrementCartItem', (req, res) => {
    console.log('/decrementCartItem');
    // fetch product
    let incrementedCartItem = [];
    req.session.cart.forEach(item => {
        if(item.Id == req.body.itemId){
            item.Quantity--;
            incrementedCartItem.push(item);
        }
    });
    console.log(incrementedCartItem);
    res.json({ 
        msg: `incremented ${incrementedCartItem[0].Title}`,
        newQuantity: incrementedCartItem[0].Quantity
      });
})

module.exports = router;