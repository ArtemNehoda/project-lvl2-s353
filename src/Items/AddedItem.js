export default class AddedItem {
  constructor(value, key) {
    this.value = value;
    this.key = key;
  }

  getKey() { return this.key; }

  getValue() { return this.value; }
}
