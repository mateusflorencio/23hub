import Head from 'next/head'

export default function Home() {

  return (
    <>
      <Head>
        <title>23hub - Build your new Software</title>
      </Head>
      <header className='h-screen'>
        <div className='w-full bg-center h-full' >
          <div className='flex items-center justify-center w-full h-full'>
            <div className='text-center pb-32'>
              <h1 className='text-3xl font-semibold text-white lg:text-4xl'>Build your new <span className='text-blue-400'>Software</span>.</h1>
            </div>
          </div>
        </div>
      </header >
    </>
  )
}
