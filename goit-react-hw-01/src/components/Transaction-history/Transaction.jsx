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
          choiceCountOrUncount += 1;
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

Transaction.defaultProps = {
  data: [],
};

Transaction.PropType = {
  data: PropType.arrayOf(
    PropType.shape({
      id: PropType.string,
      type: PropType.string,
      amount: PropType.string,
      currency: PropType.string,
      map: PropType.func,
    }),
  ),
};

export default Transaction;
