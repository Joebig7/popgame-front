export function isNull(str) {
  if (str.trim() === "" || str === null) {
    return true;
  }

  return false;
}
