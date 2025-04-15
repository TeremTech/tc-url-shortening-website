import classnames from "classnames";
import { useState } from "react";

export function ShortenForm({
  error,
  onshorten,
}: {
  error: boolean;
  onshorten: (url: string) => void;
}) {
  const [url, setUrl] = useState("");

  return (
    <form className="grid lg:flex gap-4 lg:p-14 p-8 bg-violet-950 bg-shorten-desktop rounded-xl absolute -top-20 lg:right-32 lg:left-32 right-4 left-4">
      <div className="grow grid gap-2">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className={classnames("input", "input-lg", "w-full", {
            "input-error": error,
            "text-error": error,
          })}
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
        {error && (
          <span className="text-red-300 italic lg:absolute bottom-8">
            Please add a link
          </span>
        )}
      </div>
      <button
        className="btn btn-lg btn-accent hover:bg-cyan-300 text-base-100"
        onClick={() => onshorten(url)}
        type="button"
      >
        Shorten It!
      </button>
    </form>
  );
}
