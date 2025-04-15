import { useEffect, useState } from "react";
import "./App.css";
import { Navigation } from "./navigation";
import { GetStarted, WorkingImage } from "./banner";
import { ShortenForm, ShortLinkList } from "./link-shortener";
import { shortenUrl, loadUrls, saveUrl } from "./api";
import { Banner, CardSteps } from "./advanced-statistics";
import { BoostYourLinks } from "./boost-your-links";
import { Footer } from "./footer";

function App() {
  const [hasError, setHasError] = useState(false);
  const [urls, setUrls] = useState<{ url: string; short: string }[]>([]);

  useEffect(() => {
    setUrls(loadUrls());
  }, []);

  const onshorten = (url: string) => {
    if (!url) {
      setHasError(true);
      return;
    } else {
      setHasError(false);
      shortenUrl(url).then((short: string) => {
        const newList = saveUrl({ url, short });
        setUrls(newList);
      });
    }
  };

  return (
    <>
      <main className="lg:px-32 py-8">
        <Navigation />
        <div className="flex py-16">
          <GetStarted />
          <WorkingImage />
        </div>
      </main>
      <div className="bg-indigo-50 px-32 relative w-full pb-36">
        <ShortenForm error={hasError} onshorten={onshorten} />
        <ShortLinkList urls={urls} />
        <Banner></Banner>
        <CardSteps></CardSteps>
      </div>
      <BoostYourLinks></BoostYourLinks>
      <Footer></Footer>
    </>
  );
}

export default App;
