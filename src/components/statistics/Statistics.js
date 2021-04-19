import React from 'react';
import PropTypes from "prop-types";
import styles from './Statistics.module.css';

function get_random_color() 
{
    var r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}

const Statistics = ({ title, stats }) => (
    <section className={styles.Statistics_table}>
        {title && <h2 className={styles.Statistics_title}>{title}</h2>}
        <ul className={styles.Statistics_list}>
            {stats.map(item =>
                <li key={item.id} className={styles.Statistics_item} style={{backgroundColor: get_random_color()}}>
                    <span className={styles.label}>{item.label}</span>
                    <span className={styles.percentage}>{item.percentage + ' %'}</span>
                </li>
            )}
        </ul>
    </section>
);

Statistics.defaultProps = {
    title: '',
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        label: PropTypes.string,
        percentage: PropTypes.number,
    })
  ),
};


export default Statistics;