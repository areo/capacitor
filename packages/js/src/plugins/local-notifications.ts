import { AvocadoPlugin, Plugin } from '../plugin';


@AvocadoPlugin({
  name: 'LocalNotifications',
  id: 'com.avocadojs.plugin.localnotifications'
})
export class LocalNotifications extends Plugin {

  schedule(notification: LocalNotification) {
    return this.send('schedule', notification);
  }

}


export interface NotificationScheduleAt {
  month?: number;
  day?: number;
  year?: number;
  hour?: number;
  minute?: number;
  second?: number;
}

export interface LocalNotification {
  title: string;
  body: string;
  identifier: string;
  scheduleAt?: NotificationScheduleAt
}