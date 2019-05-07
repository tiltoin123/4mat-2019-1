import { Component, OnInit } from '@angular/core';
import { CombustivelService } from '../combustivel.service';


@Component({
  selector: 'app-combustivel-list',
  templateUrl: './combustivel-list.component.html',
  styleUrls: ['./combustivel-list.component.scss']
})
export class CombustivelListComponent implements OnInit {

  public combustiveis: any = []; // Vetor vazio
  public displayedColumns: string[] = ['descricao', 'editar', 'excluir'];
  // Injetando o serviço do combustível
  constructor(
    private combustivelSrv: CombustivelService
  ) { }

  // Função de execução assíncrona
  async ngOnInit() {
    try {
      this.combustiveis = await this.combustivelSrv.listar();
    } catch (erro) {
      console.error(erro);
    }
  }

  async excluir(id: string) {

    try {
      if (confirm('Deseja realmente excluir este combustível?')) {
        await this.combustivelSrv.excluir(id).toPromise();
        this.ngOnInit(); // Recarregar a lista
      }
    } catch (erro) {
      console.error(erro);
    }
  }


  /* async exibirDlg() {
    const dialogRef = this.dialog.open(ExcluirDlgComponent, {
      data: 'Deseja realmente excluir este combustível?'
    });
    try {
      const result = await dialogRef.afterClosed().toPromise();
      alert(result);
    } catch (erro) {
      console.log(erro);
    }
  } */

}
