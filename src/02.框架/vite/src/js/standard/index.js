export class ChatRoomStandard {
  constructor(
    username,
    message,
    avatar,
    popupColor,
    type = "others"
  ) {
    this._username = username;
    this._message = message;
    this._avatar = avatar;
    this._popupColor = popupColor;
    this._type = type;
  }

  get avatar() {
    return this._avatar;
  }

  set avatar(value) {
    this._avatar = value;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
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
}