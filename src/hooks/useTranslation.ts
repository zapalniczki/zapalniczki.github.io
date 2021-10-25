import { TOptions, StringMap } from 'i18next'
import {
  useTranslation as nativeUseTranslation,
  UseTranslationOptions
} from 'react-i18next'
import { TranslationsNamespace } from 'i18n/config'
import { useCallback } from 'react'

export default function useTranslation(
  ns: TranslationsNamespace,
  options?: UseTranslationOptions
) {
  const { t } = nativeUseTranslation(ns, options)

  const withBase = useCallback(
    (base: string): TranslateFunc =>
      (key, tOptions) =>
        t(`${base}.${key}`, tOptions),
    [t]
  )

  return { t, withBase }
}

export type TranslateFunc = (
  key: string | string[],
  options?: TOptions<StringMap> | string
) => string
