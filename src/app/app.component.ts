import { Component } from '@angular/core';
import { Product } from './product.model';

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

  products: Product[] = [
    {
      name: 'The best toy',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all'
    },
    {
      name: 'Almost new bike',
      price: 852,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Album collection',
      price: 565,
      image: './assets/images/album.jpg'
    },
    {
      name: 'My books',
      price: 565,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Glasses to improve your vision',
      price: 565,
      image: './assets/images/glasses.jpg'
    },
    {
      name: 'The house of your dreams',
      price: 565,
      image: './assets/images/house.jpg'
    }
  ]

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
