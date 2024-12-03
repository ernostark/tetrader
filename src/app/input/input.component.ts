import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  area !: number;
  height !: number;
  volume !: number;

  startCalc(){

    console.log("Számítás indul...");

    this.volume = this.area * this.height / 3;
    
  }

}
