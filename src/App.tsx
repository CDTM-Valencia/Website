import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Guidebook from './pages/Guidebook';
import Submission from './pages/Submission';
import ExternalRedirect from './pages/ExternalRedirect';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const queryClient = new QueryClient();

const App = () => (
  <>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Local redirects to match vercel.json */}
            <Route
              path="/apply"
              element={
                <ExternalRedirect to="https://app.formbricks.com/s/cmfbao9yi1e94y5012v76rwwq" />
              }
            />
            <Route path="/discord" element={<ExternalRedirect to="" />} />
            <Route path="/calendar" element={<ExternalRedirect to="" />} />
            <Route
              path="/team-registration"
              element={
                <ExternalRedirect to="https://app.formbricks.com/s/cmfbamgbo1e5fwu01mpaxfiue" />
              }
            />
            <Route
              path="/submission"
              element={
                <ExternalRedirect to="https://app.formbricks.com/s/cmfbaltkm3hk7ux01ymba3h9i" />
              }
            />
            <Route path="/projects/2025" element={<Projects />} />
            <Route path="/projects/2025/:projectId" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/guidebook" element={<Guidebook />} />
            {/* Keep legacy internal submission page if needed */}
            {/* <Route path="/submission" element={<Submission />} /> */}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
    <Analytics />
    <SpeedInsights />
  </>
);

export default App;
