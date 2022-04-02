import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PaginationInstance } from "ngx-pagination";
import { ToastrService } from 'ngx-toastr';
import { FamilyService } from 'src/app/core/services/family.service';

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.scss']
})
export class FamilyListComponent implements OnInit {
  public family
  public name:string = ''
  public dataSet = 10;
  public formGroup: FormGroup

  paginateConfig: PaginationInstance = {
    id: 'family',
    currentPage: 1,
    itemsPerPage: 5
  };

  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private service: FamilyService
  ) { }

  ngOnInit(): void {
    this.start() 
    this.findFamilia();
  }

  async start(){
    try{
      this.startForm()
    }catch{
      this.toastr.error('Não foi possível carregar')
    }
  }

  startForm(): FormGroup{
    return this.formGroup = this.fb.group({
      nome: ['']
    })
  }

  get(page?:any): Promise<any>{
    return new Promise((resolve, reject)=>{
      if(!page) page = 1
      this.service.findFamilia(page, this.formGroup.value).subscribe(response =>{
        this.family = response
        this.paginateConfig.totalItems = response.count
        this.paginateConfig.currentPage = page
        resolve(response)
      }, error=>{
        reject(error)
      })
    })
  }

  deleteNew(idNumber:Number){
    this.service.delete(idNumber).subscribe(response =>{
      this.toastr.success(' Sucesso Excluída', 'Sucesso!')
      this.start()
    }, error=>{
      this.toastr.error('Tente novamente mais tarde')
    })
  }
  
  findFamilia() {
    this.service.findFamilia('familia').subscribe(res => {
      this.family = res
    });
  }

  search() {
    this.service.findFamilia('familia',this.formGroup.value).subscribe(res => {
      this.family = res
    });
  }

}
