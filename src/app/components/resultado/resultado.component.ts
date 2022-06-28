import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  bmi: number
  interpretacion: string;
  resultado: string;
  constructor(private router: ActivatedRoute) {
    this.resultado  = '';
    this.interpretacion = '';
    this.bmi = +router.snapshot.paramMap.get('valor')!; // chapa el valor y los simbolos + and ! son para tranformar lo que hay ente ellos a number
    console.log(this.bmi);
   }

  ngOnInit(): void {
    this.getResultado(); // si no pones esto no se mostrara el resultado de los valores de resultado y interpretacion
  }

  getResultado(){
    if(this.bmi>=25){
      this.resultado = 'Exceso de peso';
      this.interpretacion = 'Tienes un peso corporal superior al normal, Intente hacer mas ejercicio';
    }
    else if (this.bmi>=18.5){
      this.resultado = 'Normal';
      this.interpretacion = 'Tienes un peso corporal normal, ¡Buen trabajo!';
    }else{
      this.resultado = 'Bajo peso';
      this.interpretacion = 'Tienes un peso corporal mas bajo de lo normal, puedes comer mas';
    }
  }

}
