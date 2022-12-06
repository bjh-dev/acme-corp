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
            <figure
                className={`textsection-figure ${
                    value.caption ? 'rounded-md bg-zinc-200' : '-my-8'
                }`}
            >
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
                        className={`rounded-tl-md ${
                            value.caption ? 'rounded-tr-md' : 'rounded-md'
                        }`}
                    />
                </div>
                {value.caption && (
                    <figcaption className="-mt-8 px-4 py-1 text-sm text-zinc-800">
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
