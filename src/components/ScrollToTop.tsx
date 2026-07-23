import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Instantly scrolls the window to (0,0) every time the route changes.
 * Must be rendered *inside* <BrowserRouter>.
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

export default ScrollToTop;
