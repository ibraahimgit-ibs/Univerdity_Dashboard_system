import { atom } from "recoil";

export const showMenu = atom({
    key: "showMenu",
    default: false,
});

export const Open = atom({
  key: "Open",
  default: false,
});

export const modalData = atom({
  key: "modalData",
  default: [],
});

export const roleMethodState = atom({
  key: "roleMethodState",
  default: {
    student: false,
    sbo_admin: false,
    registrar_admin: false,
    super_admin: false
  },
});

export const userDataState = atom({
  key: "userDataState",
  default: {},
});