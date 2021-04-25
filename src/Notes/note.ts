export class Note {
  constructor(private title: string, private body: string, private color: 'red' | 'blue' | 'yellow' | 'green') {}

  getTitle() {
    return this.title;
  }
  setTitle(newTitle: string) {
    this.title = newTitle;
  }


  getBody() {
    return this.body;
  }
  setBody(newBody: string) {
    this.body = newBody;
  }


  getColor() {
    return this.color;
  }
  setColor(newColor: 'red' | 'blue' | 'yellow' | 'green') {
    this.color = newColor;
  }
}
