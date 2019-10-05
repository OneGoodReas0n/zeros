const defaultFactorial = (num) => {
  const result = [];
  for (let j = 1; j <= num; j++) {
    j % 2 === 0 | j % 5 === 0 ? result.push(j) : null
  }
  return result;
}

const unusualFactorial = (num) => {
  const result = [];
  if (num % 2 === 0) {
    for (let i = 2; i <= num; i = i + 2) {
      i % 2 === 0 | i % 5 === 0 ? result.push(i) : null
    }
  }
  else {
    for (i = 1; i <= num; i = i + 2) {
      i % 5 === 0 ? result.push(i) : null
    }
  }
  return result;
}

const devidedBy5 = (num, counter) => {
  if (num % 5 === 0) {
    num = num / 5;
    counter++;
    return devidedBy5(num, counter)
  }
  return counter;
}

const getArraySimpleFives = (array) => {
  let arrayOfFives = [];
  for (let i = 0; i < array.length; i++) {
    const gradeOfFive = devidedBy5(array[i], 0)
    if (gradeOfFive > 1) {
      for (let j = 0; j < gradeOfFive; j++) {
        arrayOfFives.push(5);
      }
    }
    else {
      arrayOfFives.push(array[i]);
    }
  }
  return arrayOfFives;
}

function zeros(expr) {
  const elemsArray = String(expr).split('*')
  let result = [];
  for (let i = 0; i < elemsArray.length; i++) {
    const typeOfFactorial = elemsArray[i].match(/[!]/g).length;
    const num = parseInt(elemsArray[i]);
    switch (typeOfFactorial) {
      case 1:
        result = [...result.concat(defaultFactorial(num))]
        break;
      case 2:
        result = [...result.concat(unusualFactorial(num))]
        break;
    }
  }
  let arrayOfEven = result.filter(e => e % 2 === 0)
  const arrayOfFives = getArraySimpleFives(result.filter(e => e % 5 === 0))
  return arrayOfFives.length !== 0 & arrayOfEven.length !== 0 ?
    (arrayOfEven.length - arrayOfFives.length) > 0 ? arrayOfFives.length
      : arrayOfEven.length : 0
}

module.exports = zeros;
