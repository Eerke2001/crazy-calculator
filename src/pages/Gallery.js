import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../consts";

const Gallery = () => {

  const hallArray = [
    { number: 'two', artist: 'Erin Troch' },
    { number: 'three', artist: 'Erin Troch' },
    { number: 'four', artist: 'Erin Troch' },
    { number: 'five', artist: 'Erin Troch' },
    { number: 'six', artist: 'Erin Troch' },
    { number: 'seven', artist: 'Erin Troch' },
    { number: 'eight', artist: 'Erin Troch' },
    { number: 'nine', artist: 'Iben Troch' },
    { number: 'ten', artist: 'Erin Troch' }
  ];

  const showImages = hallArray.map(item => {
    return (
      <div className="surround__pat--img">
        <div className={`pat--img pat-${item.number}-img`}>
        </div>
        <p className="p-creator">creator: <span className="p-creator-bold">{item.artist}</span></p>
      </div>
    )
  })

  return (
    <>
      <div className="hall-bg"></div>
      <main className="hall-main">
        <h2 className="hall-title">Aanschouw de beste werken van mensen over heel de wereld!</h2>
        <div className="hall-grid-images">
          {showImages}
        </div>
      </main>

    </>
  );
};

export default Gallery;
