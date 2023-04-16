'use client'
import { useState } from 'react'
import Head from 'next/head'
import { QRCodeSVG } from 'qrcode.react'
import html2canvas from 'html2canvas'
import Notification from '@/components/notification'
import { Button, Tooltip } from 'flowbite-react'

import { ArrowDownIcon, EyeIcon, TrashIcon } from '@heroicons/react/24/solid'

const textPlaceholder = `Enter your text here, if you want to generate a lot of qrcodes, you can use a line break to separate them. \n
Example: \n\ntext\nother text \nanother text`

export default function Home() {
  const [input, setInput] = useState('')
  const [notification, setNotification] = useState({ message: '', type: '' })
  const [dataToRender, setDataToRender] = useState([])
  const [showText, setShowText] = useState(true)

  const downloadQRCode = () => {
    const qrCode = document.getElementById('qrcode')
    html2canvas(qrCode)
      .then(canvas => {
        const link = document.createElement('a')
        link.download = `${dataToRender[0]}.png`
        link.href = canvas.toDataURL()
        link.click()
      })
  }

  const handleSubmission = () => {
    if (input === '') {
      setNotification({ message: 'Please enter some text', type: 'error' })
    } else {
      const data = input.trim().split('\n')
      setDataToRender(data)
      setNotification({ message: 'QR Code generated successfully', type: 'success' })
      setInput('')
    }
  }

  return (
    <>
      <Head>
        <title>23hub - Qrcode Generator</title>
      </Head>
      <Notification notification={notification} setNotification={setNotification} />
      <header className='min-h-screen pt-10 md:pt-20'>

        <div className='w-full bg-center m-h-full flex flex-col md:flex-row' >

          <div className='flex flex-col items-center w-full md:w-1/2 aling-top'>
            <textarea className='w-3/4 h-48 lg:h-96 p-4 text-xl text-zinc-100 bg-zinc-800 border
            border-zinc-300 rounded-lg focus:outline-none focus:border-blue-500 placeholder-zinc-400 placeholder-opacity-50'
              placeholder={textPlaceholder}
              onChange={e => setInput(e.target.value)}
              onSubmit={handleSubmission}
              value={input}
            />
            <Button onClick={handleSubmission} className='w-3/4 mt-5'>
              Generate QR Code
            </Button>
          </div>


          {
            dataToRender.length > 0 &&
            <div className='flex flex-row w-full md:w-1/2 mb-12 mt-12 md:mt-0 justify-center'>

              <div className='w-full p-4 md:p-0 lg:w-3/4 text-xl'
              >
                <div className='flex flex-wrap w-full'>
                  <div id='qrcode' className='flex flex-wrap w-ful gap-4 justify-center md:justify-start' >
                    {
                      dataToRender.length > 0 && dataToRender.map((data, index) => {
                        return (

                          <div key={index} className='flex flex-col items-center justify-center p-2 bg-white rounded-lg'>
                            <QRCodeSVG value={data} level='Q' />
                            {showText && <p className='text-black pt-2' >{data}</p>}
                          </div>
                        )
                      })
                    }
                  </div>
                </div>

              </div>
            </div>

          }

          {
            dataToRender.length > 0 &&

            <div className='flex w-full justify-center md:flex-col md:w-12 gap-5 fixed bottom-2 md:right-6 md:bottom-36 lg:right-10 lg:top-32  md:justify-start'>

              <Tooltip content="download" trigger="hover" arrow={true}>
                <Button onClick={downloadQRCode} >
                  <ArrowDownIcon className="h-6 w-6 text-white" />
                </Button>
              </Tooltip>

              <Tooltip content="show legend" trigger="hover">
                <Button
                  onClick={() => setShowText(!showText)}>
                  <EyeIcon className="h-6 w-6 text-white" />
                </Button>
              </Tooltip>

              <Tooltip content="clean display" trigger="hover">
                <Button
                  onClick={() => setDataToRender([])}>
                  <TrashIcon className="h-6 w-6 text-white" />
                </Button>
              </Tooltip>

            </div>

          }

        </div>
      </header >
    </>
  )
}