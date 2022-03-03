import { TOptions, StringMap, i18n } from 'i18next'
import {
  useTranslation as nativeUseTranslation,
  UseTranslationOptions,
  UseTranslationResponse
} from 'react-i18next'
import { TranslationsNamespace, keySeparator, FALLBACK_LANGUAGE } from 'config'
import { useCallback } from 'react'
import { Language, language as languageSchema } from 'braty-common'

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

  let language: Language
  const parsedLanguage = languageSchema.safeParse(i18n.language)
  if (parsedLanguage.success) {
    language = parsedLanguage.data
  } else {
    language = FALLBACK_LANGUAGE
  }

  return {
    t,
    withBase,
    i18n,
    ready,
    language
  }
}

export type TranslateFunc = (
  key: string | string[],
  options?: TOptions<StringMap> | string
) => string

type UseTranslation<Namespace extends TranslationsNamespace> = {
  i18n: i18n
  language: Language
  ready: boolean
  t: UseTranslationResponse<Namespace>['t']
  withBase: (base: string) => TranslateFunc
}
