class WordpressRenderedItem {
  rendered = '';
  protected = false;

  constructor(values: Partial<WordpressRenderedItem> = {}) {
    Object.assign(this, values);
  }
}

export class Post {
  id = 0;
  date: Date = new Date();
  // tslint:disable-next-line:variable-name
  date_gmt: Date = new Date();
  guid: WordpressRenderedItem = new WordpressRenderedItem();
  modified: Date = new Date();
  // tslint:disable-next-line:variable-name
  modified_gmt: Date = new Date();
  slug = '';
  status = '';
  type = '';
  link = '';
  title = new WordpressRenderedItem();
  content = new WordpressRenderedItem();
  excerpt = new WordpressRenderedItem();
  author = 0;
  // tslint:disable-next-line:variable-name
  featured_media = 0;
  // tslint:disable-next-line:variable-name
  comment_status = '';
  // tslint:disable-next-line:variable-name
  ping_status = '';
  sticky = false;
  template = '';
  format = '';
  categories = new Array<number>();

  constructor(values: Partial<WordpressRenderedItem> = {}) {
    Object.assign(this, values);
  }
}
