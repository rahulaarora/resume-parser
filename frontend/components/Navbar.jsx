import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

function Navbar () {
  const { data: session, status } = useSession()
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container-fluid'>
        <span className='navbar-brand mb-0 h1 fs-3'>Resume Parser</span>
        <div>
          <span>
            <Link
              href='/'
              replace
              className='link-light text-decoration-none pe-4'
            >
              Home
            </Link>
          </span>
          <a
            onClick={() => {
              signOut()
            }}
            href='#'
            className='link-light text-decoration-none'
          >
            Sign out ({session?.user?.email})
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
