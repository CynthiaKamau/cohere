import React, { useEffect, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { RxDotFilled, RxDot } from "react-icons/rx";
import usePostQuery from "../hooks/useImages";

export default function Carousel() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const { responseData, loading, error, callPost } = usePostQuery(
    "https://www.reddit.com/r/aww/top/.json?t=all"
  );

  console.log("here", responseData)

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

  useEffect(() => {
    function setTransitionInterval() {
      setInterval(() => {
        console.log("currentIndex", currentIndex)
        if(currentIndex === (responseData?.length -1)) {
          setCurrentIndex(0)
        } else {
          setCurrentIndex(currentIndex + 1)
        }
      }, 3000)
    }
    setTransitionInterval();
  }, [currentIndex])

  useEffect(() => {
    callPost();
  }, [])


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
        className="relative mt-8 max-w-[800px] max-h-[600px] absolute carousel slide carousel-fade"
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
              { slideIndex === currentIndex ? <RxDotFilled /> : <RxDot /> }
            </div>
          ))}
        </div>
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <div
            className="relative float-left -mr-[100%] w-full transition-transform duration-600ms ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={responseData[currentIndex]?.data?.url_overridden_by_dest}
              className="block w-full"
              alt="..."
            />
          </div>
        </div>
        {/* Left Arrow */}
        <div className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none">
          <BiLeftArrow onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none">
          <BiRightArrow onClick={nextSlide} size={30} />
        </div>
      </div>
    );
  }
}
