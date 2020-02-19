import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from "primeng/menubar";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TableModule } from 'primeng/table';

const prime_ng_modules = [
  InputTextModule,
  ButtonModule,
  MenubarModule,
  TableModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...prime_ng_modules
  ],
  exports: [
    ...prime_ng_modules
  ]
})
export class PrimeNgModule { }
