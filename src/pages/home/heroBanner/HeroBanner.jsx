import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";

import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import ShareBtn from "../../../components/shareBtn/ShareBtn";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show the modal when the component mounts
    setShowModal(true);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const redirectToAd = () => {
    sessionStorage.setItem("adShown", "true");
    window.open("https://tauphaub.net/4/7649841", "_blank");
  };

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      const adShown = sessionStorage.getItem("adShown");
      if (!adShown) {
        redirectToAd();
      } else {
        navigate(`/search/${query}`);
      }
    }
  };

  const searchButtonClickHandler = () => {
    if (query.length > 0) {
      const adShown = sessionStorage.getItem("adShown");
      if (!adShown) {
        redirectToAd();
      } else {
        navigate(`/search/${query}`);
      }
    }
  };

  const handleInputClick = () => {
    const adShown = sessionStorage.getItem("adShown");
    if (!adShown) {
      redirectToAd();
    }
  };

  return (
    <>
      <div className="heroBanner">
        {!loading && (
          <div className="backdrop-img">
            <Img src={background} />
          </div>
        )}
        <div className="opacity-layer"></div>
        <ContentWrapper>
          <div className="heroBannerContent">
            <span className="title">Welcome</span>
            <span className="subTitle">
              Explore and Watch Movies, TV shows all for free.
            </span>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or tv show...."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                onClick={handleInputClick}
              />
              <button onClick={searchButtonClickHandler}>Search</button>
            </div>
            <div className="shareButtons">
              <ShareBtn url={window.location.origin} />
            </div>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
};

export default HeroBanner;
