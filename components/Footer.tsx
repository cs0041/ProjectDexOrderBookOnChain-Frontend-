import React from 'react'
import { WifiIcon } from '@heroicons/react/24/outline'
import { ChartBarIcon } from '@heroicons/react/24/solid'
type Props = {}
function Footer({}: Props) {
  return (
    <div className="fixed  bottom-0 justify-between bg-[#1c1c28]  text-sm font-light px-10 flex flex-row w-full border-gray-600 border-t-[1px] h-10 items-center z-10">
      <div className="flex flex-row space-x-5 items-center">
        <div className="text-orange-400 animate-pulse pr-5 border-r border-gray-600 flex flex-row space-x-1 items-center">
          <h1>Developer mode</h1>
          <WifiIcon className="h-6 w-6 " />
        </div>
        <div className="hover:opacity-70 cursor-pointer">Support</div>
        <div className="hover:opacity-70 cursor-pointer">Contact us</div>
        <div className="hover:opacity-70 cursor-pointer">Feedback</div>
      </div>
      <div className="flex flex-row space-x-10 items-center">
        <div className="flex flex-row items-center space-x-2">
          <ChartBarIcon className="h-4 w-4 text-green-600" />
          <span>v 0.1.0</span>
        </div>
        <div className="text-green-600 animate-pulse pl-10 border-l-2 border-gray-600">
          POWERED BY 0xPascal
        </div>
      </div>
    </div>
  )
}

export default Footer