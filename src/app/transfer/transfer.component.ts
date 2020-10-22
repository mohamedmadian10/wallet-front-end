import { TransferService } from './../_services/transfer.service';
import { AuthService } from './../_services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
})
export class TransferComponent implements OnInit {
  currentBalance;
  constructor(private transferService: TransferService) {}

  ngOnInit(): void {}

  onTransfer(form: NgForm) {
    this.transferService
      .createTransfer(form.value.from, form.value.to, form.value.balance)
      .subscribe((result) => {
        console.log(result)
        this.currentBalance = result["from"].balance
      });
  }
}
