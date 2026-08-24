import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import PageTransition from './components/PageTransition';
import AdminAuthGate from './admin/AdminAuthGate';

/* ─────────────────────────────────────────────
   Lazy Pages
───────────────────────────────────────────── */

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

const Services = lazy(() => import('./pages/Services'));

/* ─────────────────────────────────────────────
   Service Pages
───────────────────────────────────────────── */

const SolarEnergy = lazy(
  () => import('./pages/Services/SolarEnergy')
);

const BuildingConstruction = lazy(
  () => import('./pages/Services/BuildingConstruction')
);

const DesignBuild = lazy(
  () => import('./pages/Services/DesignBuild')
);

const CivilEngineering = lazy(
  () => import('./pages/Services/CivilEngineering')
);

const RoadConstruction = lazy(
  () => import('./pages/Services/RoadConstruction')
);

const InteriorDesign = lazy(
  () => import('./pages/Services/Interior')
);

const PlantMachinery = lazy(
  () => import('./pages/Services/PlantMachinery')
);

const CNCFabrication = lazy(
  () => import('./pages/Services/CNCFabrication')
);

const PetrolHospital = lazy(
  () => import('./pages/Services/PetrolHospital')
);

/* ─────────────────────────────────────────────
   Other Pages
───────────────────────────────────────────── */

const Projects = lazy(() => import('./pages/Projects'));

const ProjectDetail = lazy(
  () => import('./pages/Projects/ProjectDetail')
);

const Industries = lazy(() => import('./pages/Industries'));

const Equipment = lazy(() => import('./pages/Equipment'));

const Safety = lazy(() => import('./pages/Safety'));

const Certifications = lazy(
  () => import('./pages/Certifications')
);

const Careers = lazy(() => import('./pages/Careers'));

const News = lazy(() => import('./pages/News'));

const Contact = lazy(() => import('./pages/Contact'));

const Sales = lazy(() => import('./pages/Sales'));

/* ─────────────────────────────────────────────
   Admin Pages
───────────────────────────────────────────── */

const AdminDashboard = lazy(
  () => import('./admin/Dashboard')
);

const AdminProjects = lazy(
  () => import('./admin/ProjectsAdmin')
);

const AdminGallery = lazy(
  () => import('./admin/GalleryAdmin')
);

const AdminBlog = lazy(
  () => import('./admin/BlogAdmin')
);

const AdminTeam = lazy(
  () => import('./admin/TeamAdmin')
);

const AdminQuotes = lazy(
  () => import('./admin/QuoteRequests')
);

/* ─────────────────────────────────────────────
   Inner Application Layout
───────────────────────────────────────────── */

