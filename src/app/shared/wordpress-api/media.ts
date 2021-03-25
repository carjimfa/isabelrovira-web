import {WpEntity} from './wp-entity';
import {WordpressRenderedItem} from './wordpress-rendered-item';

export class Media extends WpEntity {
  template = '';
  description = new WordpressRenderedItem();
  caption = new WordpressRenderedItem();
  // tslint:disable-next-line:variable-name
  alt_text = '';
  // tslint:disable-next-line:variable-name
  media_type = '';
  post = 0;
  // tslint:disable-next-line:variable-name
  source_url = '';

  constructor(values: Partial<Media> = {}) {
    super(values);
    if (values) {
      Object.assign(this, {
        template: values.template,
        description: values.description,
        caption: values.caption,
        alt_text: values.alt_text,
        media_type: values.media_type,
        post: values.post,
        source_url: values.source_url,
      });
    }
  }
}
