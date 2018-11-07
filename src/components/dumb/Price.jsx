import React from 'react';

const Price = props => (
    <div className="price">
        <div className="stock-info-price">
            {
                props.price &&
                <h4>${props.price}</h4>
            }
        </div>
        <div className="stock-info-week52Limits">
            <div>
                {
                    props.w52high &&
                    <div class="week-52-high">${props.w52high}</div> 
                }
            </div>
            <div>
                {
                    props.w52low &&
                    <div class="week-52-low">${props.w52low}</div>
                }
            </div>
        </div>
    </div>
)

export default Price;