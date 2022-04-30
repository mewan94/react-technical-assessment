import React from "react";

const UserFormLoading = () => {

    return (
        <div data-testid="user-form-1" className="flex flex-col items-center justify-center mb-20">
            <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                <div className={`font-medium self-center text-xl sm:text-2xl uppercase text-gray-800 text-center`}>Please Wait...</div>
            </div>
        </div>
    )

}

export { UserFormLoading }