export class ChatRoomStandard {
  constructor(
    username,
    message,
    avatar,
    popupColor
  ) {
    this._username = username;
    this._message = message;
    this._avatar = avatar;
    this._popupColor = popupColor;
  }

  get popupColor() {
    return this._popupColor;
  }

  set popupColor(value) {
    this._popupColor = value;
  }

  get username() {
    return this._username;
  }

  set username(value) {
    this._username = value;
  }

  get message() {
    return this._message;
  }

  set message(value) {
    this._message = value;
  }

  get url() {
    return this._avatar;
  }

  set url(value) {
    this._avatar = value;
  }
}