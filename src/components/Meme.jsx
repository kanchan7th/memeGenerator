import React, { useState } from "react";
import memeData from "../memeData";

export default function Meme() {
  // const [memeImage, setMemeImage] = useState("");
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImage] = useState(memeData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleClick = () => {
    console.log("this function is called");
    const memeArray = allMemeImages.data.memes;

    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].url;
    console.log(randomNumber);
    setMeme((prevImage) => ({
      ...prevImage,
      randomImage: url,
    }));
  };

  return (
    <>
      <main>
        <form className="form">
          <input
            type="text"
            placeholder="Top text"
            className="form--input"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Bottom text"
            className="form--input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
          <button type="button" className="form--button" onClick={handleClick}>
            Get a new meme image 🖼
          </button>
        </form>
        <div className="meme">
          <img src={meme.randomImage} className="meme--image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </main>
    </>
  );
}
