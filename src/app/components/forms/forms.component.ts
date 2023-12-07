import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validator, Validators } from '@angular/forms';
import * as uuid from 'uuid';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({});
  
  @Output() userData = new EventEmitter<object>();

  constructor (private formBuilder: FormBuilder) {}

  ngOnInit() {  
    this.setFormGroup();
  }

  setFormGroup(datas? : any) {
    this.formGroup = this.formBuilder.group({

      userName: [datas ? datas.userName: 'Junior Andrade',  
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ])  // cada controle vai ter um ternario /// parametroOpcional ? parametroOpcional.nomeControler : ''
      ],

      years: [datas ? datas.years : '56', 
        Validators.compose([
          Validators.required, 
          Validators.min(18), 
          Validators.max(118)
       ])
      ],

      email: [datas ? datas.email : 'wanderson.silva@fengbrasil.com.br', 
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ],

      plans: [datas ? datas.plans : '', Validators.required]
      

    });
    
  }

  submit() {
    if(this.formGroup.invalid){
      alert("Envio invalido");
      /* console.log(this.formGroup.errors); */

    } else {
      const payload = this.formGroup.getRawValue(); 
      console.log("Formulario enviado");
      payload.id = uuid.v4();
      this.userData.emit(payload); 
    }
  }
}




















  //(@Output() userData = new EventEmitter<object>();) Responsavel por passar os dados do formulário para outros componentes

  //(const payload = this.formGroup.getRawValue();)  é a propriedade que está armazenando o dados do formGroup do tipo object preenchinos no formulario

  //(this.userData.emit(payload); ) está emitimos o evento do Output passando o Payload que armazena o formGroup para o componente app.componente que será responsavel por toda a lógica do formulário












/*  public idade = new FormControl (null);
[formControl]="idade" Para exibir os no input HTML
  

  public userName = new FormGroup ({
    name: new FormControl ('junior'),
    sobre: new FormControl (12345)

    [formGroup]="userName" Deve ser colocado na tag Form do HTML para usar os recursos do formGroup
    formControlName="name" Para exibir os no input HTML
  }); */
