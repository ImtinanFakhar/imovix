import React from "react";
import PropTypes from "prop-types";

const VidSrcPlayer = ({ mediaType, id }) => {
    const url = `https://vidsrc.in/embed/${mediaType}/${id}`;
    console.log("VidSrcPlayer URL:", url);

    return (
        <div className="vidsrc-player">
            <iframe
                src={url}
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen
                title="VidSrc Player"
                onError={(e) => console.error('Iframe load error', e)}
            ></iframe>
        </div>
    );
};

VidSrcPlayer.propTypes = {
    mediaType: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default VidSrcPlayer;
