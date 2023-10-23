import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Nft } from 'src/app/modules/dashboard/models/nft';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: '[employee-table-item]',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule, CurrencyPipe],
  templateUrl: './employee-table-item.component.html',
  styleUrls: ['./employee-table-item.component.scss'],
})
export class EmployeeTableItemComponent {
  @Input() auction = <Nft>{};
}
