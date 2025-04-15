import { ShortLinkListEntry } from "./short-link-list-entry";

export function ShortLinkList({
  urls,
}: {
  urls: { url: string; short: string }[];
}) {
  return (
    <section className="pt-36 lg:pt-24 grid gap-4">
      {urls.map((line) => (
        <div
          key={line.url}
          className="flex lg:flex-row flex-col gap-4 bg-base-100 rounded-xl lg:p-4 justify-between w-full"
        >
          <ShortLinkListEntry
            url={line.url}
            short={line.short}
          ></ShortLinkListEntry>
        </div>
      ))}
    </section>
  );
}
