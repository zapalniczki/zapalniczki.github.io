import { Language } from 'hooks'

type Props = {
  language: Language
} & (
  | {
      description: true
      label: Description
    }
  | {
      description?: false
      label: Label
    }
)

function getLanguageLabel(props: Props) {
  if (props.description) {
    const key = `description_${props.language}` as const

    return props.label[key]
  }

  const key = `label_${props.language}` as const

  return props.label[key]
}

export default getLanguageLabel

type Label = {
  label_en: string
  label_pl: string
}

type Description = {
  description_en: string
  description_pl: string
}
