import React from 'react'

const Contact = () => {
    return (
        <div id="contact" className='mt-5 bg-newsletter min-h-[490px] flex lg:justify-end md:justify-end justify-center  items-center'>
            <section className="mt-10 w-[400px]  lg:w-[600px] md:w-[400px] md:mr-16 lg:mr-24">
                <div className="py-8 lg:py-6 px-4 mx-auto max-w-screen-md">
                    <form action="#" className="space-y-6">
                        <div>
                            <label for="email" className="block mb-1 text-sm font-medium text-white dark:text-gray-300">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" required />
                        </div>
                        <div>
                            <label for="subject" className="block mb-1 text-sm font-medium text-white dark:text-gray-300">Subject</label>
                            <input type="text" id="subject" className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label for="message" className="block mb-2 text-sm font-medium text-white dark:text-gray-400">Your message</label>
                            <textarea id="message" rows="3" className="block p-1.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" className="h-[55px] bg-primary hover:bg-orange-600 w-full text-white px-7 font-medium text-xl transition rounded-lg">Send message</button>
                    </form>
                </div>
            </section>
            {/* </div> */} 
        </div>
    )
}

export default Contact
