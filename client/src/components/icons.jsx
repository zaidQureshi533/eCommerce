const BadgeIcon = ({icon, label}) => {
	return (
		<div className='relative p-1 flex'>
			{icon}
			{label > 0 && (
				<div className='min-w-6 aspect-square absolute -top-2 -right-2 flex items-center justify-center text-[12px] font-bold text-white bg-blue-700 border-2 border-white rounded-full shadow-sm'>
					{label}
				</div>
			)}
		</div>
	);
};

export {BadgeIcon};
