import React from 'react';
import PropType from 'prop-types';
import style from './trans.module.css';

function Transaction({ data }) {
  let choiceCountOrUncount = 0;
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, type, amount, currency }) => {
          ++choiceCountOrUncount;
          return (
            <tr
              key={id}
              className={
                choiceCountOrUncount % 2 === 0 ? style.count : style.uncount
              }
            >
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Transaction.propType = {
  id: PropType.string,
  type: PropType.string,
  amount: PropType.string,
  currency: PropType.string,
  data: PropType.array,
};

export default Transaction;
