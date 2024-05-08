import { Routes } from '@angular/router';
import { DepartmentComponent } from './pages/department/department.component';
import { Component } from '@angular/core';
import { NavbarComponent } from './unit/navbar/navbar.component';
import { CarouselComponent } from './unit/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"Department",component:DepartmentComponent},
    {path:"contact",component:ContactComponent}
];
