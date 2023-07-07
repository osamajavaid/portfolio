import React from 'react'

const DrawerLayout = ({ setIsOpen, isOpen, children }) => {
    return (
        <main
            className={
                " fixed overflow-hidden z-[50000] bg-gray-900/50 backdrop-blur-sm inset-0 transform ease-in" +
                (isOpen
                    ? "transition-opacity opacity-100 duration-10 translate-x-0"
                    : "transition-all delay-200 opacity-0 translate-x-full")
            }
        >
            <section
                className={
                    "w-screen max-w-[260px] right-0 absolute h-screen shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                    (isOpen ? " translate-x-0 " : " translate-x-full ")
                }
            >
                <article className="relative h-screen">
                    {children}
                </article>
            </section>
            <section
                className=" w-screen h-full cursor-pointer "
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </main>
    )
}

export default DrawerLayout