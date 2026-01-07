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