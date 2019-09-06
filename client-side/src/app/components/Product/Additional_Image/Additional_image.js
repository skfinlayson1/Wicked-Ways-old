import React from 'react';

export default function AdditionalImage(props) {

    const style = {backgroundImage: `url(${props.image.url})`};

    if (props.image.url === props.shownImage) {
            return <div className="selected-additional-image" style={style} onClick={() => props.changeImage(props.image.url)}></div>
    } else {
            return <div className="additional-image" style={style} onClick={() => props.changeImage(props.image.url)}></div>
    }

}