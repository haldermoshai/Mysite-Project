import React, { useState, useEffect } from 'react';
import "../styles/Carousel.css";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const data = [
  {
    "src": "/frames/image1.jpg",
    "alt": "image1"
  },
  {
    "src": "/frames/image2.jpg",
    "alt": "image2"
  },
  {
    "src": "/frames/image3.jpg",
    "alt": "image3"
  },
  {
    "src": "/frames/image4.jpg",
    "alt": "image4"
  },
	{
    "src": "/frames/image5.jpg",
    "alt": "image5"
  },
	{
    "src": "/frames/image6.jpg",
    "alt": "image6"
  },
	{
    "src": "/frames/image7.jpg",
    "alt": "image7"
  },
	{
    "src": "/frames/image8.jpg",
    "alt": "image8"
  },
	{
    "src": "/frames/image9.jpg",
    "alt": "image9"
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, [currentIndex]); // Re-run effect when currentIndex changes

  return (
    <div>
			<div className='heroDiv'>

				<section className='imageSection'>
					<SlArrowLeft className='arrow arrowLeft' onClick={goToPrevious} />
						{
							data.map((item, index) => {
								return (
									<img 
										className={`image ${index === currentIndex ? 'active' : ''}`}
										src={item.src}
										alt={item.alt}
										key={index}
									/>
								);
							})
						}
					<SlArrowRight className='arrow arrowRight' onClick={goToNext} />
          <span className='indicators'>
            {
              data.map((_, index) => {
                return (
                  <button key={index} 
                          onClick={() => setCurrentIndex(index)} 
                          className={`indicator ${index === currentIndex ? 'active' : ''}`}>
                  </button>
                );
              })
            }
          </span>
				</section>

				<section className='introSection'>
					<section>
						<h1>Prints are</h1>
						<p>Coming soon...</p>
					</section>
					<img
					  className='introImage'
					  src="https://us.123rf.com/450wm/toonsteb/toonsteb2306/toonsteb230600957/206888768-hand-drawn-cameraman-with-a-camera-in-flat-style-isolated-on-background.jpg?ver=6"
					  alt="intro-img"
					/>
				</section>

			</div>
    </div>
  );
}

export default Carousel;