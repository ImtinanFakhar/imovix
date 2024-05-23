import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, className }) => {
    // Check if src is a string, if not, default to an empty string
    const validSrc = typeof src === 'string' ? src : '';

    return (
        <LazyLoadImage
            className={className || ""}
            alt=""
            effect="blur"
            src={validSrc}
        />
    );
};

export default Img;