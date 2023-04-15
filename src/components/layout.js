import Navbar from './navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className='bg-black'>
        {children}
      </main>
    </>
  )
}