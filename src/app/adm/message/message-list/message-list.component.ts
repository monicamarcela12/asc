import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {PaginationInstance} from "ngx-pagination";
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'src/app/core/services/message.service';

declare var $:any;

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  public message
  public name:string = ''
  public dataSet = 10;
  public formGroup: FormGroup

  paginateConfig: PaginationInstance = {
    id: 'Message',
    currentPage: 1,
    itemsPerPage: 5
  };

  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder,
    private service: MessageService
  ) { }

  ngOnInit(): void {
    this.start() 
    this.findMessage();
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
      this.service.findMessage(page, this.name).subscribe(response =>{
        this.message = response
        this.paginateConfig.totalItems = response.count
        this.paginateConfig.currentPage = page
        resolve(response)
      }, error=>{
        reject(error)
      })
    })
  }

  delete(idNumber:Number){
    this.service.delete(idNumber).subscribe(response =>{
      this.toastr.success('Notícia Excluída', 'Sucesso!')
      this.start()
    }, error=>{
      this.toastr.error('Tente novamente mais tarde')
    })
  }
  
  findMessage() {
    this.service.findMessage('patologia').subscribe(res => {
      this.message = res
    });
  }

  search() {
    this.service.findMessage('patologia',this.formGroup.value).subscribe(res => {
      this.message = res
    });
  }

}
