import {EventEmitter, Injectable} from '@angular/core';
import {MainService} from './main.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  public sendMessage = new EventEmitter<string>();

  constructor(http: HttpClient) {
    super(http);
  }

  login(username: string, password: string): Promise<any> {
    return this.post(`http://127.0.0.1:8000/api/auth/login/`, {
      username: username,
      password: password
    })
  }

  filterName(name: string): Promise<any> {
    return this.get(`http://127.0.0.1:8000/api/main/salon-filter/`, {
      search: name
    })
  }

  getSaloons(): Promise<any> {
    return this.get(`http://127.0.0.1:8000/api/main/salons/`, {})
  }

  getMySaloons(id: number): Promise<any> {
    return this.get(`http://127.0.0.1:8000/api/main/partners/${id}/salons/`, {})
  }

  getSaloonsDetail(id: number): Promise<any> {
    return this.get(`http://127.0.0.1:8000/api/main/salons/${id}/`, {})
  }

  getSaloonServices(id: number): Promise<any> {
    return this.get(`http://127.0.0.1:8000/api/main/salons/${id}/services/`, {})
  }

  createSaloon(saloon: any): Promise<any> {
    return this.post(`http://127.0.0.1:8000/api/main/salons/`, {
      name: saloon.name,
      telephone: saloon.telephone,
      address: saloon.address,
      card_number: saloon.card_number,
      work_start: saloon.work_start,
      work_end: saloon.work_end,
      description: saloon.description,
      img_url: saloon.img_url
    })
  }

  deleteSaloon(id: number): Promise<any> {
    return this.delet(`http://127.0.0.1:8000/api/main/salons/${id}/`, {})
  }

  updateSaloon(saloon: any): Promise<any> {
    return this.put(`http://127.0.0.1:8000/api/main/salons/${saloon.id}/`, {
      name: saloon.name,
      telephone: saloon.telephone,
      address: saloon.address,
      card_number: saloon.card_number,
      is_aproved: true
    })
  }

  createService(id:number, name: string, description: string) {
    return this.post(`http://127.0.0.1:8000/api/main/salons/${id}/services/`, {
      name: name,
      description: description
    })
  }

  getServiceDetail(id: number) {
    return this.get(`http://127.0.0.1:8000/api/main/services/${id}/`, {})
  }

  deleteService(id: number) {
    return this.delet(`http://127.0.0.1:8000/api/main/services/${id}/`, {})
  }

  updateService(id: number, service: any) {
    return this.put(`http://127.0.0.1:8000/api/main/services/${id}/`, {
      name: service.name,
      description: service.description
    })
  }
}