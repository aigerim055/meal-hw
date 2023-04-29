import React, {useState} from 'react';
import ModalVideo from "react-modal-video";

const CustomModalVideo = (id) => {
	
	const videoId = id.id.slice(id.id.indexOf('=')  + 1)
	// console.log(id)
	const [isOpen, setOpen] = useState(true)
	return (
		<div className={'container'}>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />
		</div>
	);
};

export default CustomModalVideo;