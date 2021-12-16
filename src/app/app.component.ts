import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public credentials = {} ; 

  public Username = '';
  public Password = '' ;

  c : any;

  public flag = false ;

  constructor(private LoginAuthService : MyServiceService) { }

  ngOnInit() {
    this.credentials = this.LoginAuthService.getCredentials()
  }

  verify() {
    //alert(this.Username);
    for( this.c in this.credentials){
      console.log(this.c);
      if(this.c.username == this.Username){
        if(this.c.password == this.Password){
          this.flag = true ;
        }
      }
    }
    if(this.flag){
      alert("Login Successful");
    }
    else{
      alert("Wrong Credentials. Please enter credentials correctly.")
    }
  }
}
