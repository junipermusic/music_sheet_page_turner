// define a component
import { Component, OnInit } from '@angular/core';
import { Test } from './test.service';

@Component({
  selector: 'test-hello-world',
  templateUrl: './test.component.html',
  styleUrls: ['./app.component.css']
})
export class TestComponent implements OnInit {

  message: any = {};

  constructor(private test: Test) { };

  ngOnInit() {
    this.test.executeTestService().subscribe(data => {
      this.message = data;
      console.log(data);
    });
  }
}