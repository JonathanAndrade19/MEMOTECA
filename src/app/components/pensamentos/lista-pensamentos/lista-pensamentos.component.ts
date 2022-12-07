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

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listarPensamentos().subscribe((dados) => {
      this.listaPensamentos = dados;
    })
  }

}
