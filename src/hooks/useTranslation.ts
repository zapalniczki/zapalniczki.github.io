import { TOptions, StringMap, i18n } from 'i18next'
import {
  useTranslation as nativeUseTranslation,
  UseTranslationOptions,
  UseTranslationResponse
} from 'react-i18next'
import {
  TranslationsNamespace,
  keySeparator,
  FALLBACK_LANGUAGE
} from 'i18n/config'
import { useCallback } from 'react'
import { enum as zenum, TypeOf } from 'zod'

export default function useTranslation(
  ns: TranslationsNamespace,
  options?: UseTranslationOptions
): UseTranslation<TranslationsNamespace> {
  const { i18n, ready, t } = nativeUseTranslation(ns, options)

  const withBase = useCallback(
    (base: string): TranslateFunc =>
      (key, tOptions) =>
        t(`${base}${keySeparator}${key}`, tOptions),
    [t]
  )

  let currentLanguage: Language
  const parsedLanguage = language.safeParse(i18n.language)
  if (parsedLanguage.success) {
    currentLanguage = parsedLanguage.data
  } else {
    currentLanguage = FALLBACK_LANGUAGE
  }

  return {
    t,
    withBase,
    i18n,
    ready,
    currentLanguage
  }
}

export type TranslateFunc = (
  key: string | string[],
  options?: TOptions<StringMap> | string
) => string

export const language = zenum(['pl', 'en'])
export type Language = TypeOf<typeof language>

type UseTranslation<Namespace extends TranslationsNamespace> = {
  currentLanguage: Language
  i18n: i18n
  ready: boolean
  t: UseTranslationResponse<Namespace>['t']
  withBase: (base: string) => TranslateFunc
}
