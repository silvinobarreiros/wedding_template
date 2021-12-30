export const getRandomEntry = list => {
  const max = list.length
  const spot = Math.floor(Math.random() * max)

  return list[spot]
}

export const splitarray = (input, spacing) => {
  const output = []

  for (let i = 0; i < input.length; i += spacing) {
    output[output.length] = input.slice(i, i + spacing)
  }

  return output
}

export const isVerified = phrase => {
  const password = process.env.REACT_APP_PASSWORD

  return password && password === phrase
}
