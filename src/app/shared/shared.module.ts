// Angular modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// External modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

// Components
import { ProgressBarComponent } from './components/blocks/progress-bar/progress-bar.component';
import { ToastComponent } from './components/blocks/toast/toast.component';

// Forms
import { FormConfirmComponent } from './components/forms/form-confirm/form-confirm.component';

// Modals
import { ModalWrapperComponent } from './components/modals/modal-wrapper/modal-wrapper.component';

// Layouts
import { LayoutHeaderComponent } from './components/layouts/layout-header/layout-header.component';
import { PageLayoutComponent } from './components/layouts/page-layout/page-layout.component';

// Pipes

// Directives
import { VideoComponent } from './components/video/video.component';
import { ModalWrapperDirective } from './directives/modal-wrapper.directive';

@NgModule({
  imports: [
    // Angular modules
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // External modules
    TranslateModule,
    AngularSvgIconModule,
    NgbModule,
  ],
  declarations: [
    // Components
    ToastComponent,
    ProgressBarComponent,
    VideoComponent,

    // Forms
    FormConfirmComponent,

    // Modals
    ModalWrapperComponent,

    // Layouts
    LayoutHeaderComponent,
    PageLayoutComponent,

    // Pipes

    // Directives
    ModalWrapperDirective,
  ],
  exports: [
    // Angular modules
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // External modules
    TranslateModule,
    AngularSvgIconModule,
    NgbModule,

    // Components
    ToastComponent,
    ProgressBarComponent,
    VideoComponent,

    // Forms
    FormConfirmComponent,

    // Modals
    ModalWrapperComponent,

    // Layouts
    LayoutHeaderComponent,
    PageLayoutComponent,

    // Pipes

    // Directives
    ModalWrapperDirective,
  ],
  providers: [],
})
export class SharedModule {}
