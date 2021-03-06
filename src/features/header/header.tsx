import React from 'react';

interface FooterProps {
    title: string
}

const Header = ({ title }: FooterProps) => {

    return (
        <footer data-testid="header-1" className="p-4 bg-white rounded-t-sm shadow md:px-6 md:py-8 dark:bg-gray-800 min-w-full align-bottom absolute top-0">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="/" rel="noreferrer" target="_blank" className="flex items-center mb-4 sm:mb-0">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{title}</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
                    <li>
                        <a href="https://github.com/mewan94/react-technical-assessment" target='_blank' rel="noreferrer" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Header