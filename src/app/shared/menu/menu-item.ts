export class MenuItem {
  label: string;
  uppercase: boolean;
  routerLink: string;

  constructor(values: Partial<MenuItem> = {}) {
    if (values) {
      Object.assign(this, values);
    }
  }
}
