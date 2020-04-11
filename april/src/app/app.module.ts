import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { FormsModule} from '@angular/forms';
import {ApiService} from './api.service';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { AuthInterceptorService } from './auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    UsersDetailComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule, MatCardModule, MatButtonModule, MatToolbarModule, MatFormFieldModule , MatInputModule, MatListModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService,  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
