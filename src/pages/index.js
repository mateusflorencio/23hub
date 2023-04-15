'use client'
import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Head>
        <title>23hub - Build your new Software</title>
      </Head>
      <header className='h-screen'>
        <nav className='shadow bg-zinc-900'>
          <div className='container px-6 py-4 mx-auto'>
            <div className='lg:flex lg:items-center lg:justify-between'>
              <div className='flex items-center justify-between'>
                <a className='mx-auto text-2xl font-bold text-white lg:text-3xl  cursor-pointer hover:text-blue-400' href='#'>
                  23hub
                </a>

                <div className='flex lg:hidden'>
                  <button
                    onClick={() => { setIsOpen(!isOpen) }}
                    type='button' className='text-zinc-200 hover:text-zinc-400 focus:outline-none focus:text-zinc-400' aria-label='toggle menu'>
                    {
                      !isOpen ? (
                        <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M4 8h16M4 16h16' />
                        </svg>
                      ) :
                        <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                        </svg>
                    }


                  </button>
                </div>
              </div>

              <div className={
                isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-zinc-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0'}>
                <div className='-mx-4 lg:flex lg:items-center'>
                  <a href='#' className='block mx-4 capitalize text-zinc-200 hover:text-blue-400'>Qrcode Generator</a>
                  <a href='#' className='block mx-4 capitalize text-zinc-200 hover:text-blue-400'>Barcode Generator</a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className='w-full bg-center h-full' >
          <div className='flex items-center justify-center w-full h-full bg-zinc-900/40'>
            <div className='text-center pb-32'>
              <h1 className='text-3xl font-semibold text-white lg:text-4xl'>Build your new <span className='text-blue-400'>Software</span>.</h1>
            </div>
          </div>
        </div>
      </header >
    </>
  )
}
