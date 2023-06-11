import React from "react";
import PaymentHisRow from "./PaymentHisRow";
import SectionTitle from "../../../../../components/SectionTitile/SectionTitle";
import usePaymentHistory from "../../../../../hooks/usePaymentHistory";
import NotFound from "../../../../../components/NotFound/NotFound";

const PaymentHistory = () => {
  const [PaymentHistory] = usePaymentHistory();

  if (PaymentHistory.length < 1) {
    return (
      <div>
        <SectionTitle clrTitle="Payment" subTitle="Hostory"></SectionTitle>
        <NotFound></NotFound>
      </div>
    );
  }

  return (
    <div className="">
      <SectionTitle clrTitle="Payment" subTitle="History"></SectionTitle>

      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Course Name
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
