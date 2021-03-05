export const removeSpaces = (value) => value.replaceAll(' ', '')

export const enforceCharLimit = ({limit, value, previousValue}) => value.length <= limit ? value : previousValue

export const enforceNoAlphaChars = ({value, previousValue}) => {
  const hasLetters = /[a-zA-Z]/g.test(value);

  return hasLetters ? previousValue : value
}