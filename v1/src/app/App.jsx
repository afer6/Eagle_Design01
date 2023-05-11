import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Suspense } from 'react';
import { Chat, Home, Layout, Settings } from '../routes/routes';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div></div>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div></div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "chat",
        element: (
          <Suspense fallback={<div></div>}>
            <Chat />
          </Suspense>
        ),
      },
      {
        path: "settings",
        element: (
          <Suspense fallback={<div></div>}>
            <Settings />
          </Suspense>
        ),
      },
    ],
  },
]);





function App() {
  return <RouterProvider router={router} />;
}

export default App;
