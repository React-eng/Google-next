import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon,  XIcon } from "@heroicons/react/solid"
import {SearchIcon} from "@heroicons/react/outline"
import Avatar from "./Avatar";
import HeaderOption from "./HeaderOption"
function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);


    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if(!term) return;

        router.push(`search?term=${term}`)
    }
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
            <Image src='https://www.droid-life.com/wp-content/uploads/2014/01/google-logo-flat-new.jpg'
            height={50}
            width={120}
            onClick={() => router.push("/")}
            className="cursor-pointer"           
            />

            <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                <input ref={searchInputRef}  type= "text" className=" flex-grow w-full focus-outline-none"/>
            <XIcon className="h-7 w-7 sm:mr-3 curson-pointer transition duration-100 transform hover:scale-125" 
            onClick={() => (searchInputRef.current.value= "")}/>
            <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2  pl-4 bordeer-gray-300"/>
            <SearchIcon  className="h-6 hidden sm:inline-flex text-blue-400 "/>
            <button hidden type='submit' onClick={search} >Search</button>
            </form>
            <Avatar className="ml-auto" url='data:image/jpeg;base64,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'/>
            </div>
            <HeaderOption/>
        </header>
    )
}

export default Header
