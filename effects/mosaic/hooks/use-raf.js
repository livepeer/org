import RAF from "../js/raf"

let raf

const useRAF = () => {
  if (!raf) {
    raf = new RAF()
  }
  return raf
}

export default useRAF
