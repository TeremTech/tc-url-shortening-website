import { Company } from "./company";
import { Features } from "./features";
import { BusinessName } from "./name";
import { Resources } from "./resources";
import { SocialIcons } from "./social-icons";

export function Footer() {
  return (
    <footer className="bg-indigo-950 text-neutral-content flex w-full justify-between px-40 py-12">
      <div>
        <BusinessName></BusinessName>
      </div>
      <div className="flex xl:gap-16 lg:gap-8">
        <Features></Features>
        <Resources></Resources>
        <Company></Company>
      </div>
      <SocialIcons></SocialIcons>
    </footer>
  );
}
