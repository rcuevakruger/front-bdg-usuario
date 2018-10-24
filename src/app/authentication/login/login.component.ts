import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../../dashboards/dashboard-components/services/General.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

    constructor(public router: Router, private _generalService: GeneralService) { }
    username
    password
    errorMessage
    ngOnInit() { }

    ngAfterViewInit() {
        $(function () {
            $(".preloader").fadeOut();
        });

        $('#to-recover').on("click", function () {
            $("#loginform").slideUp();
            $("#recoverform").fadeIn();
        });
    }

    onLoggedin() {
        return this._generalService.login(this.username)
            .toPromise()
            .then((result) => {
                this.errorMessage = null;
               console.log(result);
               localStorage.setItem("usuario",JSON.stringify(result))
               localStorage.setItem('isLoggedin', 'true');
               this.router.navigate(["/dashboard/dashboard1"])
               
            })
            .catch((error) => {
                if (error === 'Server error') {
                    this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
                } else if (error === '404 - Not Found') {
                    this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
                } else {
                    this.errorMessage = error;
                }
            })
        
    }

}
