export const removeSpaces = (value) => value.replaceAll(' ', '')

export const removeSlashes = (value) => value.replaceAll('/', '')

export const removeNonSlashSymbols = (value) => {
  return value
    .replaceAll(/[&#,!@^&-+()$~%.`~'":*?<>={}]/g, '')
    .replaceAll('-', '')
    .replaceAll('\\', '')
    .replaceAll('|', '')
    .replaceAll(';', '')
    .replaceAll('[', '')
    .replaceAll(']', '')
    .replaceAll('_', '')
}

export const enforceNumberLimit = ({number, value, high, low, previousValue}) => {
  return number >= low && number <= high ? value : previousValue
}

export const enforceCharLimit = ({limit, value, previousValue}) => value.length <= limit ? value : previousValue

export const enforceNoAlphaChars = ({value, previousValue}) => {
  const hasLetters = /[a-zA-Z]/g.test(value);

  return hasLetters ? previousValue : value
}

// Special Display Formatting

export const expirationDisplayValue = (value) => {

  let formattedString = ''
  const slashIndex = [2]

  for (let i = 0; i < value.length; i++) {
    if (slashIndex.includes(i)) {
      formattedString += '/'
    }

    formattedString += value[i]
  }

  return formattedString
}

export const cardDisplayValue = (value) => {

  let formattedString = ''
  const spaceIndexes = [4, 8, 12]

  for (let i = 0; i < value.length; i++) {
    if (spaceIndexes.includes(i)) {
      formattedString += ' '
    }

    formattedString += value[i]
  }

  return formattedString
}