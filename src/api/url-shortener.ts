// import axios from "redaxios";

export async function shortenUrl(url: string): Promise<string> {
  // CORS error,  needs to be called on the server
  //   return axios({
  //     method: "post",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     url: "https://cleanuri.com/api/v1/shorten",
  //     data: `url=${encodeURI(url)}`,
  //   });

  return new Promise((resolve) => {
    setTimeout(() => resolve("https://cleanuri.com/wyDn5k"), 200);
  });
}
