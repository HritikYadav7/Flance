import React, { useEffect, useState } from "react";
import "./Pay.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useParams } from "react-router-dom";
import CheckoutForm from "./../../components/checkourForm/checkoutForm";

const stripePromise = loadStripe(
  "pk_test_51NwMQLSDEK1TKqYKPFkJDbALEVQxecP30Vy0uaf8IZzrFXtNZH8XpExVcTRc9PN5n1t57ItS2Ltgc30iHozjDS0k00PZutmddf"
);

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        console.log("This is checkout form")
        const res = await axios.post(`http://localhost:8800/api/orders/create-payment-intent/${id}`,id,{withCredentials:true});
        // axios.post(`http://localhost:8800/api/messages`, message,{ withCredentials: true });
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return <div className="pay">
    {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
  </div>;
};

export default Pay;