const AppInner: React.FC = () => {
  const location = useLocation();

  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Scroll to top on every navigation */}
      <ScrollToTop />

      {/* Global Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            borderRadius: '12px',
            fontFamily: 'inherit',
            fontSize: '14px',
          },
        }}
      />

      {/* Navbar hidden on admin routes */}
      {!isAdmin && <Navbar />}

      <main className="flex-grow">

        <Suspense fallback={<LoadingSpinner />}>

          <AnimatePresence
            mode="wait"
            initial={false}
          >

            <Routes
              location={location}
              key={location.pathname}
            >

              {/* ═══════════════════════════════════
                  PUBLIC PAGES
              ═══════════════════════════════════ */}

              <Route
                path="/"
                element={
                  <PageTransition>
                    <Home />
                  </PageTransition>
                }
              />

              <Route
                path="/about"
                element={
                  <PageTransition>
                    <About />
                  </PageTransition>
                }
              />

              {/* ═══════════════════════════════════
                  SERVICES
              ═══════════════════════════════════ */}

              <Route
                path="/services"
                element={
                  <PageTransition>
                    <Services />
                  </PageTransition>
                }
              />

              {/* Solar Energy */}
              <Route
                path="/services/solar-energy"
                element={
                  <PageTransition>
                    <SolarEnergy />
                  </PageTransition>
                }
              />

              {/* Building Construction */}
              <Route
                path="/services/building-construction"
                element={
                  <PageTransition>
                    <BuildingConstruction />
                  </PageTransition>
                }
              />

              {/* Design & Build */}
              <Route
                path="/services/design-build"
                element={
                  <PageTransition>
                    <DesignBuild />
                  </PageTransition>
                }
              />

              {/* Civil Engineering */}
              <Route
                path="/services/civil-engineering"
                element={
                  <PageTransition>
                    <CivilEngineering />
                  </PageTransition>
                }
              />

              {/* Road Construction */}
              <Route
                path="/services/road-construction"
                element={
                  <PageTransition>
                    <RoadConstruction />
                  </PageTransition>
                }
              />

              {/* CNC & Fabrication */}
              <Route
                path="/services/cnc-fabrication"
                element={
                  <PageTransition>
                    <CNCFabrication />
                  </PageTransition>
                }
              />

              {/* Interior Design & Finishes */}
              <Route
                path="/services/interior-design"
                element={
                  <PageTransition>
                    <InteriorDesign />
                  </PageTransition>
                }
              />

              {/* Plant & Machinery Lease & Hire */}
              <Route
                path="/services/plant-machinery"
                element={
                  <PageTransition>
                    <PlantMachinery />
                  </PageTransition>
                }
              />

              {/* Petrol Stations & Hospitals */}
              <Route
                path="/services/Petrol-hospital"
                element={
                  <PageTransition>
                    <PetrolHospital />
                  </PageTransition>
                }
              />

              {/* ═══════════════════════════════════
                  PROJECTS
              ═══════════════════════════════════ */}

              <Route
                path="/projects"
                element={
                  <PageTransition>
                    <Projects />
                  </PageTransition>
                }
              />

              <Route
                path="/projects/:id"
                element={
                  <PageTransition>
                    <ProjectDetail />
                  </PageTransition>
                }
              />

              {/* ═══════════════════════════════════
                  OTHER PUBLIC PAGES
              ═══════════════════════════════════ */}

              <Route
                path="/industries"
                element={
                  <PageTransition>
                    <Industries />
                  </PageTransition>
                }
              />

              <Route
                path="/equipment"
                element={
                  <PageTransition>
                    <Equipment />
                  </PageTransition>
                }
              />

              <Route
                path="/safety"
                element={
                  <PageTransition>
                    <Safety />
                  </PageTransition>
                }
              />

              <Route
                path="/certifications"
                element={
                  <PageTransition>
                    <Certifications />
                  </PageTransition>
                }
              />

              <Route
                path="/careers"
                element={
                  <PageTransition>
                    <Careers />
                  </PageTransition>
                }
              />

              <Route
                path="/news"
                element={
                  <PageTransition>
                    <News />
                  </PageTransition>
                }
              />

              <Route
                path="/contact"
                element={
                  <PageTransition>
                    <Contact />
                  </PageTransition>
                }
              />

              <Route
                path="/sales"
                element={
                  <PageTransition>
                    <Sales />
                  </PageTransition>
                }
              />

              {/* ═══════════════════════════════════
                  ADMIN ROUTES
              ═══════════════════════════════════ */}

              <Route
                path="/admin"
                element={
                  <AdminAuthGate>
                    <AdminDashboard />
                  </AdminAuthGate>
                }
              />

              <Route
                path="/admin/projects"
                element={
                  <AdminAuthGate>
                    <AdminProjects />
                  </AdminAuthGate>
                }
              />

              <Route
                path="/admin/gallery"
                element={
                  <AdminAuthGate>
                    <AdminGallery />
                  </AdminAuthGate>
                }
              />

              <Route
                path="/admin/blog"
                element={
                  <AdminAuthGate>
                    <AdminBlog />
                  </AdminAuthGate>
                }
              />

              <Route
                path="/admin/team"
                element={
                  <AdminAuthGate>
                    <AdminTeam />
                  </AdminAuthGate>
                }
              />

              <Route
                path="/admin/quotes"
                element={
                  <AdminAuthGate>
                    <AdminQuotes />
                  </AdminAuthGate>
                }
              />

              {/* ═══════════════════════════════════
                  FALLBACK
              ═══════════════════════════════════ */}

              <Route
                path="*"
                element={
                  <PageTransition>
                    <Services />
                  </PageTransition>
                }
              />

            </Routes>

          </AnimatePresence>

        </Suspense>

      </main>

      {/* Footer hidden on admin routes */}
      {!isAdmin && <Footer />}

      {/* Glowing Back-to-Top Button */}
      <BackToTop />

    </div>
  );
};

/* ─────────────────────────────────────────────
   Root Application
───────────────────────────────────────────── */

const App: React.FC = () => (
  <Router>
    <AppInner />
  </Router>
);

export default App;