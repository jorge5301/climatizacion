// Home.jsx
import { NextUIProvider } from "@nextui-org/react";
import Menu from "./components/Menu";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <NextUIProvider>
      <Menu />
      <Hero />
    </NextUIProvider>
  );
}
