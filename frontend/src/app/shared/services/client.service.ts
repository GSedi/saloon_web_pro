import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends MainService {

  constructor(http: HttpClient) {
    super(http);
  }

  getSalonList(): Promise<any>{
    return this.get('http://localhost:8000/api/main/salons/', {});
  }

  getSalonDetail(id:number): Promise<any>{
    return this.get(`http://localhost:8000/api/main/salons/${id}/`, {});
  }

  getSalonServices(id:number): Promise<any>{
    return this.get(`http://localhost:8000/api/main/salons/${id}/services/`, {});
  }

  setRating(id: number, rating: number): Promise<any> {
    return this.post(`http://localhost:8000/api/main/salons/${id}/rate/`, {
      rate: rating
    })
  }

  getComments(id: number): Promise<any> {
    return this.get(`http://localhost:8000/api/main/salons/${id}/comments/`, {})
  }

  createComments(id: number, text: string): Promise<any> {
    return this.post(`http://localhost:8000/api/main/salons/${id}/comments/`, {
      text: text
    })
  }
}
