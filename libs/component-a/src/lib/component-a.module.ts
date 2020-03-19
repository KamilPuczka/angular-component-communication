import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './component-a/component-a.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    ComponentAComponent
  ],
  declarations: [ComponentAComponent]
})
export class ComponentAModule {}
