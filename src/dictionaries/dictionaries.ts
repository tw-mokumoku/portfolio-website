import 'server-only'
 
const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  ja: () => import('@/dictionaries/ja.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: langsType) =>
  dictionaries[locale]();

export type LangPromise = Promise<{lang: langsType}>;
type langsType = 'en' | 'ja';
const langs = ['en', 'ja'];

export const langFilter = (lang: langsType) => langs.includes(lang) ? lang : 'en';

export const dict = async (params: LangPromise) => await getDictionary(langFilter((await params).lang));

