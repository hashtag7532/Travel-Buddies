import React from 'react'
import Image from 'next/image'
import heroPeople from "../public/images/hero-people.png"
import NomadsMap from "../public/images/Nomads Map.png"

function Hero() {
  return (
    <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-col ml-6'>
            <h1 className='text-[64px]'><span className='text-[#FA0303]'>T</span>ravel <span className='text-[#FA0303]'>B</span>uddies</h1>    
            <h3 className='text-[#5A5251] text-[36px] mb-2'>Now travel made Comfortable and Credible...</h3>
            <Image src={heroPeople} width={665} height={472} />
        </div>
        <div>
          <Image src={NomadsMap} width={489} height={331} />
          <h1>Book your ride</h1>
          <div>
          <div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pickup-location" type="text" placeholder="Aa - Enter Pickup"></input>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="drop-location" type="text" placeholder="Aa - Enter Drop" ></input>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Book Later 
      </button>
      <button class="font-bold text-white bg-red-500 hover:bg-red-500 py-2 px-4 focus:outline-none focus:shadow-outline rounded" type="button"  >
        Book Now
      </button>
    </div>
  </form>
</div>
          </div>
        </div>
    </div>
  )
}

export default Hero