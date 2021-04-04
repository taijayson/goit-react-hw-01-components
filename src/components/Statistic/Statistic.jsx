import PropTypes from "prop-types";
import styles from "./Statistic.module.css"

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const StatisticPage = ({ title, statisticalData }) => {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>{title}</h2>
            <ul className={styles.stat_list}>
                {statisticalData.map((item) => (
            <li className={styles.item} key={item.id} style={{backgroundColor: getRandomColor()}}>
                <span className={styles.label}>{item.label}</span>
                <span className={styles.percentage}>{item.percentage} %</span>
            </li>
                    
                ))}
        </ul>
        </section>
    )
}

StatisticPage.propTypes = {
    title: PropTypes.string,
    statisticalData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    ),
};

export default StatisticPage;