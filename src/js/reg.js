
export default  class Validator {

  validateUsername(name) {
   return /^(?!.*\d{4,})[a-zA-Z][\da-zA-Z-_]*[a-zA-Z]$/.test(name)
  }
}
