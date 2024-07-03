import React from "react";
import PropTypes from "prop-types";
import "./style.scss"; // Make sure to include relevant styles

const VidSrcPlayer = ({ mediaType, id, season, episode }) => {
  let url;
  if (mediaType === "movie") {
    url = `https://vidsrc.me/embed/movie/${id}?autoplay=1&logo=0`;
  } else if (mediaType === "tv") {
    url = `https://vidsrc.me/embed/tv/${id}/${season}/${episode}?autoplay=1&logo=0`;
  }

  return (
    <div className="vidsrc-player">
      <div className="video-container">
        <iframe
          src={url}
          referrerPolicy="origin"
          allow="autoplay; encrypted-media"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
};

VidSrcPlayer.propTypes = {
  mediaType: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  season: PropTypes.number,
  episode: PropTypes.number,
};

export default VidSrcPlayer;
