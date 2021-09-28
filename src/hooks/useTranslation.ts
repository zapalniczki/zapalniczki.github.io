import { TOptions, StringMap } from 'i18next'
import { useTranslation as useT, UseTranslationOptions } from 'react-i18next'
import { TranslationsNamespace } from 'i18n/config'

export default function useTranslation(
  ns: TranslationsNamespace,
  options?: UseTranslationOptions
) {
  const { t } = useT(ns, options)

  return {
    t
  }
}

export type TranslateFunc = (
  key: string | string[],
  options?: TOptions<StringMap> | string
) => string
