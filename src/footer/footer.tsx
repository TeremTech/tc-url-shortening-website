import { Company } from "./company";
import { Features } from "./features";
import { BusinessName } from "./name";
import { Resources } from "./resources";
import { SocialIcons } from "./social-icons";

export function Footer() {
  return (
    <footer className="flex lg:flex-row flex-col bg-indigo-950 text-neutral-content w-full lg:justify-between lg:px-40 py-12">
      <div>
        <BusinessName></BusinessName>
      </div>
      <div className="flex lg:flex-row flex-col xl:gap-16 lg:gap-8">
        <Features></Features>
        <Resources></Resources>
        <Company></Company>
      </div>
      <SocialIcons></SocialIcons>
    </footer>
  );
}
