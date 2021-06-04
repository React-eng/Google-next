import HeaderOptions from "./HeaderOptions"
import { DotsVerticalIcon, MapIcon , NewspaperIcon , PhotographIcon, PlayIcon, SearchIcon} from "@heroicons/react/outline"
function HeaderOption() {
    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm lg-text-base lg:justify-start lg:space-x-36 pl-52 border-b">

            <div className="flex space-x-6 ">
               <HeaderOptions Icon={SearchIcon} title="All" selected
               /> 
                <HeaderOptions Icon={PhotographIcon} title="Images"
               />
                <HeaderOptions Icon={PlayIcon} title="Videos" />              
                <HeaderOptions Icon={NewspaperIcon} title="News"
               /> 
                <HeaderOptions Icon={MapIcon} title="Maps" 
               /> 

                <HeaderOptions Icon={DotsVerticalIcon} title="More" 
               /> 




            </div>


            <div className="flex space-x-4">
                <p className="">Settings</p>
                <p className="">Tools</p>
            </div>
        </div>
    )
}

export default HeaderOption
