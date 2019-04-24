import { Component, OnInit } from '@angular/core';
import { MailService } from '../services/mail.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  emailaddress: "";
  constructor(private mailService: MailService) { }

  ngOnInit() {
  }
  mail()
  {
    this.mailService.mailUser(this.emailaddress)
    .subscribe(
      res =>{ console.log(res)
      console.log("mail sent");
      },
      err => console.log(err)
    )
    console.log(this.emailaddress);
    
  }

}
