import React from 'react';

const Price = props => (
    <div className="stock-info-price">
        {
            props.price &&
            <h4>${props.price}</h4>
        }
    </div>
)

export default Price;