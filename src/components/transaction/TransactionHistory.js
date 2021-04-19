import React from 'react';
import PropTypes from "prop-types";
import styles from  './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
    <table className={styles.transaction_table}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map(item =>
                <tr key={item.id} className={styles.table_row}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
            )}
            
        </tbody>
    </table>
);

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })
    ).isRequired,
};

export default TransactionHistory;