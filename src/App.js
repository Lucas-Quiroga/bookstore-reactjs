import { Route, Routes, BrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import Create from "./pages/Create";
import View from "./pages/View";
import Store from "./store/Store";

function App() {
  return (
    //store sera el contexto para todas las demas rutas
    <Store>
      <BrowserRouter>
        <Routes>
          //ruta principal que mostrara los libros
          <Route path="/" element={<Index />} />
          //ruta que registrara un libro
          <Route path="create" element={<Create />} />
          //ruta para ver la información del libro que seleccionemos
          <Route path="view/:bookId" element={<View />} />
        </Routes>
      </BrowserRouter>
    </Store>
  );
}

export default App;
