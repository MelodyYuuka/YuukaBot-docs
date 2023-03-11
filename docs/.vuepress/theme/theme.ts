import type { Theme } from '@vuepress/core'
import { defaultTheme, type DefaultThemeOptions } from '@vuepress/theme-default'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export const yuukabotTheme = (options: DefaultThemeOptions): Theme => {
  return {
    name: 'vuepress-theme-yuukabot',
    extends: defaultTheme(options),


  }
}