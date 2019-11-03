import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgaramudhalRoutes, AgaramudhalComponents } from './agaramudhal.routing';
import { MatCardModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { SharedComponentsModule } from 'app/shared/components/shared-components.module';
import { NotFoundComponent } from '../sessions/not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    AgaramudhalRoutes,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    SharedComponentsModule
  ],
  declarations: [
    AgaramudhalComponents,
    NotFoundComponent
  ]
})

export class AgaramudhalModule { }
