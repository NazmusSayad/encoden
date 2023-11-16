export default class Logic {
  #characters: string
  #charactersLength: number
  constructor(characters: string) {
    if (!characters) {
      throw '"characters" can not be empty.'
    }

    if (typeof characters !== 'string') {
      throw '"characters" can only be strings.'
    }

    this.#characters = characters
    this.#charactersLength = characters.length
  }

  get base() {
    return this.#characters
  }

  get baseLength() {
    return this.#charactersLength
  }

  #encode(int: number) {
    if (int === 0) {
      return this.#characters[0]
    }

    let encoded = ''
    while (int) {
      const remainder = int % this.#charactersLength
      int = Math.floor(int / this.#charactersLength)
      encoded = this.#characters[remainder].toString() + encoded
    }

    return encoded
  }

  encode(int: number) {
    if (int > Number.MAX_SAFE_INTEGER) {
      throw '"encode" only accepts integers smaller than Number.MAX_SAFE_INTEGER.'
    }

    if (typeof int !== 'number' || int !== parseInt(int as any)) {
      throw '"encode" only accepts integers.'
    }

    return this.#encode(int)
  }

  #decode(str: string) {
    let decoded = 0
    while (str) {
      const charPosition = this.#characters.indexOf(str[0])
      if (charPosition < 0) {
        throw `"decode" can not find "${str[0]}".`
      }

      const powerOf = str.length - 1
      decoded += charPosition * Math.pow(this.#charactersLength, powerOf)
      str = str.substring(1)
    }
    return decoded
  }

  decode(str: string) {
    if (!str) {
      throw '"decode" only accepts not empty strings.'
    }

    if (typeof str !== 'string') {
      throw '"decode" only accepts strings.'
    }

    return this.#decode(str)
  }
}
