import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Nft } from 'src/app/modules/dashboard/models/nft';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: '[room-table-item]',
  standalone: true,
  imports: [CommonModule,AngularSvgIconModule, CurrencyPipe],
  templateUrl: './room-table-item.component.html',
  styleUrls: ['./room-table-item.component.scss']
})
export class RoomTableItemComponent {
  @Input() auction = <Nft>{};


}
