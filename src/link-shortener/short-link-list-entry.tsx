import classNames from "classnames";
import { useState } from "react";

export function ShortLinkListEntry({
  url,
  short,
}: {
  url: string;
  short: string;
}) {
  const [copyStatus, setCopyStatus] = useState(false);
  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 3000);
  };

  return (
    <>
      <span>{url}</span>
      <div className="flex gap-4">
        <span className="text-accent">{short}</span>
        <button
          type="button"
          className={classNames(
            "btn",
            "w-20",
            "btn-sm",
            { "btn-accent": !copyStatus },
            { "btn-info": copyStatus }
          )}
          onClick={() => copyToClipboard(short)}
        >
          {copyStatus ? "Copied!" : "Copy"}
        </button>
      </div>
    </>
  );
}
