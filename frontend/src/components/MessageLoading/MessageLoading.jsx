const MessageLoading= () => {
	return (
		<div className="max-h-[300px] min-h-[300px] w-full pt-3">
			<div className='flex gap-3 items-center'>
				<div className='skeleton bg-slate-300 opacity-80  w-10 h-10 rounded-full shrink-0'></div>
				<div className='flex flex-col gap-1'>
					<div className='skeleton bg-slate-300 opacity-80 h-10 w-40'></div>
					<div className='skeleton bg-slate-300  opacity-80 h-10 w-40'></div>
				</div>
			</div>
            <br/>

			<div className='flex gap-3 items-center justify-end'>
				<div className='flex  flex-col gap-1'>
					<div className='skeleton bg-slate-300 opacity-80  h-10 w-40'></div>
                    <div className='skeleton bg-slate-300 opacity-80 h-10 w-40'></div>
                    <div className='skeleton bg-slate-300 opacity-80 h-10 w-40'></div>
				</div>
				<div className='skeleton bg-slate-300 w-10 opacity-80 h-10 rounded-full shrink-0'></div>
			</div>
            
		</div>
	);
};
export default MessageLoading;