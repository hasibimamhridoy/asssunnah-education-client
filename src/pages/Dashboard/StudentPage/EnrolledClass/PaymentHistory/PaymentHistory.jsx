import React from "react";
import PaymentHisRow from "./PaymentHisRow";

const PaymentHistory = () => {
  return (
    <div className="">
      <h1 className="text-center text-3xl">Payment history</h1>

      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>

                <th scope="col" className="px-6 py-3">
                  Transection Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
              </tr>
            </thead>

            <PaymentHisRow></PaymentHisRow>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
