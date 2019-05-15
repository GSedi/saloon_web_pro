import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProviderService } from 'src/app/shared/services/provider.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {

  id: number
  service: any = {}

  constructor(
    private location: Location,
    private provider: ProviderService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = parseInt(this.router.snapshot.paramMap.get('id'));

    this.provider.getServiceDetail(this.id).then(res => {
      this.service = res
    })
  }

  isPartner() {
    return !!localStorage.partner_id
  }

  deleteService() {
    this.provider.deleteService(this.service.id).then(res => {
      this.location.back()
    })
  }

  updateService() {
    this.provider.updateService(this.service.id, this.service)
  }

  isLogged() {
    return !!localStorage.token
  }
}
