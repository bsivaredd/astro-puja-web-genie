
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DailyHoroscope from "./pages/DailyHoroscope";
import PujaServices from "./pages/PujaServices";
import AstrologyConsultation from "./pages/AstrologyConsultation";
import Gemstones from "./pages/Gemstones";
import VedicAstrology from "./pages/VedicAstrology";
import Numerology from "./pages/Numerology";
import Vastu from "./pages/Vastu";
import ZodiacSign from "./pages/ZodiacSign";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/daily-horoscope" element={<DailyHoroscope />} />
          <Route path="/puja-services" element={<PujaServices />} />
          <Route path="/astrology-consultation" element={<AstrologyConsultation />} />
          <Route path="/gemstones" element={<Gemstones />} />
          <Route path="/vedic-astrology" element={<VedicAstrology />} />
          <Route path="/numerology" element={<Numerology />} />
          <Route path="/vastu" element={<Vastu />} />
          <Route path="/zodiac/:sign" element={<ZodiacSign />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
