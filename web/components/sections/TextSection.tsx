import React from 'react'

import SimpleBlockContent from '@/components/SimpleBlockContent'
import { TextSectionProps } from '@/lib/types'

const TextSection = ({ heading, label, text }: TextSectionProps) => {
    return (
        <div>
            <section>
                <div className="bg-gray-200 py-12 dark:bg-gray-700">
                    <div className="container">
                        <div className="font-sans text-sm font-bold uppercase text-primary-600 dark:text-primary-500">
                            {label}
                        </div>
                        <h2 className="font-sans text-5xl">{heading}</h2>
                    </div>
                </div>
                <div className="two-columns container prose-lg prose-gray py-24 prose-blockquote:border-l-2 prose-blockquote:border-primary-300 prose-ul:list-disc">
                    {text && <SimpleBlockContent blocks={text} />}
                </div>
            </section>
        </div>
    )
}

export default TextSection
