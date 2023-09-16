console.log('File IO')

const writeToFile = (filename: string) => {
  const content = 'first line\nsecond line'
  Bun.write(filename, content)
}

const readFileAsString = async (filename: string) => {
  const file = Bun.file(filename)
  return await file.text()
}

const readFileAsStream = async (filename: string) => {
  const file = Bun.file(filename)
  const reader = file.stream().getReader()
  const data = (await reader.read()).value
  const content = new TextDecoder().decode(data)
  console.log(content)
}

writeToFile('file.txt')

// readFileAsString('file.txt')
readFileAsStream('file.txt')