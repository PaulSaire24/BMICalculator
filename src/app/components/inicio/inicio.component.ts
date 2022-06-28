import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
    edad=25;
    peso=60;
    altura=200;
    sexo = "masculino";

    masculino(){
      this.sexo = "masculino";
    }
    femenino(){
      this.sexo = "femenino";
    }

    cambiarAltura(event: any){
      this.altura = event.target.value;
    }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  calcularBMI(){
    const BMI = this.peso/Math.pow(this.altura/100,2);
    let final = BMI.toFixed(1); // rdondear a un decimal
    this.router.navigate(['/resultado', final]);
  }

}
