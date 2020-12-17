import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user';


@Component({
  selector: 'user-menu.component',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() user: User = null;

  constructor() { }

  ngOnInit() {
  }

}