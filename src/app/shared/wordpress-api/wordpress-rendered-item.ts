export class WordpressRenderedItem {
  rendered = '';
  protected = false;

  constructor(values: Partial<WordpressRenderedItem> = {}) {
    Object.assign(this, values);
  }
}
