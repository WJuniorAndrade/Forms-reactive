import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {

  @Input() inputClientTable: any [] = [];
  @Output() deleteUser = new EventEmitter<string>();
  @Output() editUser =  new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
  }

  deleteData(id:string) {
    this.deleteUser.emit(id); 
  }

  editData(id: string) {
    this.editUser.emit(id);
  }
}

















//(@Input() clientTable: any [] = [];) 
//@Input() - é utilizado quando você tem um componente "pai" que possui uma determinada informação (ex: atributo) e que irá chamar dentro de seu template(html) um componente filho que precisa receber essa informação que o componente pai o passou e assim "renderizar" em sua estrutura / escopo interno

//@Output() - é utilizado quando você tem justamente uma situação inversa ao de cima (Input), ou seja, no caso é um componente filho que irá passar alguma informação para o componente pai para que este manipule e "renderize" esse dado em sua estrutura / escopo interno