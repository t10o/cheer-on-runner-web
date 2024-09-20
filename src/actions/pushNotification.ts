"use server";

import { AndroidConfig } from "firebase-admin/messaging";

import { messaging } from "@/libs/firebaseAdmin";

export async function sendPushNotification(
  fcmToken: string,
  name: string,
  message: string,
) {
  const androidConfig: AndroidConfig = {
    priority: "high",
  };

  const notificationMessage = {
    notification: { title: name, body: message },
    token: fcmToken,
    android: androidConfig,
  };

  messaging.send(notificationMessage).catch((error) => {
    throw new Error(error);
  });
}
