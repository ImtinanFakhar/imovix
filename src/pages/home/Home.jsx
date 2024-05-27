import "./style.scss";
import { Helmet } from 'react-helmet';
import HeroBanner from "./heroBanner/HeroBanner";
import Trending  from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
const Home = () => {
  return (
    <div className="homePage">
      <Helmet>
        <title>Home - Free Movie Streaming Website</title>
      <meta property="og:title" content="Movie Streaming Website - Home" />
      <meta
        property="og:description"
        content="Watch movies online for free. Stream the latest movies and TV shows on our platform. No subscription required."
      />
        <link rel="canonical" href="/" />
      <meta property="og:image" content="/images/IMOVIX__1.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:title" content="Free Movie Streaming Website - Home" />
      <meta
        name="twitter:description"
        content="Watch movies online for free. Stream the latest movies and TV shows on our platform. No subscription required."
      />
      <meta name="twitter:image" content="/images/IMOVIX__1.png" />
      </Helmet>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
