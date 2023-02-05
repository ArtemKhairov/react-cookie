import React from "react";
import { makeAutoObservable } from "mobx";

class ThemeStore {
  theme: string | undefined;

  constructor() {
    makeAutoObservable(this);
    this.theme = document.cookie.split("; ").find((row) => row.startsWith("theme="))?.split("=")[1];
  }

  getTheme(): string | undefined{
    return this.theme;
  }

  changeTheme(): void {
    let theme = this.theme === "light" ? "dark" : "light";
    document.cookie = `theme=${theme}`;
    this.theme = theme;
  }
}
const themeStore = new ThemeStore();
export default themeStore;
