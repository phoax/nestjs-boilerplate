export class ItemsQueryInterface {
  offset: number
  limit: number

  constructor() {
    this.limit = 20
    this.offset = 0
  }
}
