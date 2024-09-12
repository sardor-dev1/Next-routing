"use client"
import Image from "next/image";
import HomeImg from "../../assets/graddes-4ZmRoIabYIY-unsplash.jpg"

const page = () => {

  return (
    <>
      <div className='container'>
        <h1 className="text-[28px] py-10">Home page</h1>
        <p className="text-[18px] font-[500]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className="flex items-center justify-center py-10">
          <Image width={700} src={HomeImg} alt="Home" />
        </div>
        
        <div className="grid grid-cols-2">
        </div>

      </div>
    </>
  )
}

export default page