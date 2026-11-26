
import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Network } from '@capacitor/network';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private onlineSubject = new BehaviorSubject<boolean>(
    navigator.onLine
  );

  online$ = this.onlineSubject.asObservable();

  constructor(private ngZone: NgZone) {
    this.initializeNetwork();
    this.listenToBrowserNetwork();
  }

  private async initializeNetwork(): Promise<void> {
    try {
      const status = await Network.getStatus();

      this.ngZone.run(() => {
        this.onlineSubject.next(
          navigator.onLine && status.connected
        );
      });

      await Network.addListener(
        'networkStatusChange',
        status => {
          this.ngZone.run(() => {
            this.onlineSubject.next(
              navigator.onLine && status.connected
            );
          });
        }
      );
    } catch (error) {
      console.error('Network detection error:', error);
    }
  }

  private listenToBrowserNetwork(): void {
    window.addEventListener('online', () => {
      this.ngZone.run(() => {
        this.onlineSubject.next(true);
      });
    });

    window.addEventListener('offline', () => {
      this.ngZone.run(() => {
        this.onlineSubject.next(false);
      });
    });
  }
}
