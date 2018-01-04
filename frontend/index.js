'use strict';

const express = require('express');

const router = express.Router();
const ProductController = require('./controllers/ProductController');

class Store {
  constructor(config, backend, app) {
    this.config = config;
    this.core = backend;
    this.app = app;
    this.router = router;
    this.rootUrl = '/';
    this.productCtrl = new ProductController(backend);

    this.registerRoutes();
    this.app.use(this.rootUrl, this.router);
  }

  registerRoutes() {
    this.router.get('/', this.productCtrl.home);
  }
}

module.exports = Store;
