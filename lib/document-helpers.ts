/**
 *
 * Problem: `offsetLeft` only returns offset to parent element
 * Solution: Iterate through all parent elements and sum all offsets
 */
const getPageOffsetLeft = (elem: HTMLElement | null) => {
  if (!elem) return
  let distance = 0
  do {
    distance += elem.offsetLeft
    elem = elem.offsetParent as HTMLElement | null
  } while (elem)
  return distance < 0 ? 0 : distance
}

export { getPageOffsetLeft }
