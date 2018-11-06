import React from 'react';
import MediaDisplay from '../dumb/MediaDisplay';

const TrendingNews = props => {
    return(
        <div>
            <MediaDisplay article={props[0]} />
        </div>
    )
}

export default TrendingNews;