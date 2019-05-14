import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/shared/services/provider.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saloon',
  templateUrl: './saloon.component.html',
  styleUrls: ['./saloon.component.css']
})
export class SaloonComponent implements OnInit {

  cnt = 0
  id: number
  ownerId: number
  saloon: any = {}
  services: any = []
  serviceName: string = ''
  serviceDescrition: string = ''

  constructor(
    private location: Location,
    private provider: ProviderService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = parseInt(this.router.snapshot.paramMap.get('id'));

    this.provider.getSaloonsDetail(this.id).then(res => {
      this.saloon = res
      console.log(this.saloon.partner.id, localStorage.partner_id)
    })

    this.provider.getSaloonServices(this.id).then(res => {
      this.services = res
    })
  }

  test() {
    console.log(this.saloon, this.services)
  }

  viewServices() {
    this.cnt++
  }

  checkCnt() {
    return this.cnt % 2 != 0
  }

  update() {
    if (this.saloon.name != '' && this.saloon.address != '' && this.saloon.telephone != '' && this.saloon.card_number != '') {
      this.provider.updateSaloon(this.saloon)
    }
  }

  delete() {
    this.provider.deleteSaloon(this.id).then(res => {
      this.location.back()
    })
  }

  createService() {
    if (this.serviceDescrition != '' && this.serviceName != '') {
      this.provider.createService(this.id, this.serviceName, this.serviceDescrition).then(res => {
        this.services.push(res)
      })
    }
  }
}
