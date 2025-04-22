import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm py-2 px-4">
      <div className="navbar-start">
        
        <a className="btn btn-ghost text-xl"> BioInjiner </a>
      </div>
      <div className="navbar-center">
        <input type="text" placeholder="Search" className="input input-bordered w-48 md:w-auto" />
      </div>
      <div className="navbar-end">
        <a className="btn btn-ghost text-xl"> C T A </a>
      </div>
    </div>
  )
}

export default Navbar