'use client'
import { useState } from 'react'
import Head from 'next/head'
import Barcode from 'react-barcode'
import html2canvas from 'html2canvas'
import Notification from '@/components/notification'
import { Button, Label, Tooltip } from 'flowbite-react'

import { ArrowDownIcon, EyeSlashIcon, TrashIcon, PlusIcon, MinusIcon, EyeIcon } from '@heroicons/react/24/solid'

const textPlaceholder = `Enter your code here, if you want to generate a lot of qrcodes, you can use a line break to separate them. \n
Example: \n\ncode\nother code \nanother code`

const typeCodeObj = {
  ean8: { 'value': 'ean8' },
  ean13: { 'value': 'ean13' },
  code39: { 'value': 'code39' },
  code128: { 'value': 'code128' },
}

export default function Home() {
  const [input, setInput] = useState('')
  const [notification, setNotification] = useState({ message: '', type: '' })
  const [dataToRender, setDataToRender] = useState([])
  const [showText, setShowText] = useState(true)

  const [typeCode, setTypeCode] = useState('code128')
  const [heightCode, setHeight] = useState(100)
  const [fontSizeCode, setFontSizeCode] = useState(20)
  const [textPosition, setTextPosition] = useState('bottom')
  const [widthCode, setWidthCode] = useState(2)

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
        <title>23hub - BarCode Generator</title>
      </Head>
      <Notification notification={notification} setNotification={setNotification} />
      <header className='min-h-screen pt-10 md:pt-20'>



        <div className='w-full bg-center m-h-full flex flex-col md:flex-row' >
          {
            !dataToRender.length > 0 ?
              <div className='flex flex-col md:flex-row md:w-full'>

                <div className='flex flex-row w-full md:w-1/2 mb-12 mt-12 md:mt-0 justify-center'>


                  <form className="flex flex-col gap-4 bg-zinc-800 p-4 rounded-lg t-white w-3/4 md:w-full md:ml-20">

                    <h2 className='text-2xl text-zinc-100'>BarCode Generator</h2>

                    <div>
                      <div className="mb-2 block">
                        <Label
                          className='text-zinc-100'
                          htmlFor="typeCodes"
                          value="Choice type code"
                        />

                        <label className='text-blue-500 pl-4 text-sm font-medium'>
                          {typeCode.toLocaleUpperCase()}
                        </label>
                      </div>
                      <Button.Group id='typeCodes'>
                        {
                          Object.keys(typeCodeObj).map((key) => {

                            return (
                              <Button key={typeCodeObj[key].value} color='gray' onClick={() => setTypeCode(typeCodeObj[key].value)}
                                className='w-14 md:w-20'
                              >
                                <span className='text-xs md:text-md uppercase'>{typeCodeObj[key].value}</span>
                              </Button>

                            )
                          })
                        }
                      </Button.Group>



                    </div>

                    <div>
                      <div className="mb-2 block">
                        <Label
                          className='text-zinc-100'
                          htmlFor="typeCodes"
                          value="Code height"
                        />
                      </div>
                      <Button.Group id='typeCodes'>
                        <Button color="gray"
                          onClick={() => heightCode > 1 && setHeight(heightCode - 4)}
                        >
                          <MinusIcon className="h-5 w-5 text-blue" />
                        </Button>
                        <Button color="gray" className='w-20'>
                          {heightCode}
                        </Button>
                        <Button color="gray"
                          onClick={() => setHeight(heightCode + 4)}
                        >
                          <PlusIcon className="h-5 w-5 text-blue" />
                        </Button>
                      </Button.Group>
                    </div>

                    <div>
                      <div className="mb-2 block">
                        <Label
                          className='text-zinc-100'
                          htmlFor="typeCodes"
                          value="Code width"
                        />
                      </div>
                      <Button.Group id='typeCodes'>
                        <Button color="gray"
                          onClick={() => widthCode > 1 && setWidthCode(widthCode - 1)}
                        >
                          <MinusIcon className="h-5 w-5 text-blue" />
                        </Button>
                        <Button color="gray" className='w-20'>
                          {widthCode}
                        </Button>
                        <Button color="gray"
                          onClick={() => setWidthCode(widthCode + 1)}
                        >
                          <PlusIcon className="h-5 w-5 text-blue" />
                        </Button>
                      </Button.Group>
                    </div>

                    <div>
                      <div className="mb-2 block">
                        <Label
                          className='text-zinc-100'
                          htmlFor="typeCodes"
                          value="Font size code"
                        />
                      </div>
                      <Button.Group id='typeCodes'>
                        <Button color="gray"
                          onClick={() => fontSizeCode > 1 && setFontSizeCode(fontSizeCode - 2)}
                        >
                          <MinusIcon className="h-5 w-5 text-blue" />
                        </Button>
                        <Button color="gray" className='w-20'>
                          {fontSizeCode}
                        </Button>
                        <Button color="gray"
                          onClick={() => setFontSizeCode(fontSizeCode + 2)}
                        >
                          <PlusIcon className="h-5 w-5 text-blue" />
                        </Button>
                      </Button.Group>
                    </div>

                    <div>
                      <div className="mb-2 block">
                        <Label
                          className='text-zinc-100'
                          htmlFor="typeCodes"
                          value="Text Position"
                        />

                        <label className='text-blue-500 pl-4 text-sm font-medium'>
                          {textPosition.toLocaleUpperCase()}
                        </label>
                      </div>
                      <Button.Group id='typeCodes'>
                        <Button color="gray" className='' onClick={() => setTextPosition('bottom')}>
                          <span className='text-xs md:text-md uppercase'>Bottom</span>
                        </Button>
                        <Button color="gray" className='' onClick={() => setTextPosition('top')}>
                          <span className='text-xs md:text-md uppercase'> Top</span>
                        </Button>
                        <Button color="gray" className='' onClick={() => { setTextPosition('no Show'); setShowText(false) }}>
                          <EyeSlashIcon className="w-4 text-blue" />
                        </Button>
                      </Button.Group>
                    </div>

                  </form>

                </div>

                {/* input */}
                <div className='flex flex-col items-center w-full md:w-1/2 aling-top'>
                  <textarea className='w-3/4 h-48 lg:h-96 p-4 text-xl text-zinc-100 bg-zinc-800 border
            border-zinc-300 rounded-lg focus:outline-none focus:border-blue-500 placeholder-zinc-400 placeholder-opacity-50'
                    placeholder={textPlaceholder}
                    onChange={e => setInput(e.target.value)}
                    onSubmit={handleSubmission}
                    value={input}
                  />
                  <Button onClick={handleSubmission} className='w-3/4 mt-5 mb-12'>
                    Generate QR Code
                  </Button>
                </div>

              </div>
              : <div className='flex w-full mb-12 mt-12 justify-center'>

                <div id='qrcode' className='flex justify-center flex-wrap gap-5'>
                  {
                    dataToRender.length > 0 && dataToRender.map((data, index) => {
                      return (

                        <div key={index} className='flex flex-col items-center justify-center p-1 bg-white rounded-lg'>
                          <Barcode value={data}
                            displayValue={showText}
                            fontSize={fontSizeCode}
                            height={heightCode}
                            width={widthCode}
                            textPosition={textPosition}
                          />
                        </div>
                      )
                    })
                  }
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
                  {
                    !showText ?
                      <EyeIcon className="h-6 w-6 text-white" />
                      : <EyeSlashIcon className="h-5 w-5 text-blue" />
                  }
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