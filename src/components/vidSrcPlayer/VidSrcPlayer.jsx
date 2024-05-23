import React from "react";
import PropTypes from "prop-types";
import "./style.scss"; // Make sure to include relevant styles

const VidSrcPlayer = ({ mediaType, id }) => {
    const url = `https://vidsrc.me/embed/${mediaType}/${id}`;

    return (
        <div className="vidsrc-player">
            <h2>Video Player</h2>
            <div className="video-container">
                <iframe
                    src={url}
                    referrerPolicy="origin"
                    frameBorder="0"
                    allowFullScreen
                    title="VidSrc Player"
                ></iframe>
            </div>
        </div>
    );
};

VidSrcPlayer.propTypes = {
    mediaType: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default VidSrcPlayer;
