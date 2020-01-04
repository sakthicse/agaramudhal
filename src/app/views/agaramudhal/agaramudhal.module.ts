import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgaramudhalRoutes, AgaramudhalComponents } from './agaramudhal.routing';
import { MatCardModule, MatIconModule, MatTooltipModule, MatListModule } from '@angular/material';
import { SharedComponentsModule } from 'app/shared/components/shared-components.module';
import { SessionsModule } from '../sessions/sessions.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    AgaramudhalRoutes,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatListModule,
    SharedComponentsModule,
    FlexLayoutModule,
    SessionsModule
  ],
  declarations: [
    AgaramudhalComponents
  ]
})

export class AgaramudhalModule { }
