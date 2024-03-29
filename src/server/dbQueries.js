// I wrote the code myself, but // Ideas from (Node.Js, Express.Js, and PostgreSQL, 2020)

const { client } = require('./dbConnect');

// API call to get all items to be displayed on the store page

const getItems = (req, res) => {
  client.query('SELECT * FROM products', (err, results) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json(results.rows);
  });
};

// API call to get an item to be displayed on the item page

const getItemById = async (req, res) => {
  console.log(req.params.id);
  const id = parseInt(req.params.id, 10);
  await client.query(`
    SELECT 
      *
    FROM 
      products 
    WHERE 
      product_id = $1
    `, [id])
    .then((results) => {
      res.status(200).json(results.rows);
      console.log(results);
    })
    .catch((err) => {
      console.log(err);
    });
};

// API call to get the price of an item

const getItemPrice = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  await client.query(`
    SELECT
      product_price 
    FROM
      products
    WHERE
      product_id = $1
    `, [id])
    .then((results) => {
      res.status(200).json(results.rows);
      console.log(results);
    })
    .catch((err) => {
      console.log(err);
    });
};

// API call to get the stock count of an item.

const getItemStockCount = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  await client.query(`
  SELECT
    stock_count
  FROM
    products
  WHERE
    product_id = $1
  `, [id])
    .then((results) => {
      res.status(200).json(results.rows);
      console.log(results);
    })
    .catch((err) => {
      console.log(err);
    });
};

// API call to add a user to the database

const addUser = async (emailAddress) => {
  await client.query(`
   INSERT INTO
    customer
      (email_address)
    VALUES
      ('${emailAddress}');`, (err, res) => {
    if (err) {
      console.log(err);
      return (err);
    }
  });
};

// API call to add an order to the database

const addOrder = async (orderDate, orderCost, orderStatus, customerId) => {
  await client.query(`
  INSERT INTO
    orders
      (order_date, order_cost, order_status, customer_id)
    VALUES
      ('${orderDate}', '${orderCost}', '${orderStatus}', '${customerId}');`, (err, res) => {
    if (err) {
      throw (err);
    }
  });
};

// API call to add order details to the database

const addOrderDetails = async (quantity, orderId, productId) => {
  await client.query(`
  INSERT INTO
    order_details
      (quantity, order_id, product_id)
    VALUES
      ('${quantity}', '${orderId}', '${productId}');`, (err, res) => {
    if (err) {
      throw (err);
    }
  });
};

// Update the stock API call.

const updateStock = async (stockCount, productId) => {
  await client.query(`
  UPDATE
    products
  SET
    stock_count = '${stockCount}'
  WHERE
    product_id = '${productId}';`, (err, res) => {
    if (err) {
      throw (err);
    }
  });
};

module.exports = {
  getItems,
  getItemById,
  getItemPrice,
  getItemStockCount,
  addUser,
  addOrder,
  addOrderDetails,
  updateStock,
};
