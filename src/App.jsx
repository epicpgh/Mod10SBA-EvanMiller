import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import FavoritesPage from "./pages/FavoritesPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import { FavoritesProvider } from "./context/FavoritesContext";

function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default App;