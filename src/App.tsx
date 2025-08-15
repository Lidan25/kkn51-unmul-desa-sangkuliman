import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VillageProfile from "./pages/VillageProfile";
import KKNMembers from "./pages/KKNMembers";
import Home from "./pages/Home";
import GaleriDokumentasi from "./pages/GaleriDokumentasi";
import Tourism from "./pages/Tourism";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/galeri-dokumentasi" element={<GaleriDokumentasi />} />
          <Route path="/profil-desa" element={<VillageProfile />} />
          <Route path="/wisata" element={<Tourism />} />
          <Route path="/anggota-kkn" element={<KKNMembers />} />
 
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
