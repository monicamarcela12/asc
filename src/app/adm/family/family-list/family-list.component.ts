import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PaginationInstance} from "ngx-pagination";
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/core/services/users.service';

declare var $:any;

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.scss']
})
export class FamilyListComponent implements OnInit {
  users
  total_users:number
  name:string = ''

  paginateConfig: PaginationInstance = {
    id: 'users',
    currentPage: 1,
    itemsPerPage: 10
  };

  constructor(
    private toastr: ToastrService,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.start()
  }

  async start(){
    try{
      await this.getUsers()
    }catch{
      this.toastr.error('Não foi possível carregar os produtos')
    }
  }

  getUsers(page?:number): Promise<any>{
    return new Promise((resolve, reject)=>{
      if(!page) page = 1
    })
  }

}
