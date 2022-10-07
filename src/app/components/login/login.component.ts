import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from 'src/app/store/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private store: Store) { }

  onSubmit() {
    const user = { username: "login", password: "senha" }
    this.store.dispatch(login(user));
  }

}
