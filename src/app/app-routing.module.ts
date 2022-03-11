import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormularioRegistroComponent } from './component/formulario-registro/formulario-registro.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path: "formulario-registro", component: FormularioRegistroComponent },
  {path: "AppComponent", component: AppComponent},
  {path: "HeaderComponent", component: HeaderComponent},
  {path: "FooterComponent", component: FooterComponent},
  {path: "HomeComponent", component: HomeComponent},
  {path: "RegistroComponent", component: RegistroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
