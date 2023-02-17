import Link from 'next/link';
function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1 fs-3">Resume Parser</span>
                <span><Link href={"/"} replace className='link-light text-decoration-none'>Home</Link></span>
                <span>SignOut</span>
            </div>
        </nav>
    );
}

export default Navbar;