export function getBrowserLanguage () {
  if (!navigator) return 'zh-CN';
  const { userLanguage, language } = navigator;
  const lang = userLanguage || language
  return lang
}
