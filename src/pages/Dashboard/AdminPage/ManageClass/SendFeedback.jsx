import React from "react";
import Button from "../../../../components/Button/Button";
import { sendFeedback } from "../../../../api/manageClass";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import SectionTitle from "../../../../components/SectionTitile/SectionTitle";

const SendFeedback = () => {

  const navigate = useNavigate()

    const {id} = useParams()
    console.log(id);

  const handleFeedback = (e) => {
    e.preventDefault();
    const feedback = e.target.feedback.value
    console.log(feedback);
    sendFeedback(id,feedback)
    .then(res=>{
        console.log(res);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Feedback has been saved',
          showConfirmButton: false,
          timer: 1500
        })

        navigate('/dashboard/manageClass')

    })
  };

  return (
    <div className="">
      <SectionTitle clrTitle='Send' subTitle='feedback'></SectionTitle>

      <h1>You are denied the classess. You can send e feedback for instructors</h1>
      <form onSubmit={handleFeedback}>
        <label
          htmlFor="message"
          className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white"
        >
          Write Your Feedback Here
        </label>
        <textarea
          id="message"
          name='feedback'
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>

        <div className="mt-5">
          <Button type="submit" title="Send Feedback"></Button>
        </div>
      </form>
    </div>
  );
};

export default SendFeedback;
