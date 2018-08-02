import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { WebService } from './web.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { PlayComponent } from './play/play.component';
import { GamesComponent } from './games/games.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'play', component: PlayComponent },
  { path: 'games', component: GamesComponent },
  { path: 'edit', component: EditComponent },
  { path: 'add', component: AddComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    PlayComponent,
    GamesComponent,
    EditComponent,
    AddComponent
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule {}
