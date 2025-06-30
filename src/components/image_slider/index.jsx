import React, { useEffect, useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './style.css'

export default function Image_slider(url, limit = 5, page = 1) {
    // State to store fetched images
    const [images, setimages] = useState([])
    // State to track current slide index
    const [currentslide, setcurrentslide] = useState(0);
    // State to store error messages
    const [error, seterror] = useState(null)
    // State for loading indicator
    const [loading, setloading] = useState(false)

    
    async function fetch_url(geturl) {
        try {
            setloading(true)

            const response = await fetch(`${geturl}?page=${page}&limit=${limit}`)
            const data = await response.json()

            if (data) {
                setimages(data)
                setloading(false)
            }

        } catch (e) {
            seterror(e.message)
            setloading(false)
        }
    }

    // Fetch images when URL changes
    useEffect(() => {
        if (url !== '') fetch_url(url)
    }, [url])

    // Loading state display
    if (loading) { return <div>Please wait its loading</div> }
    // Error state display
    if (error !== null) { return <div>there is an error {error}</div> }

    // Main component render
    return (
        <div className="container">
            <BsArrowLeftCircleFill className="arrow arrow-left" />
            {images && images.length ? images.map(imageitem => (
                <img key={imageitem.id} src={imageitem.downloads} alt={imageitem.downloads} />
            )) : null}

            <BsArrowRightCircleFill />
            {<span className="circle-indicators">
                {images && images.length ? images.map(
                    (_, index) => (
                        <button key={index} className="current-indicator"></button>
                    )
                ) : null}
            </span>}
        </div>
    )
}