import React from 'react'
import { MdSearch } from 'react-icons/md'
import { BiUser } from 'react-icons/bi'
const Navbar = () => {
    return (
        <nav className="navbar navbar-light">
            <div className="container-fluid mx-3">
                <a className="navbar-brand" href="#">
                    <h3 className="fw-bold fs-2">AriBlog</h3>
                </a>
                <div>
                    <MdSearch className="icon mx-3" />
                    <BiUser className="icon" />
                </div>
            </div>
        </nav>
    )
}
export default Navbar
