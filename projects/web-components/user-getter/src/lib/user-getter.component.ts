import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'lib-user-getter',
  templateUrl: 'user-getter.component.html',
  styleUrls: ['user-getter.component.scss']
})
export class UserGetterComponent implements OnChanges {
  @Input() username: string;

  selectedUser: string;

  constructor(private httpClient: HttpClient) {}

  ngOnChanges() {
    console.log('[ELEMENT] ngOnChanges');
    this.httpClient
      .get(`https://jsonplaceholder.typicode.com/users/${this.username}`)
      .subscribe(r => this.selectedUser = (r  as any).name);
  }
}
