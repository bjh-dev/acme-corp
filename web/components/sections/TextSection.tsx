import React from 'react'

import SimpleBlockContent from '@/components/SimpleBlockContent'
import { TextSectionProps } from '@/lib/types'

const TextSection = ({ heading, label, text }: TextSectionProps) => {
    return (
        <div>
            <section>
                <div className="bg-zinc-200 py-12 dark:bg-zinc-700">
                    <div className="container">
                        <div className="text-sm font-bold uppercase text-indigo-600 dark:text-indigo-500">
                            {label}
                        </div>
                        <h2 className="text-5xl font-light">{heading}</h2>
                    </div>
                </div>
                <div className="two-columns container prose-lg prose-zinc py-24 prose-blockquote:border-l-2 prose-blockquote:border-indigo-300 prose-ul:list-disc">
                    {text && <SimpleBlockContent blocks={text} />}
                </div>
            </section>
        </div>
    )
}

export default TextSection
