import React from "react";
import PropTypes from "prop-types";
import "./style.scss"; // Make sure to include relevant styles

const VidSrcPlayer = ({ mediaType, id }) => {
  const url = `https://vidsrc.to/embed/${mediaType}/${id}?autoplay=1&logo=0`;

  return (
    <div className="vidsrc-player">
      <h2>Video Player</h2>
      <div className="video-container">
        <iframe
          src={url}
          referrerPolicy="origin"
          frameborder="0"
          allowfullscreen
          referrerpolicy="origin"
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
