export default (a, b) => {
  //A is the original B the updated one
  const keysA = Object.keys(a)
  const keysB = Object.keys(b)

  let diffCount = Number()

  // We only need to compare the keys of keysB
  keysB.forEach(key => {
    if (keysA.includes(key)){
      if (
        (a[key] !== b[key]) &&
        !(!a[key] && (b[key] === ''))
      ) {
        diffCount ++
      }
    }
  })

  return diffCount


}
