import { MobileNavigation } from "./mobile-navigation";
import { DesktopCenterNavigation } from "./desktop-center-navigation";
import { DesktopRightNavigation } from "./desktop-right-navigation";

export function Navigation() {
  return (
    <div className="navbar bg-base-100 lg:px-0 w-full">
      <div className="navbar-start justify-between flex lg:w-24 w-full">
        <p className="text-3xl font-bold">Shortly</p>
        <MobileNavigation />
      </div>
      <div className="navbar-center hidden lg:flex">
        <DesktopCenterNavigation />
      </div>
      <div className="navbar-end hidden lg:flex lg:grow">
        <DesktopRightNavigation />
      </div>
    </div>
  );
}
