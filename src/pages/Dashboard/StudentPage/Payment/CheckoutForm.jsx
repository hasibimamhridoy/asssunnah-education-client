import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import "./CheckoutForm.css";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import {
  countEnrolledClass,
  getCountEnrolled,
} from "../../../../api/manageClass";
import { Navigate } from "react-router-dom";

const CheckoutForm = ({ _id, price, payClassItem }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  console.log(price);

  const { courseId, available_seats ,class_name } = payClassItem;

  console.log(class_name);

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosSecure, price]);

  console.log(clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log('payment method', paymentMethod)
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    console.log("payment intent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // save payment information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        class_name,
        date: new Date(),
      };
      axiosSecure.post(`/payments/success/${_id}`, payment).then((res) => {
        console.log(res.data);
        if (res.data) {
          // display confirm
          console.log("Payment Successfull");

          axiosSecure
            .post("/student/enrolled/classess", payClassItem)
            .then((res) => {
              console.log(res);

              getCountEnrolled(courseId).then((res) => {
                console.log(res);

                const totalEnrolledCount = res.result;
                const available_seats_remaining = available_seats - 1;
                countEnrolledClass(courseId, {
                  available_seats_remaining,
                  totalEnrolledCount,
                }).then((res) => {
                  console.log(res);
                  console.log("available sit", available_seats);
                  console.log(
                    "available remaining sit",
                    available_seats_remaining
                  );
                  console.log("totalEnrolledCount", totalEnrolledCount);
                });
              });
            });
        }
      });
    }
  };

  return (
    <>
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="flex select-none items-center gap-3 rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>

        <div className="mt-6">
          {/* {cardError && <p className="text-red-600">{cardError}</p>} */}

          {cardError && (
            <div
              className="p-4 mb-4 w-2/3 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <span className="font-medium">Error! </span>{cardError}
            </div>
          )}
          {transactionId && (
            <div className="p-4 mb-4 w-2/4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
            <span className="font-medium">Payment Success</span> 
            Your Transection id is:  {transactionId}
            <Navigate to='/dashboard/enrolledClass'></Navigate>
          </div>
          )}
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
