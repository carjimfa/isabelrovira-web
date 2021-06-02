import { WpEntity } from './wp-entity';
import { MenuItemAcf } from './menu-item-acf';

export class MenuItem extends WpEntity{
  acf = new MenuItemAcf();

  constructor(values: Partial<MenuItem> = {}) {
    super(values);

    if (values) {
      Object.assign(this, values);
    }
  }
}
