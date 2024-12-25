import Image from 'next/image'
import React from 'react'

const ImageSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* First column - large image */}
            <div className="relative aspect-[3/4] md:aspect-[4/5]">
                <Image
                    src="/images/about-img-2.jpg?height=800&width=600"
                    alt="Person working on laptop with coffee"
                    fill
                    className="object-cover rounded-lg"
                />
            </div>

            {/* Second column - stacked images */}
            <div className="space-y-4 ">
                <div className="relative aspect-[15/9]">
                    <Image
                        src="/images/about-img-1.jpg?height=500&width=600"
                        alt="Person at desk with laptop and office supplies"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
                <div className="relative aspect-[15/9]">
                    <Image
                        src="/images/about-img-3.jpg?height=500&width=600"
                        alt="Person in virtual meeting"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
            </div>

            {/* Third column - large image */}
            <div className="relative aspect-[3/4] md:aspect-[4/5]">
                <Image
                    src="/images/about-img-4.jpg?height=800&width=600"
                    alt="Group meeting in modern office"
                    fill
                    className="object-cover rounded-lg"
                />
            </div>
        </div>
    )
}

export default ImageSection