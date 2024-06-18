import React from "react";
import PropTypes from "prop-types";
import "./style.scss"; // Make sure to include relevant styles

const VidSrcPlayer = ({ mediaType, id }) => {
  const url = `https://2embed.org/embed/${mediaType}/${id}?autoplay=1&logo=0`;

  return (
    <div className="vidsrc-player">
      <h3>If a server doesn't work change to a different one.</h3>
      <div className="video-container">
        <iframe
          src={url}
          referrerPolicy="origin"
          allow="autoplay; encrypted-media"
          allowfullscreen="true"
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
