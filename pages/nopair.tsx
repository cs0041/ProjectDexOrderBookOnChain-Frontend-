import Router from 'next/router'
import React from 'react'

type Props = {}

function Nopair({}: Props) {
  return (
    <div className='flex flex-col justify-center items-center mt-20 '>
        <h1 className='text-9xl font-semibold text-red-500'>404</h1>
        <h1 className='text-3xl font-semibold text-red-500 mb-10'>Pair not Found</h1>
        <h1 className='text-3xl font-semibold text-red-500 mb-10'>The pair you're looking for doesn't exist </h1>
        <p className='text-base mb-10'>Sorry about that !!! But don't worry, you can create your own pair token</p>
        <div className='flex flex-row space-x-10'>
            <button 
             onClick={() => {
              Router.push(
                '/'
              )
            }}
            className='ButtonHover py-3'>
                Back to homepage
            </button>
            <button 
            onClick={() => {
              Router.push(
                '/createpair'
              )
            }}
            className='ButtonHover py-3'>
                CreatePair
            </button>
        </div>
    </div>
  )
}

export default Nopair