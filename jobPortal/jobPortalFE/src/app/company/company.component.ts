import { Component, OnInit } from '@angular/core';
import { PagerService } from '../services/pager.service';
import { CompanyService } from 'src/app/services/company.service';
import { JobService } from 'src/app/services/job.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  value: void;
  field: any;
  
  company_count: any;  
  companies:any;
  // pager object
  pager: any = {};
  // paged items
  page_limit = 10;
  
  title : any;
  constructor(private companyService : CompanyService,private pagerService : PagerService,
  private route: ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      this.field = params.field;
      this.value = params.value;  
      if(this.field!='all')
        this.title = 'Comapnies By ' + this.field + ' in ' + this.value; 
      else  
        this.title = 'Showing All Comapnies'
      this.setPage(1);
    });
    
  }

  setPage(page: number) {
        this.companyService.getCompanies(this.field,this.value,page,this.page_limit)    
        .subscribe(res =>{
          if(res.data.companies.length>0)
          {
            this.companies = res.data.companies;
            this.company_count=res.data.count;
            this.pager = this.pagerService.getPager(this.company_count, page,this.page_limit);   
          }
        } )
      
    }


  view(company_id){
    console.log('Company Id: '+company_id);
    this.router.navigate(['/companyDetail'], { queryParams: { company_id: company_id } });
  }





}





 



