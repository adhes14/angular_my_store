import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Adhemar';
  age = 18;
  img = 'https://indiehoy.com/wp-content/uploads/2022/05/naruto.jpg';
  btnDisabled = true;
  person = {
    name: 'Adhemar',
    age: 25,
    avatar: 'https://indiehoy.com/wp-content/uploads/2022/05/naruto.jpg'
  }
  names: string[] = ['Nico', 'Juli', 'Santi'];
  newName: string = '';

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
