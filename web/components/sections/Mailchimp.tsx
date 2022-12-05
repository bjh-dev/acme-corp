import { MailChimpProps } from '@/lib/types'

const Mailchimp = ({ heading, subtitle, actionUrl }: MailChimpProps) => {
    return (
        <div className="py-24 lg:py-32">
            <div className="container">
                <div className="flex flex-col items-center justify-between space-y-12 lg:flex-row lg:space-x-6">
                    <div className="mr-auto max-w-md">
                        <h2 className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">
                            {heading}
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg text-zinc-800 dark:text-zinc-400">
                            {subtitle}
                        </p>
                    </div>
                    <div className="mr-auto">
                        <form className="sm:flex">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email-address"
                                type="email"
                                autoComplete="email"
                                required
                                className="w-full rounded-md border border-zinc-300 bg-zinc-50 px-5 py-3 placeholder-zinc-400 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-800 sm:max-w-xs"
                                placeholder="Enter your email"
                            />
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-5 text-base font-bold text-zinc-50 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Notify me
                                </button>
                            </div>
                        </form>
                        <p className="mt-3 text-sm text-zinc-800 dark:text-zinc-400">
                            We care about the protection of your data. Read our{' '}
                            <a href="#" className="font-medium underline">
                                Privacy Policy.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mailchimp
