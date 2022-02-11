import { Language } from 'braty-common'

type Props = {
  language: Language
} & (
  | {
      description?: false
      label: Name
      name: true
    }
  | {
      description: true
      label: Description
      name?: false
    }
  | {
      description?: false
      label: Label
      name?: false
    }
)

function getLanguageLabel(props: Props) {
  if (props.description) {
    const key = `description_${props.language}` as const

    return props.label[key]
  }

  if (props.name) {
    const key = `name_${props.language}` as const

    return props.label[key]
  }

  const key = `label_${props.language}` as const

  return props.label[key]
}

type Label = {
  label_en: string
  label_pl: string
}

type Description = {
  description_en: string
  description_pl: string
}

type Name = {
  name_en: string
  name_pl: string
}

export default getLanguageLabel
