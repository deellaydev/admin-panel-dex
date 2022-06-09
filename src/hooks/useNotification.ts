import {message} from "antd";


  export const errorNotification = (text: string, duration?: number) => {
    return message.error(text, duration)
  }

  export const successNotification = (text: string, duration?: number) => {
    return message.success(text, duration)
  }

