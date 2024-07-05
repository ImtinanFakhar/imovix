import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss"; // Make sure to include relevant styles

const serverUrls = {
  server1: (mediaType, id, season, episode) => {
    if (mediaType === "movie") {
      return `https://vidsrc.me/embed/movie/${id}?autoplay=1&logo=0`;
    } else if (mediaType === "tv") {
      return `https://vidsrc.me/embed/tv/${id}/${season}/${episode}?autoplay=1&logo=0`;
    }
  },
  server2: (mediaType, id, season, episode) => {
    if (mediaType === "movie") {
      return `https://vidsrc.to/embed/movie/${id}?autoplay=1&logo=0`;
    } else if (mediaType === "tv") {
      return `https://vidsrc.to/embed/tv/${id}/${season}/${episode}?autoplay=1&logo=0`;
    }
  },
  server3: (mediaType, id, season, episode) => {
    if (mediaType === "movie") {
      if (id.startsWith("tt")) { // Check if id is IMDb id
        return `https://multiembed.mov/directstream.php?video_id=${id}`;
      } else { // Otherwise assume it's TMDB id
        return `https://multiembed.mov/directstream.php?video_id=${id}&tmdb=1`;
      }
    } else if (mediaType === "tv") {
      if (id.startsWith("tt")) { // Check if id is IMDb id
        return `https://multiembed.mov/directstream.php?video_id=${id}&s=${season}&e=${episode}`;
      } else { // Otherwise assume it's TMDB id
        return `https://multiembed.mov/directstream.php?video_id=${id}&tmdb=1&s=${season}&e=${episode}`;
      }
    }
  },
  server4: (mediaType, id, season, episode) => {
    if (mediaType === "movie") {
      return `https://player.smashy.stream/movie/${id}`;
    } else if (mediaType === "tv") {
      return `https://player.smashy.stream/tv/${id}?s=${season}&e=${episode}`;
    }
  }
};

const VidSrcPlayer = ({ mediaType, id, season, episode }) => {
  const [selectedServer, setSelectedServer] = useState("server1");

  const url = serverUrls[selectedServer](mediaType, id, season, episode);

  return (
    <div className="vidsrc-player">
      <div className="server-selector">
        {Object.keys(serverUrls).map(server => (
          <button
            key={server}
            className={`server-button ${server === selectedServer ? "active" : ""}`}
            onClick={() => setSelectedServer(server)}
          >
            {server}
          </button>
        ))}
      </div>
      <div className="video-container">
        <iframe
          src={url}
          referrerPolicy="origin"
          allow="autoplay; encrypted-media"
          allowFullScreen
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
