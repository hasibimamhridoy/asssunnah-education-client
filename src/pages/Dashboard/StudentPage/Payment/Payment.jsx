import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../../components/SectionTitile/SectionTitle";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_KEY);
const Payment = () => {

    const payClassItem = useLoaderData()
    console.log(payClassItem);

    const {_id,price} = payClassItem
    
    return (
        <div className="">
            <SectionTitle clrTitle='Checkout' subTitle='page'></SectionTitle>
            <h1>Test Card Number : 4242424242424242</h1>
            <h1>Test Card Number : 4000056655665556</h1>
            <h1>Test Card Number : 5555555555554444</h1>
            <div className="h-[70vh] lg:flex justify-center items-center lg:pl-24">
            <Elements stripe={stripePromise}>
                <CheckoutForm _id={_id} price={price} payClassItem={payClassItem}></CheckoutForm>
            </Elements>

            </div>
            
        </div>
    );
};

export default Payment;