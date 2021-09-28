export default function changeColorAlpha(colorValue: string, alpha: number) {
  const parts = colorValue.match(/[\d.]+/g)
  if (!parts || (parts.length !== 3 && parts.length !== 4)) {
    throw new Error('Cannot change alpha channel, invalid color value')
  }

  parts[3] = alpha.toString()

  return `rgba(${parts.join()})`
}
