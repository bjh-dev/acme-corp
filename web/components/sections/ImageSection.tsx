import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import Image from 'next/image'

import Cta from '@/components/Cta'
import SimpleBlockContent from '@/components/SimpleBlockContent'
import { client } from '@/lib/sanity'
import { ImageSectionProps } from '@/lib/types'

function urlFor(source: SanityImageSource) {
    return imageUrlBuilder(client).image(source)
}
const ImageSection = ({
    heading,
    label,
    text,
    image,
    cta,
}: ImageSectionProps) => {
    if (!image) {
        return null
    }

    const myImage = urlFor(image).width(2000).auto('format').url()

    return (
        <section>
            <div className="relative">
                <div className="relative sm:overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            className="h-full w-full object-cover"
                            src={myImage}
                            fill
                            alt="People working on laptops"
                        />
                        <div className="absolute inset-0 bg-gray-600 mix-blend-multiply" />
                    </div>
                    <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                        <div className="container">
                            <div className=" max-w-lg">
                                <h2 className="font-sans text-sm font-bold uppercase tracking-tight text-primary-600">
                                    <span className="bg-gray-200 px-4 py-2">
                                        {heading}
                                    </span>
                                </h2>
                                <h3 className="mt-6 text-4xl font-bold text-gray-50">
                                    {label}
                                </h3>
                                <div className="py-12 text-gray-50">
                                    {text && (
                                        <SimpleBlockContent blocks={text} />
                                    )}
                                </div>
                                <div>
                                    <Cta {...cta} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImageSection
