import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  filtro: string = '';
  favoritos: boolean = false;
  listaFavoritos: Pensamento[] = [];
  titulo: string = 'Meu Mural';

  constructor(private service: PensamentoService, private router: Router) { }

  ngOnInit(): void {
    this.service.listarPensamentos(this.paginaAtual, this.filtro, this.favoritos).subscribe(
      (dados) => {
      this.listaPensamentos = dados;
    })
  }

  carregarMaisPensamentos(){
    this.service.listarPensamentos(++this.paginaAtual, this.filtro, this.favoritos).subscribe(
      (dados) => {
        this.listaPensamentos.push(...dados);
        if(!dados.length){
          this.haMaisPensamentos = false;
        }
      }
    )
  }

  pesquisarPensamentos(){
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listarPensamentos(this.paginaAtual, this.filtro, this.favoritos).subscribe(
      (dados) => {
        this.listaPensamentos = dados;
      }
    )
  }

  listarFavoritos(){
    this.titulo = 'Meus Favoritos';
    this.haMaisPensamentos = true;
    this.favoritos = true;
    this.paginaAtual = 1;
    this.service.listarPensamentos(this.paginaAtual, this.filtro, this.favoritos).subscribe(
      (dados) => {
      this.listaPensamentos = dados;
      this.listaFavoritos = dados;
    })
  }

  recarregarComponente(){
    this.favoritos = false;
    this.paginaAtual = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }

}
