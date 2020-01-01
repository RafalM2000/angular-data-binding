import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Rafał';
  age = 28;
  friendNumber = 0;
  type = 'sport';
  hobbies = {czas: 'wolny', sport: 'pływanie'};
  friends = ['Mateusz', 'Wojtek', 'Paweł', 'Tomasz'];
  collegues = ['Wojtek', 'Maciej'];
  isHeLikesBooks = true;
  data = new Date();

  add() {
    ++this.friendNumber;
    console.log(this.friendNumber);
  }

  minus() {
    --this.friendNumber;
    console.log(this.friendNumber);
  }
}
