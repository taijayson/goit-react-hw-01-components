import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css"

const TransactionHistory = ({ transactions }) => {
    return (
    <table className={styles.transaction_history}>
        <thead className={styles.transaction_head}>
                <tr className={styles.transaction_row}>
                <th className={styles.transaction_itemHead}>Type</th>
                <th className={styles.transaction_itemHead}>Amount</th>
                <th className={styles.transaction_itemHead}>Currency</th>
            </tr>
        </thead>
            <tbody className={styles.transaction_table}>
                {transactions.map(({ id, type, amount, currency }) =>
                <tr className={styles.transaction_row} key={id}>   
                    <td className={styles.transaction_item}>{type}</td>
                    <td className={styles.transaction_item}>{amount}</td>
                    <td className={styles.transaction_item}>{currency}</td>
                </tr>
                )}
        </tbody>       
    </table>
    );
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired
    ),
};

export default TransactionHistory;