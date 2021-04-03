import PropTypes from "prop-types";

const StatisticPage = ({ title, statisticalData }) => {
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>
            <ul className="stat-list">
                {statisticalData.map((item) => (
            <li className="item" key={item.id}>
                <span className="label">{item.label}</span>
                <span className="percentage">{item.percentage}</span>
            </li>
                    
                ))}
        </ul>
        </section>
    );
};

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

export default StatisticPage