import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/shared/services/client.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-saloon-detail',
  templateUrl: './saloon-detail.component.html',
  styleUrls: ['./saloon-detail.component.css']
})
export class SaloonDetailComponent implements OnInit {

  selectedRating: number = 5
  public id: number = 0;
  public saloon: any = {}
  public services: any = [];
  comments: any = []
  commentText = ''

  constructor(
    private client: ClientService,
    private router: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.id = parseInt(this.router.snapshot.paramMap.get('id'))

    if(this.id){
      this.client.getSalonDetail(this.id).then(res => {
        this.saloon = res
        console.log(res)
      });
      
      this.client.getSalonServices(this.id).then(res=> {
        this.services = res;
      })

      this.client.getComments(this.id).then(res => {
        this.comments = res
      })
    }
  }

  rate() {
    this.client.setRating(this.id, this.selectedRating)
  }

  isLogged() {
    return !!localStorage.token
  }

  navigateBack(){
    this.location.back();
  }

  createComment() {
    if (this.commentText != '') {
      this.client.createComments(this.id, this.commentText).then(res => {
        console.log(res)
        this.comments.push(res)
        this.commentText = ''
      })
    }
  }
}
