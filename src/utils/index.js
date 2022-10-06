export function capitalizeStr(str) {
  const noDash = str.replace(/-/g, " ");
  return noDash[0].toUpperCase() + noDash.slice(1).toLowerCase();
}

export function makeUniqueArr(array) {
  return array.filter((v, i, a) => a.indexOf(v) === i);
}

export function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
