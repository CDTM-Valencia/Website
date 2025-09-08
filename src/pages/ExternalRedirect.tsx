import { useEffect } from 'react';

interface ExternalRedirectProps {
  to: string;
}

const ExternalRedirect = ({ to }: ExternalRedirectProps) => {
  useEffect(() => {
    if (to && typeof window !== 'undefined') {
      window.location.replace(to);
    }
  }, [to]);

  return null;
};

export default ExternalRedirect;
