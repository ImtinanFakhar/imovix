import React from "react";
import { InlineShareButtons } from "sharethis-reactjs";
import "./style.scss"

const ShareBtn= () => {
  return (
    <InlineShareButtons
      config={{
        alignment: "center", // alignment of buttons (left, center, right)
        color: "social", // set the color of buttons (social, white)
        enabled: true, // show/hide buttons (true, false)
        font_size: 16, // font size for the buttons
        labels: "counts",
        min_count: 1000, // button labels (cta, counts, null)
        language: "en", // language of the buttons
        networks: [
          // which networks to include (facebook, twitter, linkedin, pinterest, email)
          'whatsapp',
              'telegram',
              'messenger',
              'pinterest',
              'facebook',
              'twitter'
        ],
        padding: 12, // padding within buttons (INTEGER)
        radius: 4, // the corner radius on each button (INTEGER)
        show_total:true ,
        size: 30, // the size of each button (INTEGER)
        show_mobile: true, // show/hide the component on mobile (true, false)
        show: true, // show/hide the component (true, false)
        spacing: 10, // the space between buttons (INTEGER)
        url: window.location.href, // url to share
        title: "Check out this amazing website!", // title to share
        description: "Explore thousands of movies, TV shows, and more!", // description to share
      }}
    />
  );
};

export default ShareBtn;
