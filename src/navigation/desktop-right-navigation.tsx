export function DesktopRightNavigation() {
  return (
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
  );
}
