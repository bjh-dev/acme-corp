import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import React from 'react'

import { client } from '@/lib/sanity'
import { FigureProps } from '@/lib/types'
const builder = imageUrlBuilder(client)

const Figure = (props) => {
    const { value } = props
    if (!value.asset) {
        return undefined
    }
    return (
        <>
            <figure>
                <div className="relative h-auto w-auto object-cover">
                    <Image
                        src={builder
                            .image(value.asset)
                            .auto('format')
                            .width(1920)
                            .url()}
                        alt={value.alt}
                        width={1920}
                        height={1080}
                    />
                </div>
                {value.caption && (
                    <figcaption>
                        <div>
                            <div>
                                <p>{value.caption}</p>
                            </div>
                        </div>
                    </figcaption>
                )}
            </figure>
        </>
    )
}

export default Figure
