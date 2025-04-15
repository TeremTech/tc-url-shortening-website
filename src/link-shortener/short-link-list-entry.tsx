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
      <span className="border-b border-gray-300 p-4 lg:border-0 lg:py-0">
        {url}
      </span>
      <div className="flex flex-col lg:flex-row gap-2 px-4 pb-4 lg:p-0 ">
        <span className="text-accent ">{short}</span>
        <button
          type="button"
          className={classNames(
            "btn",
            "btn-sm",
            "w-full",
            "lg:w-fit",
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
