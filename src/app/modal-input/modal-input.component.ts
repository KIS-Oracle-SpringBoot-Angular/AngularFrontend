import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal-input',
  templateUrl: './modal-input.component.html',
  styleUrls: ['./modal-input.component.css']
})
export class ModalInputComponent implements OnInit {

  private value: string;
  private operation: number;

  constructor() { }

  ngOnInit() {
  }

}
