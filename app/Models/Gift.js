export class Gift {
  constructor(data) {
    this.id = data.id
    this.url = data.images.downsized.url
  }

  get Template() {
    return /*html*/`
        <div class="card m-2">
          <img src="${this.url}">
        </div>
    `
  }
}