import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/shared/services/provider.service';

@Component({
  selector: 'app-partner-saloons',
  templateUrl: './partner-saloons.component.html',
  styleUrls: ['./partner-saloons.component.css']
})
export class PartnerSaloonsComponent implements OnInit {

  cnt = 0
  id: number
  saloon: any = {}
  saloons: any = []

  constructor(
    private provider: ProviderService
  ) { }

  ngOnInit() {
    if (localStorage.partner_id) {
      this.id = localStorage.partner_id

      this.provider.getMySaloons(this.id).then(res => {
        this.saloons = res
      })
    }
  }

  test() {
    console.log(this.saloons)
  }

  clickCreate() {
    this.cnt++
  }

  checkCnt() {
    return this.cnt % 2 != 0
  }

  isPartner() {
    if (localStorage.partner_id) return true
    else return false
  }

  createSaloon() {
    if (this.saloon.name != '' && this.saloon.address != '' && this.saloon.telephone != '' && this.saloon.card_number != '' && this.saloon.work_start != '' && this.saloon.work_end != '' && this.saloon.description != '' && this.saloon.img_url != '') {
      this.provider.createSaloon(this.saloon).then(res => {
        this.saloons.push(res)
        this.cnt = 0
        this.saloon = {}
      })
    }
  }
}
