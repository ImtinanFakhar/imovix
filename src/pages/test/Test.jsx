import React from "react";
import VidSrcPlayer from "../../components/vidSrcPlayer/VidSrcPlayer";

const Test = () => {
    const mediaType = "movie"; // Example media type
    const id = "tt5433140"; // Example ID

    return (
        <div>
            <h1>Test VidSrcPlayer</h1>
            <VidSrcPlayer mediaType={mediaType} id={id} />
        </div>
    );
};

export default Test;