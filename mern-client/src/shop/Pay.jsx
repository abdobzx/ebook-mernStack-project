import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function Message({ content }) {
  return <p>{content}</p>;
}

const Payo = () => {
  const initialOptions = {
    'client-id': 'ATj9MxnQ4Pv_TpSHCBLtwFdLZOGsBUiuWAsOPY44eKZHFXmsXgaBhRB2hkA4WvAe5sRC9pZC78r1qqY5',
    'enable-funding': 'paylater,venmo,card',
    'data-sdk-integration-source': 'integrationbuilder_sc',
  };

  const [message, setMessage] = useState('');

  const createOrder = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cart: [
            {
              id: 'YOUR_PRODUCT_ID',
              quantity: 'YOUR_PRODUCT_QUANTITY',
            },
          ],
        }),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const orderData = await response.json();

      if (orderData.id) {
        return orderData.id;
      } else {
        throw new Error('Order ID not found in the response');
      }
    } catch (error) {
      console.error(error);
      setMessage(`Could not initiate PayPal Checkout...${error}`);
    }
  };

  return (
    <div className="App">
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            shape: 'rect',
            layout: 'vertical',
          }}
          createOrder={createOrder}
          onApprove={(data, actions) => {
            // Handle approval logic here
          }}
        />
      </PayPalScriptProvider>
      <Message content={message} />
    </div>
  );
};

export default Payo;
