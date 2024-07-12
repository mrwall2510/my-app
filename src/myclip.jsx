import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

const clip = [
    {
        "title": "My clip",
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "url": "https://youtu.be/abPmZCZZrFA?list=RDabPmZCZZrFA"
    },
    {
        "title": "My clip 1",
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "url": "https://youtu.be/_E-7A81Ac8U?list=RDabPmZCZZrFA"
    },
    {
        "title": "My clip 2",
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "url": "https://youtu.be/ukHK1GVyr0I?list=RDabPmZCZZrFA"
    },
    {
        "title": "My clip 3",
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        "url": "https://youtu.be/vpRi8S6uXAg?list=RDabPmZCZZrFA"
    },
    {
        "title": "My clip 4",
        "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        "url": "https://youtu.be/JAZZn6Bue0c?list=RDabPmZCZZrFA"
    }
]

const video = () => {
    const convertToEmbedUrl = (url) => url.replace("youtu.be/", "youtube.com/embed/").split('?')[0];
    return (
        <div className='pt-5 container mx-auto text-center'>
            <h1 className='font-bold text-3xl text-blue-800'>My Clip</h1>
            <div className="mt-5 flex justify-center">
                <iframe
                    width="900"
                    height="500"
                    src={convertToEmbedUrl(clip[0].url)}
                    title={clip[0].title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-10">
                {clip.slice(1, 5).map((video, index) => (
                    <div key={index} className="p-4">
                        <iframe
                            width="100%"
                            height="250"
                            src={convertToEmbedUrl(video.url)}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <div className="flex items-center justify-between mt-2">
                            <h2 className="font-bold text-3xl text-blue-800">{video.title}</h2>
                            <div className="flex items-center">
                                {[...Array(3)].map((_, i) => (
                                    <StarIcon key={i} className="size-7 text-yellow-500" />
                                ))}
                            </div>
                        </div>
                        <p className="text-sm font-bold mt-1 text-start">{video.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default video