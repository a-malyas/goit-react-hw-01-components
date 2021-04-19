import React from 'react';
import PropTypes from "prop-types";


const Statistics = ({ title, stats }) => (
    <section className="">
        {title && <h2 className="">{title}</h2>}
        <ul className="">
            {stats.map(item =>
                <li key={item.id} className="">
                    <span>{item.label}</span>
                    <span>{item.percentage + ' %'}</span>
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