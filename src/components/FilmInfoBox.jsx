import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import nausicaa from "../assets/nausicaa.jpg";
import "../styles/FilmInfoBox.css";

export default function FilmInfoBox() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <div className="nausicaa-info-box">
        <div className="dropdown-initial-text">
          <p>Did you know...</p>
          {isOpen ? (
            <button onClick={handleDropdown}>
              <FaMinus />
            </button>
          ) : (
            <button onClick={handleDropdown}>
              <FaPlus />
            </button>
          )}
        </div>
        {isOpen && (
          <>
            <p className="dropdown-info">
              It&apos;s commonly thought that{" "}
              <span className="bolder-text">
                Nausicaä of the Valley of the Wind
              </span>
              , directed by Hayao Miyazaki and based on his manga, was produced
              by Studio Ghibli. It was released in 1984, but Studio Ghibli
              formed in 1985 and its first film,{" "}
              <span className="bolder-text">Laputa: Castle in the Sky</span>,
              was released in 1986. However, many of those who worked on
              Nausicaä went on to form Studio Ghibli and it was Miyazaki&apos;s
              first of many collaborations with composer Joe Hisaishi. Despite
              not being produced by Studio Ghibli, it is typically considered
              part of the canon.
            </p>
            <div className="nausicaa-headers">
              <h4>Nausicaä of the Valley of the Wind</h4>
              <h4>風の谷のナウシカ</h4>
            </div>
            <div className="nausicaa-image-and-description">
              <img
                className="nausicaa-image"
                src={nausicaa}
                alt="Film poster"
              />
              <p>
                Nausicaä, the 16-year-old princess of the Valley of the Wind,
                explores the jungle and communicates with its creatures,
                including the gigantic, trilobite-like armored Ohm. She hopes to
                understand the jungle and find a way for it and humans to
                co-exist.
              </p>
            </div>
            <div className="nausicaa-film-details-bottom">
              <p>
                <b>Release year:</b> 1984
              </p>
              <p>
                <b>Director:</b> Hayao Miyazaki
              </p>
              <p>
                <b>Running time:</b> 1h 57m
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
