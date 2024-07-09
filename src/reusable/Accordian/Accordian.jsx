import React, { useState } from 'react';
import './Accordian.css';

const Accordian = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <div key={index} className="accordion-item">
                    <div
                        className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => handleClick(index)}
                    >
                        {item.title}
                        <span className="accordion-icon">
              {activeIndex === index ? '-' : '+'}
            </span>
                    </div>
                    {activeIndex === index && (
                        <div className="accordion-content">
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordian;
