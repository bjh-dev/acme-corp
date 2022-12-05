import React from 'react'

import SimpleBlockContent from '@/components/SimpleBlockContent'
import { TextSectionProps } from '@/lib/types'

const TextSection = ({
    heading,
    label,
    text,
    isMultiColumn,
}: TextSectionProps) => {
    return (
        <section>
            <div className="bg-zinc-200 py-12 dark:bg-zinc-700">
                <div
                    className={`container ${
                        isMultiColumn ? null : 'mx-auto max-w-5xl'
                    }`}
                >
                    <div className="text-sm font-bold uppercase text-indigo-600 dark:text-indigo-500">
                        {label}
                    </div>
                    <h2 className="text-5xl font-light">{heading}</h2>
                </div>
            </div>
            <div
                className={`container ${
                    isMultiColumn ? 'two-columns' : 'mx-auto max-w-5xl'
                } prose-lg prose-zinc py-24 prose-blockquote:border-l-2 prose-blockquote:border-indigo-300 prose-ul:list-disc`}
            >
                {text && <SimpleBlockContent blocks={text} />}
            </div>
        </section>
    )
}

export default TextSection
