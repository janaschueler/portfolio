import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

export class CustomTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}

  /**
   * Retrieves translation data for the specified language.
   * Checks localStorage for cached data before making an HTTP request.
   * @param lang Language code (e.g., 'en', 'de').
   * @returns Observable emitting the translation object.
   */
  getTranslation(lang: string): Observable<any> {
    const key = `translations-${lang}`;
    const cached = localStorage.getItem(key);
    if (cached) {
      return of(JSON.parse(cached));
    }
    return this.http.get(`/assets/i18n/${lang}.json`).pipe(
      tap((res) => {
        console.log('✅ Saving to localStorage');
        localStorage.setItem(key, JSON.stringify(res));
      })
    );
  }
}
