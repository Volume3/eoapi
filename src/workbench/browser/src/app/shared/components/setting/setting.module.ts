import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ElectronService } from '../../../core/services';
import { MessageService } from '../../services/message';

const ANTDMODULES = [
  NzModalModule,
  NzButtonModule,
  NzIconModule,
  NzListModule,
  NzInputModule,
  NzFormModule,
  NzSelectModule,
  NzDividerModule,
  NzTabsModule,
];
@NgModule({
  declarations: [SettingComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, ...ANTDMODULES],
  exports: [SettingComponent],
  providers: [ElectronService, MessageService],
})
export class SettingModule {}
