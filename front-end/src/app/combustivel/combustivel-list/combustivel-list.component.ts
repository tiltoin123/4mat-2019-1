import { Component, OnInit } from '@angular/core';
import { CombustivelService } from '../combustivel.service';

@Component({
  selector: 'app-combustivel-list',
  templateUrl: './combustivel-list.component.html',
  styleUrls: ['./combustivel-list.component.scss']
})
export class CombustivelListComponent implements OnInit {

  public combustiveis: any = []; // Vetor vazio
  public displayedColumns: string[] = ['descricao'];
  // Injetando o serviço do combustível
  constructor(private combustivelSrv: CombustivelService) { }

  // Função de execução assíncrona
  async ngOnInit() {
    try {
      this.combustiveis = await this.combustivelSrv.listar();
    } catch (erro) {
      console.error(erro);
    }
  }

}
