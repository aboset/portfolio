import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-surface-base text-white">
        <Header />
        <Routes>
          <Route path="/"         element={<Home />}     />
          <Route path="/projetos" element={<Projects />} />
          <Route path="*"         element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
