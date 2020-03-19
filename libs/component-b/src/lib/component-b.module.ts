import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentBComponent } from './component-b/component-b.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ComponentBComponent],
  exports:[ComponentBComponent]
})
export class ComponentBModule {}
