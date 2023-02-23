import { Component, OnInit } from '@angular/core';
import { Pensamento } from 'src/app/core/pensamento';
import { PensamentoService } from 'src/app/service/pensamento.service';

@Component({
  selector: 'app-lista-pensamentos',
  templateUrl: './lista-pensamentos.component.html',
  styleUrls: ['./lista-pensamentos.component.css']
})
export class ListaPensamentosComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listarPensamentos(this.paginaAtual).subscribe((dados) => {
      this.listaPensamentos = dados;
    })
  }

  carregarMaisPensamentos(){
    this.service.listarPensamentos(++this.paginaAtual).subscribe(
      (dados) => {
        this.listaPensamentos.push(...dados);
        if(!dados.length){
          this.haMaisPensamentos = false;
        }
      }
    )
  }

}
