export function isInRoute(
  routerPathname: string,
  candidatePathname: string,
  originURL = "https://livepeer.org/"
) {
  let candidateUrl: URL | undefined = undefined;

  try {
    // Try if it's a full url
    candidateUrl = new URL(candidatePathname);
  } catch (error) {
    // do nothing
  }

  try {
    if (!candidateUrl) {
      // create internal url
      candidateUrl = new URL(candidatePathname, originURL);
    }
    const realUrl = new URL(routerPathname, originURL);

    if (realUrl.hostname !== candidateUrl.hostname) return false;

    const realParts = realUrl.pathname.split("/");
    const candidateParts = candidateUrl.pathname.split("/");
    return candidateParts.every((part, i) => part === realParts[i]);
  } catch (error) {
    return false;
  }
}
