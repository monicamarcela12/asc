import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PaginationInstance} from "ngx-pagination";
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  users
  total_users:number
  name:string = ''
  dataSet = 10;
  paginateConfig: PaginationInstance = {
    id: 'users',
    currentPage: 1,
    itemsPerPage: 2
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
