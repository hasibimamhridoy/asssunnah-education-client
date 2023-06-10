import React from "react";
import usePaymentHistory from "../../../../../hooks/usePaymentHistory";
import NotFound from "../../../../../components/NotFound/NotFound";

const PaymentHisRow = () => {
  const [PaymentHistory] = usePaymentHistory();

  if (PaymentHistory.length < 1) {
    return (
      <div>
        <NotFound></NotFound>
      </div>
    );
  }

  return (
    <tbody>
      {PaymentHistory.map((payment) => {
        return (
          <tr key={payment._id}>
            <td className="px-6 py-4">{payment.email}</td>
            <td className="px-6 py-4">{payment.transactionId}</td>
            <td className="px-6 py-4">{payment.date}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default PaymentHisRow;
