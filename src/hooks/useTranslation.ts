import { TOptions, StringMap, i18n } from 'i18next'
import {
  useTranslation as nativeUseTranslation,
  UseTranslationOptions,
  UseTranslationResponse
} from 'react-i18next'
import { TranslationsNamespace, keySeparator } from 'i18n/config'
import { useCallback } from 'react'
import { enum as zenum, TypeOf } from 'zod'

export default function useTranslation(
  ns: TranslationsNamespace,
  options?: UseTranslationOptions
): UseTranslation<TranslationsNamespace> {
  const { i18n, t } = nativeUseTranslation(ns, options)

  const withBase = useCallback(
    (base: string): TranslateFunc =>
      (key, tOptions) =>
        t(`${base}${keySeparator}${key}`, tOptions),
    [t]
  )

  const currentLanguage = availiableLanguages.parse(i18n.language)

  return {
    t,
    withBase,
    i18n,
    ready: true,
    currentLanguage
  }
}

export type TranslateFunc = (
  key: string | string[],
  options?: TOptions<StringMap> | string
) => string

const availiableLanguages = zenum(['pl', 'en'])
export type Language = TypeOf<typeof availiableLanguages>

type UseTranslation<Namespace extends TranslationsNamespace> = {
  currentLanguage: Language
  i18n: i18n
  ready: boolean
  t: UseTranslationResponse<Namespace>['t']
  withBase: (base: string) => TranslateFunc
}
