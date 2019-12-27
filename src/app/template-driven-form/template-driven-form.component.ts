import { Component, OnInit } from '@angular/core';

interface Client {
  Nome: string;
  Sobrenome: string;
  Ddn: Date;
  Genêro: string;
  Cidade: string;
  Estado: string;
  Telefone1: string;
  Telefone2: string;
}

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  Client: Client = {
    Nome: '', Sobrenome:'', Ddn: new Date(), Genêro: '', Local: '',
    Cidade: '', Estado: '', Telefone1:'', Telefone2:'' };

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.Client);
  }

}
