const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers')

// initialize database connection
let db = require('../config/db');

// MIDLEWARE
router.use(express.urlencoded({extended: false}));
router.use(express.json());
router.use(express.raw());
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
    res.render('cart', { msg: "cart" , cartTotalItems: req.session.cart.length})
})
router.get('/getCartItems', (req, res) => {
    let cartItems = req.session.cart;
    res.json({ cartItems })
})
router.get('/checkout', (req, res) => {
    console.log('/checkout');
    res.render('checkout', { msg: "checkout"})
})
router.get('/cartItemsTotal', (req, res) => {
    console.log('/cartItemsTotal');
    res.json({ total: req.session.cart.length});
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

router.post('/checkout', (req, res) => {
    console.log('/checkout');
    let { name, email, address, phone, payment } = req.body;
    // store order details in database
    let amount = 0;
    req.session.cart.forEach(cartItem => {
        amount = amount + (cartItem.Unit_Price * cartItem.Quantity);
    })
    let queryString = "INSERT INTO orders(Name, Email, Address, Phone, Payment, Amount, Cart) values(?,?,?,?,?,?,?)";
    let queryValues = [ name, email, address, phone, payment, amount, JSON.stringify(req.session.cart) ]
    db.query(queryString, queryValues, (err, rows, fields) => {
        if(err){
            throw err;
        }else{
            console.log('saved to database');
        }
    })
    req.session.cart = [];
    res.render('checkout', { msg: "order successful!"})
})
module.exports = router;