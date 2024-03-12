
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, MONGODB_URI } = process.env;
const base = 'https://api-m.sandbox.paypal.com';

const client = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function generateAccessToken() {
  try {
    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      throw new Error('MISSING_API_CREDENTIALS');
    }
    const auth = Buffer.from(
      PAYPAL_CLIENT_ID + ':' + PAYPAL_CLIENT_SECRET,
    ).toString('base64');
    const response = await fetch(`${base}/v1/oauth2/token`, {
      method: 'POST',
      body: 'grant_type=client_credentials',
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Failed to generate Access Token:', error);
  }
}

async function handleResponse(response) {
  try {
    const jsonResponse = await response.json();
    return {
      jsonResponse,
      httpStatusCode: response.status,
    };
  } catch (err) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
}
const createOrder = async (cart) => {
  try {
    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders`;
    
    const payload = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "100.00", // Adjust this based on the actual total from the cart
          },
        },
      ],
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    });

    return handleResponse(response);
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;  // Ensure that the error is propagated to the calling code
  }
};

app.post("/api/orders", async (req, res) => {
  try {
    const { cart } = req.body;
    const { jsonResponse, httpStatusCode } = await createOrder(cart);

    if (httpStatusCode === 201) {
      res.status(httpStatusCode).json(jsonResponse);
    } else {
      console.error("Failed to create order. PayPal API error:", jsonResponse);
      res.status(httpStatusCode).json({ error: `Failed to create order. PayPal API error: ${jsonResponse.error.message}` });
    }
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to create order." });
  }
});


app.post('/api/orders/:orderID/capture', async (req, res) => {
  try {
    const { orderID } = req.params;
    const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error('Failed to create order:', error);
    res.status(500).json({ error: 'Failed to capture order.' });
  }
});



async function captureOrder(orderID) {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders/${orderID}/capture`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return handleResponse(response);
}

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const bookCollections =client.db("BookInventory").collection("books");

    //insert ebook
    app.post("/upload-book",async(req,res)=>{
      const data =req.body
      const result = await bookCollections.insertOne(data)
      res.send(result);
    })
    // get en ebook
    // app.get("/all-books",async(req,res)=>{
    //   const books = bookCollections.find();
    //   const result = await books.toArray();
    //   res.send(result);

    // })
    //patch 
    app.patch("/book/:id",async(req,res)=>{
      const id = req.params.id;
    
      const updateBookData = req.body;
      const filter = {_id: new ObjectId (id)};
     
      const updateDoc = {
        $set: {
          ...updateBookData
        },
      }
          const options = {upsert: true};
          const result = await bookCollections.updateOne(filter,updateDoc,options);
          res.send(result)

    })
    //delete 
    app.delete("/book/:id",async(req,res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await bookCollections.deleteOne(filter);
      res.send(result);
    })
    //singel one (book)
    app.get("/book/:id" , async( req ,res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id)};
      const result = await bookCollections.findOne(filter);
      res.send(result);
        })

    //find 
    app.get("/all-books",async(req,res)=>{
      let query = {}; 
      if(req.query?.category){
        query = {category: req.query.category}

      }
      const result = await bookCollections.find(query).toArray();
      res.send(result);

    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Node server listening at http://localhost:${port}/`);
});

