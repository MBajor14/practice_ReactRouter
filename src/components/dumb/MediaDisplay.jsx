import React from 'react';
import { Media } from 'react-bootstrap';

const MediaDisplay = props => (
    <div>
        <Media>
            <Media.Left>
                {console.log(props.i)};
                <img width={64} height={64} src={props.image} alt={"thumbnail"} />
            </Media.Left>
            <Media.Body>
                <Media.Heading>{props.headline}</Media.Heading>
                <p>{props.summary}</p>
            </Media.Body>
        </Media>
    </div>
)

export default MediaDisplay;