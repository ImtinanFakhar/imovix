import React from "react";
import PropTypes from "prop-types";
import "./style.scss"; // Make sure to include relevant styles

const VidSrcPlayer = ({ mediaType, id }) => {
    const url = `https://vidsrc.me/embed/${mediaType}/${id}`;
    

    return (
        <div className="vidsrc-player">
            <iframe
                src={url}
                referrerPolicy="origin"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen
                title="VidSrc Player"
            ></iframe>
        </div>
    );
};

VidSrcPlayer.propTypes = {
    mediaType: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default VidSrcPlayer;
