import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root, { loader as rootLoader, action as rootAction, } from "./routes/root";
import ErrorPage from './error-page'
import Contact, {loader as contactLoader,} from "./routes/contact";
import EditContact , {action as editAction,}from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from "./routes/index";
import TestPage from "./routes/test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      // 默认路由
      { index: true, element: <Index /> },
      { 
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <div>This is error page</div>,
      },
      { 
        path: "test",
        element: <TestPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
