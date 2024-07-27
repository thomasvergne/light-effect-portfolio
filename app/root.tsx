import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  // Adding PNG favicon
  return [
    { rel: "icon", type: "image/png", href: "/picture.png" },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="dark:bg-black bg-white">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
