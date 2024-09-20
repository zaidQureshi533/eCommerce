import React from 'react';
import { IoSendSharp } from "react-icons/io5";
const Newsletter = () => {
	return (
		<div className='h-[70vh] md:h-[50vh] bg-pink-100 flex items-center justify-center flex-col gap-2 md:gap-5 p-3'>
			<h1 className='title font-bold text-4xl md:text-7xl md:p-0'>Newsletter</h1>
			<div className='description text-xl md:text-2xl font-light text-center'>
				Get Timely updates from your favourite products
			</div>
			<div className='inputContainer w-4/5 md:w-1/2 h-10 bg-white flex justify-between border border-gray-800'>
				<input
					type='email'
					placeholder='Your Email'
                    className='flex-[5] focus:outline-none ps-5 text-sm'
				/>
				<button className='flex-1 bg-teal-700 flex justify-center items-center'>
					<IoSendSharp size={20} color='white'/>
				</button>
			</div>
		</div>
	);
};

export default Newsletter;
