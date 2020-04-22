export class LocalStorageHelper {
  private static readonly LANG_ATTR = 'arabicLanguage';
  private static readonly THEME_ATTR = 'darkTheme';

  public static setLang(lang: boolean) {
    localStorage.setItem(this.LANG_ATTR, JSON.stringify(lang));
  }

  public static getLang() {
    return JSON.parse(localStorage.getItem(this.LANG_ATTR));
  }

  public static setTheme(theme: boolean) {
    localStorage.setItem(this.THEME_ATTR, JSON.stringify(theme));
  }

  public static getTheme() {
    return JSON.parse(localStorage.getItem(this.THEME_ATTR));
  }
}
