import { Component, Input, OnInit } from '@angular/core';
import { FormControl,  FormGroup,  ReactiveFormsModule } from '@angular/forms';

/* onde faremos todas a ações do formulario */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public clientTable: any [] = [];

  ngOnInit(): void {

  }

  saveData(event:any): void {
    this.clientTable.push(event)
    console.log(this.clientTable);
    console.log("Formulário slavo");
      
  }

  deleteData(id:string){
    this.clientTable.forEach((user, index)=>{   /* user = payload.id ////  index pega a posição do elemento //// id = é os dados dentro de payload */
      if(id == user.id) {
        this.clientTable.splice(index, 1); //faz a exclusão do item basedo no Index e a quantidade de itens
      }
    });
  }

  editData(id: string) {
    this.clientTable.forEach((user, index)=>{  
      if(id == user.id) {
        
        console.log(user.userName, user);

      }
    });
  }
}





/* if(event){
      this.clientTable.indexOf('userName');
    console.log(`acessando o Array ${this.clientTable.length}`)
    } */