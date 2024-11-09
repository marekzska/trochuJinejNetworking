"use client"
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

type NetworkingVideoProps = {
    slug: string
}

export const NetworkingVideo = ({ slug }: NetworkingVideoProps) => {
    const videos = {
        'halloween-networking': { video: '/videos/Trochu jinej reel.mp4', thumbnail: '/images/firstImage.png' },
        'vanoce-networking': { video: '/videos/vanoce-nw-pozvanka.mp4', thumbnail: '/images/christmas-thumbnail.png' },
    }
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
        <div className="relative w-1/2 aspect-[2/3] overflow-hidden rounded-3xl cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
            {!isPlaying && <FontAwesomeIcon icon={faYoutube} className="h-20 text-networking-green mb-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />}
            <video muted={false} className="h-full w-full object-cover" poster={videos[slug as keyof typeof videos].thumbnail ? videos[slug as keyof typeof videos].thumbnail : undefined}>
                <source src={videos[slug as keyof typeof videos].video} type="video/mp4" />
            </video>
        </div>
    )
}