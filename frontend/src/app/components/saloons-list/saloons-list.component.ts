import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/shared/services/provider.service';

@Component({
  selector: 'app-saloons-list',
  templateUrl: './saloons-list.component.html',
  styleUrls: ['./saloons-list.component.css']
})
export class SaloonsListComponent implements OnInit {

  saloons: any = []

  constructor(
    private provider: ProviderService
  ) { }

  ngOnInit() {
    this.provider.getSaloons().then(res => {
      this.saloons = res
    })
  }

  test() {
    console.log(this.saloons)
  }
}
