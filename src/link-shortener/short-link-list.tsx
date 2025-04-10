import { ShortLinkListEntry } from "./short-link-list-entry";

export function ShortLinkList({
  urls,
}: {
  urls: { url: string; short: string }[];
}) {
  return (
    <section className="pt-24 grid gap-4">
      {urls.map((line) => (
        <div className="bg-base-100 rounded-xl p-4 flex justify-between">
          <ShortLinkListEntry
            url={line.url}
            short={line.short}
          ></ShortLinkListEntry>
        </div>
      ))}
    </section>
  );
}
