import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/shared/services/provider.service';
import { Location } from '@angular/common';
import { ClientService } from 'src/app/shared/services/client.service';

@Component({
  selector: 'app-saloons-list',
  templateUrl: './saloons-list.component.html',
  styleUrls: ['./saloons-list.component.css']
})
export class SaloonsListComponent implements OnInit {

  saloons: any = []

  constructor(
    private provider: ProviderService,
    private location: Location,
    private client: ClientService
  ) { }

  ngOnInit() {
    this.client.getSalonList().then(res=>{
      this.saloons = res;
    })

    this.provider.sendMessage.subscribe(res => {
      this.provider.filterName(res).then(result => {
        this.saloons = result
      })
    });
  }

  test() {
    console.log(this.saloons)
  }

  isLogged() {
    return !!localStorage.token
  }

  filter(){
    this.provider.sendMessage.subscribe(res => {
      this.provider.filterName(res).then(result => {
        this.saloons = result
      })
    });
  }
}
