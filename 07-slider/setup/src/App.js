import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "./data";
import Slide from "./Slide";
function App() {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

    // wrap the index around if the value overflows or underflows
    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        } else if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    // automatically increment the index
    useEffect(() => {
        const slider = setInterval(() => {
            setIndex(index + 1);
        }, 3000);
        return () => clearInterval(slider);
    }, [index]);

    return (
        <section className="section">
            <div className="title">
                <h2>
                    <span>/</span>Reviews
                </h2>
            </div>
            <div className="section-center">
                <Slide people={people} index={index} />
                <button className="prev" onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft />
                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                    <FiChevronRight />
                </button>
            </div>
        </section>
    );
}

export default App;
