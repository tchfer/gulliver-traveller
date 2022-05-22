import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({});
  public hide = true;

  constructor(
    private readonly formBuilder: FormBuilder,
  ) { }

  public ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // public login() {
  //   this.authService.authenticate(this.loginForm.value).subscribe(
  //     ([user]) => {
  //       this.authService.setUser(user);
  //       this.router.navigate(['payments']);
  //     },
  //     (err: HttpErrorResponse) => {
  //       this.snackbar.open('Email ou Senha incorretos', 'Fechar', {
  //         duration: 2000,
  //         panelClass: ['custom-snackbar'],
  //       });
  //     }
  //   );
  // }

}
