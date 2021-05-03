import React, { useState, useEffect } from "react";

const Slider = (props) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    let slides = [
        "/images/banner-1.jpg",
        "/images/banner-2.jpg",
        "/images/banner-3.jpg"
    ];

    useEffect(() => {
        setTimeout(() => {
            if (currentSlide >= slides.length - 1) {
                setCurrentSlide(0);
                console.log("setCurrentSlide:", setCurrentSlide);
            } else setCurrentSlide(currentSlide + 1);
        }, 3000);
    });

    return (
        <>
            <section className="banner index-banner">
                <img src={slides[currentSlide]} alt="" />;
            </section>
        </>
    );
};

export default Slider;
