import React from 'react'

/**
 * A responsive navigation bar with brand, full-width search input, and user/action controls.
 * Props:
 * - onOpen: () => void, callback for opening the sidebar/modal
 */

const Navbar = ({ onOpen }) => {
  return (
    <>    
      <div className="navbar bg-base-100 shadow-sm justify-between items-center px-4 py-2">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl text-blue-300">
            BioInjiner
          </a>
        </div>
        <div className="navbar-center">
          <input type="text" placeholder="Search" className="input input-bordered w-full md:w-auto" />
        </div>
        <div className="navbar-end">
          <div className="form-control mx-5">
            <a className="btn btn-ghost btn-circle text-xl" onClick={onOpen}>
              ⨮
            </a>
          </div>
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box border border-accent-content z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">
                    ✓
                  </span>
                </a>
              </li>
              <li>
                <a>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;