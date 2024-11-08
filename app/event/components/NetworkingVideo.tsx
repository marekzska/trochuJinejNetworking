"use client"
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

export const NetworkingVideo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    useEffect(() => {
        const video = document.querySelector('video')!;
        if (isPlaying) {
            video.play();
        } else {
            video.pause();
        }
    }, [isPlaying])
    return (
        <div className="relative md:w-1/2 aspect-[9/16] overflow-hidden rounded-3xl cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
            {!isPlaying && <FontAwesomeIcon icon={faYoutube} className="h-20 text-networking-green mb-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />}
            <video muted={false} className="w-full h-full object-cover">
                <source src={'/videos/Trochu jinej reel.mp4'} type="video/mp4" />
            </video>
        </div>
    )
}