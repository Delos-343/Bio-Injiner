import React from 'react'

const Navbar = () => {
  return (
    <>    
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl"> BioInjiner </a>
        </div>
        <div className="navbar-center">
          <input type="text" placeholder="Search" className="input input-bordered w-full md:w-auto" />
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://media.licdn.com/dms/image/v2/C4D03AQFEIO5sMr4GXg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1619358803379?e=2147483647&v=beta&t=t-WHecNvAh5HZ7Tw-6oieb7IbnFQtQOnaMHSAqJd_wA" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar