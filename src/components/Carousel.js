import React, { useEffect, useState, useRef } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { RxDotFilled, RxDot } from "react-icons/rx";
import usePostQuery from "../hooks/useImages";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { responseData, loading, error } = usePostQuery(
    "https://www.reddit.com/r/aww/top/.json?t=all"
  );

  const currentImageIndexRef = useRef();

  useEffect(() => {
    // cache the current state value
    currentImageIndexRef.current = currentIndex;
    console.log("---h", currentIndex);
  }, [currentIndex]);

  const increment = () => {
    // access the current state value
    if (currentImageIndexRef.current + 1 < responseData?.length) {
      setCurrentIndex((currentIndex) => currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    const id = setInterval(increment, 3000);
    return () => clearInterval(id);
  });

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? responseData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === responseData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // useEffect(() => {
  //   callPost();
  // }, []);

  if (loading) {
    return <p>Images are loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (responseData?.length > 1) {
    return (
      <div
        id="carouselExampleCaptions"
        className="relative mt-8 max-w-[1400px] w-full absolute carousel slide carousel-fade"
        data-te-carousel-init
        data-te-carousel-slide
      >
        <div className="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
          {responseData.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              {slideIndex === currentIndex ? <RxDotFilled color="white"/> : <RxDot color="white"/>}
            </div>
          ))}
        </div>
        <div className="relative overflow-hidden after:clear-both after:block after:content-['']">
          <div
            className="relative float-left -mr-[100%] transition-transform duration-3000ms ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={responseData[currentIndex]?.data?.url_overridden_by_dest}
              className="block object-fill w-[70vw] h-[60vh] rounded"
              alt="..."
            />
          </div>
        </div>
        {/* Left Arrow */}
        <div className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none">
          <BiLeftArrow onClick={prevSlide} size={30} color="white" />
        </div>
        {/* Right Arrow */}
        <div className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none">
          <BiRightArrow onClick={nextSlide} size={30} color="white" />
        </div>
      </div>
    );
  }
}
