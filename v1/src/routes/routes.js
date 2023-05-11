import { lazy } from "react";

export const Layout = lazy(()=>import('../layout/layout.jsx'));
export const Home = lazy(()=>import('../pages/home/home.jsx'));
export const Chat = lazy(()=>import('../pages/chat/chat.jsx'));
export const Settings = lazy(()=>import('../pages/settings/settings.jsx'));