import { Component, OnInit } from '@angular/core';
import { ToastNotificationService } from 'src/app/services/toast-notification.service';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.scss'],
})
export class ToastNotificationComponent implements OnInit {
  toast: string;

  constructor(private toastNotificationService: ToastNotificationService) {}

  ngOnInit(): void {
    this.toastNotificationService
      .toasts()
      .subscribe((toast) => (this.toast = toast));
  }
}
