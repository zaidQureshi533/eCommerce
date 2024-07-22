import React, {useState} from 'react';
import {ArrowLeft, ArrowRight} from './icons';
import { slides } from '../data';
const Slider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleSlide = (direction) => {
		if (direction === "left") {
			const isFirstSlide = currentIndex === 0;
			const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
			setCurrentIndex(newIndex);
		}
		else {
			const isLastSlide = currentIndex === slides.length - 1;
			const newIndex = isLastSlide ? 0 : currentIndex + 1;
			setCurrentIndex(newIndex);
		}
	}


	return (
		<div className='relative hidden sm:flex items-center h-screen overflow-hidden'>
			{/* Left Arrow */}
			<button
				onClick={()=> {handleSlide("left")}}
				className='w-10 h-10 rounded-full flex items-center justify-center cursor-pointer absolute left-5 z-10  transition duration-150 hover:bg-gray-200'
			>
				<ArrowLeft size='34px' />
			</button>
			<div
				className='flex w-full h-full transition-transform duration-1000 ease-in-out transform'
				style={{transform: `translateX(-${currentIndex * 100}%)`}}
			>
				{slides.map((slide) => (
					<div
						key={slide.id}
						className='flex-shrink-0 w-full h-full flex bg-slate-50'
					>
						{/* Image Container */}
						<div className='w-1/2 h-full flex items-center justify-center '>
							<img
								src={slide.img}
								alt='Slide'
								className='w-full h-[90%] object-contain'
							/>
						</div>

						{/* Text Container */}
						<div className='w-1/2 h-full flex items-center justify-center p-8'>
							<div>
								<h1 className='text-[70px] font-bold'>{slide.title}</h1>
								<p className='text[20px] font-medium tracking-[3px] my-[50px]'>
									{slide.desc}
								</p>
								<button className='py-3 px-5 text[20px] tracking-wider border-2 border-gray-700 hover:bg-gray-700 hover:text-white transition duration-100'>
									SHOP NOW
								</button>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Right Arrow */}
			<button
				onClick={()=> {handleSlide("right")}}
				className='w-10 h-10 rounded-full flex items-center justify-center cursor-pointer absolute right-5 z-10  transition duration-150 hover:bg-gray-200'
			>
				<ArrowRight size='34px' />
			</button>
		</div>
	);
};

export default Slider;
