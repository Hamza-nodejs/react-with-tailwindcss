import React, { useRef } from 'react';

export default function Video() {
    const videoRef = useRef(null);

    const handlePlayVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
            videoRef.current.setAttribute("controls", "controls");
            videoRef.current.style.display = "block";
        }

        const image = document.getElementById("thumbnail");
        if (image) {
            image.style.display = "none";
        }
    };

    return (
        <div className="video-container flex justify-center items-center pt-16 bg-gray-100">
            <img
                id="thumbnail"
                className="cursor-pointer w-full max-w-5xl rounded-lg shadow-lg"
                src="https://aws-sam-cli-managed-default-samclisourcebucket-fkwqvzru5nkf.s3.us-east-2.amazonaws.com/g7Images/media/howitworks.png"
                alt="Click to play video"
                onClick={handlePlayVideo}
            />
            <video
                ref={videoRef}
                className="w-full max-w-3xl rounded-lg shadow-lg"
                src="https://aws-sam-cli-managed-default-samclisourcebucket-fkwqvzru5nkf.s3.us-east-2.amazonaws.com/g7Images/media/howitworks.mp4"
                style={{ display: 'none' }}
                muted
            />
        </div>
    );
}
