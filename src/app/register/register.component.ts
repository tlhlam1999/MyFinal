import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { User } from '../models/user';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    form: FormGroup;

    constructor(private fb: FormBuilder,
        private authService: AuthService,
        private router: Router) {

        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            username:  ['', Validators.required],
            firstName: [''],
            lastName: [''],
            userName: [''],
            phone: [''],
            address: [''],
        });
    }

    register() {
        const val = this.form.value;

        if (val.email && val.password) {
            const user: User = {
                FirstName: val.firstName,
                LastName: val.lastName,
                Address: val.address,
                Email: val.email,
                Password: val.password,
                Phone: val.phone,
                UserName: val.username
            };
            this.authService.register(user)
                .subscribe(
                    () => {
                        console.log("User is registed in");
                        this.router.navigateByUrl('/');
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        }
    }
}
