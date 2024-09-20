import React, {useState} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import {slides} from '../data';
const Slider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const PF = process.env.PUBLIC_FOLDER;
	const handleSlide = (direction) => {
		if (direction === 'left') {
			const isFirstSlide = currentIndex === 0;
			const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
			setCurrentIndex(newIndex);
		} else {
			const isLastSlide = currentIndex === slides.length - 1;
			const newIndex = isLastSlide ? 0 : currentIndex + 1;
			setCurrentIndex(newIndex);
		}
	};

	return (
		<div className='relative hidden sm:flex items-center h-screen overflow-hidden'>
			{/* Left Arrow */}
			<button
				onClick={() => {
					handleSlide('left');
				}}
				className='w-10 h-10 rounded-full flex items-center justify-center cursor-pointer absolute left-5 z-10  transition duration-150 hover:bg-gray-200'
			>
				<IoIosArrowBack size={24} />
			</button>
			<div
				className='flex h-full transition-transform duration-1000 ease-in-out'
				style={{transform: `translateX(-${currentIndex * 100}%)`}}
			>
				{slides.map((slide) => (
					<div
						key={slide.id}
						className='flex flex-shrink-0 w-full h-full bg-slate-50'
					>
						{/* Image Container */}
						<div className='flex-1  h-full flex items-center justify-center '>
							<img
								src={`${PF}${slide.img}`}
								alt='Slide'
								className='w-full h-[90%] object-contain'
							/>
						</div>

						{/* Text Container */}
						<div className='flex-1 h-full flex items-center justify-center px-5'>
							<div>
								<h1 className='text-[58px] font-bold'>{slide.title}</h1>
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
				onClick={() => {
					handleSlide('right');
				}}
				className='w-10 h-10 rounded-full flex items-center justify-center cursor-pointer absolute right-5 z-10  transition duration-150 hover:bg-gray-200'
			>
				<IoIosArrowForward size={24} />
			</button>
		</div>
	);
};

export default Slider;
