import {Suspense} from "react";
import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {App} from '@/components/App';
import {About} from "@/pages/about";
import {Shop} from "@/pages/shop";

const container = document.getElementById('root');
if (!container) {
  throw new Error('add div with #root to the public/index.html')
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/about',
        element: <Suspense fallback="Loading..."><About /></Suspense>
      },
      {
        path: '/shop',
        element: <Suspense fallback="Loading..."><Shop /></Suspense>
      }
    ]
  },
]);

const root = createRoot(container);
root.render(<RouterProvider router={router} />);