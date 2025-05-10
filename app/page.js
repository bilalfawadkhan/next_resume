import Image from "next/image";

export default function Home() {
  return (
    <div>
  <div className="h-full mt-28">
    <h1 className="text-center borel-regular text-[clamp(3.5rem,10vw,7rem)] " >Hi, I'm BiláL. </h1>
    <h2 className="pt-1 text-center borel-regular text-[clamp(3.5rem,10vw,7rem)]">A Full-Stack Dev.</h2>
    <h2 className="pt-10 text-center borel-regular lg:text-2xl">I'm passionate about developing ideas into reality</h2>  
  </div>  
    <div className="grid grid-cols-1 p-8 gap-x-14 gap-y-52 lg:grid-cols-12 mt-28">
        <div className="group col-span-12 lg:col-span-4 lg:col-start-1 overflow-hidden bg-customPink h-72 lg:h-[32rem] rounded-[3rem] transition duration-500 ease-in-out hover:shadow-xl hover:bg-customPinkDark hover:shadow-customPink  hover:-translate-y-1">
            <div className="flex flex-col items-end h-full ">
                <h4 className="pt-4 pr-6 text-lg">Little Description</h4>
                <h2 className="pb-4 pr-6 text-3xl">Project Name</h2>
                <img src="https://picsum.photos/id/870/200?grayscale&blur=2" className="w-11/12 transition duration-500 ease-in-out grow rounded-r-xl rounded-t-xl group-hover:translate-y-3 z-1"/>
            </div>
        </div>
        <div className="group col-span-12 lg:col-span-8 overflow-hidden bg-customYellow h-72 lg:h-[32rem] rounded-[3rem] transition duration-500 ease-in-out hover:shadow-xl hover:bg-customYellowDark hover:shadow-customYellow hover:-translate-y-1">
            <div className="flex flex-col items-end h-full ">
                <h4 className="pt-4 pr-6 text-lg">Little Description</h4>
                <h2 className="pb-4 pr-6 text-3xl">Project Name</h2>
                <img src="https://picsum.photos/id/870/200?grayscale&blur=2" className="w-11/12 transition duration-500 ease-in-out grow rounded-r-xl rounded-t-xl group-hover:translate-y-3 z-1"/>
            </div>
        </div>
        <div className="group col-span-12 lg:col-span-7 overflow-hidden bg-customTeal h-72 lg:h-[32rem] rounded-[3rem] transition duration-500 ease-in-out hover:shadow-xl hover:bg-customTealDark hover:shadow-customTeal hover:-translate-y-1">
            <div className="flex flex-col items-end h-full ">
                <h4 className="pt-4 pr-6 text-lg">Little Description</h4>
                <h2 className="pb-4 pr-6 text-3xl">Project Name</h2>
                <img src="https://picsum.photos/id/870/200?grayscale&blur=2" className="w-11/12 transition duration-500 ease-in-out grow rounded-r-xl rounded-t-xl group-hover:translate-y-3 z-1"/>
            </div>
        </div>
        <div className="group col-span-12 lg:col-span-5 overflow-hidden bg-customPurple h-72 lg:h-[32rem] rounded-[3rem] transition duration-500 ease-in-out hover:shadow-xl hover:bg-customPurpleDark hover:shadow-customPurple hover:-translate-y-1">
            <div className="flex flex-col items-end h-full ">
                <h4 className="pt-4 pr-6 text-lg">Little Description</h4>
                <h2 className="pb-4 pr-6 text-3xl">Project Name</h2>
                <img src="https://picsum.photos/id/870/200?grayscale&blur=2" className="w-11/12 transition duration-500 ease-in-out grow rounded-r-xl rounded-t-xl group-hover:translate-y-3 z-1"/>
            </div>
        </div>
    </div>
    <div>
        <h1 className="text-center borel-regular text-[clamp(3.5rem,10vw,7rem)] m-24"> In Progress</h1>
        <div className="grid grid-cols-1 p-8 gap-x-14 gap-y-52 lg:grid-cols-12 mt-28">
            <div className="group col-span-12 lg:col-span-6 lg:col-start-1 overflow-hidden bg-customPink h-72 lg:h-[32rem] rounded-[3rem] transition duration-500 ease-in-out hover:shadow-xl hover:bg-customPinkDark hover:shadow-customPink hover:-translate-y-1">
                <div className="flex flex-col items-end h-full ">
                    <h4 className="pt-4 pr-6 text-lg">Little Description</h4>
                    <h2 className="pb-4 pr-6 text-3xl">Project Name</h2>
                    <img src="https://picsum.photos/id/870/200?grayscale&blur=2" className="w-11/12 transition duration-500 ease-in-out grow rounded-r-xl rounded-t-xl group-hover:translate-y-3 z-1"/>
                </div>
            </div>
            <div className="group col-span-12 lg:col-span-6 overflow-hidden bg-customYellow h-72 lg:h-[32rem] rounded-[3rem] transition duration-500 ease-in-out hover:shadow-xl hover:bg-customYellowDark hover:shadow-customYellow hover:-translate-y-1">
                <div className="flex flex-col items-end h-full ">
                    <h4 className="pt-4 pr-6 text-lg">Little Description</h4>
                    <h2 className="pb-4 pr-6 text-3xl">Project Name</h2>
                    <img src="https://picsum.photos/id/870/200?grayscale&blur=2" className="w-11/12 transition duration-500 ease-in-out grow rounded-r-xl rounded-t-xl group-hover:translate-y-3 z-1"/>
                </div>
            </div>
        </div>
    </div>
    </div>
    
  );
}
