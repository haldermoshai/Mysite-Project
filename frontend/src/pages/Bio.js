import React from 'react';
import myImage from "../pics/image.jpg";
import "../styles/Bio.css"

const Bio = () => {
  return (
    <div>
			<div className='bio'>
				<section className='imgSection'>
					<img className="myImage" src={myImage} alt="my-img"></img>
				</section>

				<section className='aboutMe'>
					<h1>About Me</h1>
					<p>
						Hi! This is Sourav Halder; a Daily Life, Street, Portrait and Travel photographer from Kolkata. This is my website.
					</p>
				</section>
			</div>
    </div>
  );
}

export default Bio;