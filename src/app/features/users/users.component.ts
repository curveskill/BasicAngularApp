import { Component, OnInit } from '@angular/core';
import { UtillsService } from 'src/app/services/utills.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private util:UtillsService) { }

  ngOnInit(): void {
    this.util.showSuccess("testing","Success")
  }

}
