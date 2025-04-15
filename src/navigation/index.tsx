export function Navigation() {
  return (
    <div className="navbar bg-base-100 px-0 w-full">
      <div className="navbar-start justify-between flex lg:w-24 w-full">
        <p className="text-2xl font-bold">Shortly</p>
        <div className="dropdown dropdown-left">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content bg-secondary text-base-100 text-bold rounded-box z-1 mt-3 w-52 p-2 gap-4"
          >
            <li>
              <a className="justify-center">Features</a>
            </li>
            <li>
              <a className="justify-center">Pricing</a>
            </li>
            <li>
              <a className="justify-center">Resources</a>
            </li>
            <li>
              <a className="justify-center">Login</a>
            </li>
            <li>
              <a className="btn btn-accent rounded-2xl btn-sm hover:bg-cyan-300 text-base-100">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="hover:text-black font-bold text-gray-500 hover:bg-base-100">
              Features
            </a>
          </li>
          <li>
            <a className="hover:text-black font-bold text-gray-500 hover:bg-base-100">
              Pricing
            </a>
          </li>
          <li>
            <a className="hover:text-black font-bold text-gray-500 hover:bg-base-100">
              Resources
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex lg:grow">
        <ul className="menu menu-horizontal gap-4">
          <li>
            <a className="hover:text-black font-bold text-gray-500 hover:bg-base-100">
              Login
            </a>
          </li>
          <li>
            <a className="btn btn-accent rounded-2xl btn-sm hover:bg-cyan-300 text-base-100">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
