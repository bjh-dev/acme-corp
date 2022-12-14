import { MailChimpProps } from '@/lib/types'

const Mailchimp = ({ heading, subtitle, actionUrl }: MailChimpProps) => {
    return (
        <div className="py-24 lg:py-32">
            <div className="container">
                <div className="flex flex-col items-center justify-between space-y-12 lg:flex-row lg:space-x-6">
                    <div className="mr-auto max-w-md">
                        <h2 className="font-sans text-3xl font-bold tracking-tight text-primary-600 sm:text-4xl">
                            {heading}
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg text-gray-800 dark:text-gray-400">
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
                                className="w-full rounded-md border border-gray-300 bg-gray-50 px-5 py-3 placeholder-gray-400 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 sm:max-w-xs"
                                placeholder="Enter your email"
                            />
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 py-3 px-5 text-base font-bold text-gray-50 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                                >
                                    Notify me
                                </button>
                            </div>
                        </form>
                        <p className="mt-3 text-sm text-gray-800 dark:text-gray-400">
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
