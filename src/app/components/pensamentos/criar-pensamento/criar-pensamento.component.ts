import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Pensamento } from 'src/app/core/pensamento';
import { PensamentoService } from 'src/app/service/pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private service: PensamentoService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['Pensamento ...'],
      autoria: ['o nome do autor'],
      modelo: ['modelo1']
    })
  }

  criarPensamento() {
    this.service.cadastrarPensamento(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    })
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}
