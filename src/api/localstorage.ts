const localStorageKey = "shortUrls";

export function saveUrl({ url, short }: { url: string; short: string }) {
  const list: { url: string; short: string }[] = JSON.parse(
    localStorage.getItem(localStorageKey) || "[]"
  );
  list.unshift({ url, short });
  localStorage.setItem(localStorageKey, JSON.stringify(list));
  return list;
}

export function loadUrls() {
  return JSON.parse(localStorage.getItem(localStorageKey) || "[]");
}
