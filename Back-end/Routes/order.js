const express = require('express');
const { newOrder, getSingleOrder, myOrders, orders, updateOrder, deleteProduct } = require('../controllers/orderController');
const router = express.Router();
const {isAuthenticatedUser, authorizeRoles} = require('../middleWare/authenticate')

router.route('/order/new').post(isAuthenticatedUser,newOrder);
router.route('/order/:id').get(isAuthenticatedUser,getSingleOrder);
router.route('/myorders').get(isAuthenticatedUser,myOrders);


// Admin Route
router.route('/admin/orders').get(isAuthenticatedUser,authorizeRoles('admin'),orders);
router.route('/admin/order/:id').put(isAuthenticatedUser,authorizeRoles('admin'),updateOrder);
router.route('/admin/order/:id').delete(isAuthenticatedUser,authorizeRoles('admin'),deleteProduct);


module.exports = router;