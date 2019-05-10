import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-combustivel-form',
  templateUrl: './combustivel-form.component.html',
  styleUrls: ['./combustivel-form.component.scss']
})
export class CombustivelFormComponent implements OnInit {

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.actRoute.snapshot.params.id) {
      const id = this.actRoute.snapshot.params.id;
      alert('Com id ' +  id);
    } else {
      alert('Sem id');
    }
  }

}
