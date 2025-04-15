import { FaBars } from "react-icons/fa";

export function MobileNavigation() {
  return (
    <div className="dropdown dropdown-left">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost lg:hidden text-2xl text-gray-400"
      >
        <FaBars />{" "}
      </div>
      <ul
        tabIndex={0}
        className="menu menu-lg dropdown-content bg-violet-950 text-base-100 font-bold rounded-box z-1 mt-12 w-64 p-8 gap-4"
      >
        <li>
          <a className="justify-center" href="#">
            Features
          </a>
        </li>
        <li>
          <a className="justify-center" href="#">
            Pricing
          </a>
        </li>
        <li className="pb-4">
          <a className="justify-center" href="#">
            Resources
          </a>
        </li>
        <li className="border-t border-gray-600 pt-4">
          <a className="justify-center" href="#">
            Login
          </a>
        </li>
        <li>
          <a
            href="#"
            className="btn btn-accent rounded-2xl hover:bg-cyan-300 text-base-100"
          >
            Sign Up
          </a>
        </li>
      </ul>
    </div>
  );
}
