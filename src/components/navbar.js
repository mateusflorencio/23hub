import Link from 'next/link'
import { Navbar } from 'flowbite-react'

export default function NavbarComponent() {
  return (
    <Navbar className="bg-zinc-800">
      <Navbar.Brand className='cursor-pointer' >
        <Link href='/' className="self-center whitespace-nowrap text-xl font-semibold text-white">
          23hub.
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle className='hover:bg-blue-700 text-zinc-300' />
      <Navbar.Collapse >
        <Navbar.Link className='text-zinc-300 hover:text-zinc-800'>
          <Link href='/qr-code-generator'>
            Qrcode Generator
          </Link>
        </Navbar.Link>
        <Navbar.Link className='text-zinc-300 hover:text-zinc-800'>
          <Link href='/barcode-generator'>
            Barcode Generator
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}