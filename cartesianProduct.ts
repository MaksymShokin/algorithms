const cartesian = (arr1: string[], arr2: string[]) => {
  const newArr = [] as string[][]
  arr1.forEach(elem1=> {
    arr2.forEach(elem2 => {
      newArr.push([elem1, elem2])
    })
  })
  return newArr
}

console.log(cartesian(['blue', 'red'],['L','M']))