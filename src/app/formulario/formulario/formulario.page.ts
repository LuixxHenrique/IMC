import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  pessoa = {}
  pessoaForm : FormGroup
  nome : null
  email : null
  telefone : null

  constructor(private formularioBuilder : FormBuilder) { }

  submit(){
    if(this.pessoaForm.invalid || this.pessoaForm.pending){
      return
    }else{
      console.log(this.pessoa)
    }
    console.log(this.pessoa)
  }

  ngOnInit() {
    this.pessoaForm = this.formularioBuilder.group({
      nome: ['',Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      email: ['',Validators.compose([Validators.required, Validators.email])],
      cpf: ['',Validators.compose([Validators.pattern('[0-9]'), Validators.minLength(11), Validators.maxLength(11)])],
      telefone: ['',Validators.compose([Validators.pattern('[0-9]'), Validators.minLength(11), Validators.maxLength(11)])]
    })
  }

}
