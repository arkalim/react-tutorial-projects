import React from "react";
import { FaQuoteRight } from "react-icons/fa";

function Slide({ index, people }) {
    return (
        <div>
            {people.map((person, personIndex) => {
                const { id, image, name, title, quote } = person;

                // by default, every slide will be set to nextSlide
                let position = "nextSlide";

                if (personIndex === index) {
                    position = "activeSlide";
                }

                if (
                    personIndex === index - 1 ||
                    (index === 0 && personIndex === people.length - 1)
                ) {
                    position = "lastSlide";
                }

                return (
                    <article className={position} key={id}>
                        <img src={image} alt={name} className="person-img" />
                        <h4>{name}</h4>
                        <p className="title">{title}</p>
                        <p className="text">{quote}</p>
                        <FaQuoteRight className="icon" />
                    </article>
                );
            })}
        </div>
    );
}

export default Slide;
