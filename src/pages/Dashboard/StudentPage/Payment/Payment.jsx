import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_KEY);
const Payment = () => {

    const payClassItem = useLoaderData()
    console.log(payClassItem);

    const {_id,price} = payClassItem
    
    return (
        <div>
            <h2 className="text-3xl"> Checkout Page</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm _id={_id} price={price} payClassItem={payClassItem}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;