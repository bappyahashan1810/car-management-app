
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router';

function App() {
  return (
    <div className="max-w-7xl mx-10">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
