

export const checkNameField = (value) => {
  return !!value.length
}

export const checkSecurityCode = (code) => {
  return code.length === 3 || code.length === 4
}


export const checkIsExpired = (inputDate) => {
  // inputDate is cleaned/reduced to a 4 digit number where the first two digits are the month and the last two are the year. 
  if (inputDate.length !==  4) return true; // Not full date

  const today = new Date()

  const expirationMonth = inputDate.substring(0, 2)
  const expirationYear = getFullExpirationYear(today, inputDate)

  // First day of the following month
  const expirationDate = new Date(expirationYear, expirationMonth, 1)

  if (expirationDate < today) {
    return true // Card has expired
  }

  return false;

}

// This function gets the most likely expiration year based on information given
const getFullExpirationYear = (today, inputDate) => {

  const todayYearPrefix = today.getFullYear().toString().substring(0, 2)
  const todayYear = today.getFullYear()

  const inputSuffix = inputDate.substring(2, 4)

  const thisCentury = parseInt(`${todayYearPrefix}${inputSuffix}`)
  const lastCentury = parseInt(`${(parseInt(todayYearPrefix) - 1).toString()}${inputSuffix}`)
  const nextCentury = parseInt(`${(parseInt(todayYearPrefix) + 1).toString()}${inputSuffix}`)

  const centuries = [lastCentury, thisCentury, nextCentury].map(c => ({
    century: c.toString(),
    timeDifference: Math.abs(todayYear - c)
  }))

  const centriesSortedByDifference = centuries.sort((a, b) => a.timeDifference - b.timeDifference)

  return centriesSortedByDifference[0].century
}



// Using Luhn Algorithm as main credit card validation from a github gist
/*  https://gist.github.com/DiegoSalazar/4075533  */

// Takes a credit card string value and returns true on valid number
export const validateIsCardNumber = (creditCardValue) => {

  // Must have length
  if (!(creditCardValue.length > 0)) return false;
  
  // Must contain number other than zero
  if (!(parseInt(creditCardValue) > 0)) return false;

  // Accept only digits, dashes or spaces
  if (/[^0-9-\s]+/.test(creditCardValue)) return false;

  // The Luhn Algorithm. It's so pretty.
  let nCheck = 0, bEven = false;
  creditCardValue = creditCardValue.replace(/\D/g, "");

  for (var n = creditCardValue.length - 1; n >= 0; n--) {
    var cDigit = creditCardValue.charAt(n),
      nDigit = parseInt(cDigit, 10);

    if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

    nCheck += nDigit;
    bEven = !bEven;
  }

  return (nCheck % 10) === 0;
}
