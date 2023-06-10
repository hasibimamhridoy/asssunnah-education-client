import React from 'react';
import usePaymentHistory from '../../../../../hooks/usePaymentHistory';

const PaymentHisRow = () => {

    const [PaymentHistory,refetch] = usePaymentHistory()

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