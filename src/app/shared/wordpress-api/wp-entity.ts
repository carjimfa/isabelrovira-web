import {WordpressRenderedItem} from './wordpress-rendered-item';

export class WpEntity {
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
  author = 0;
  // tslint:disable-next-line:variable-name
  comment_status = '';
  // tslint:disable-next-line:variable-name
  ping_status = '';

  constructor(values: Partial<WpEntity> = {}) {
    Object.assign(this, values);
  }
}
