
import React from 'react';

interface AdBannerProps {
  adId: string;
  className?: string;
}

const AdBanner = ({ adId, className = "" }: AdBannerProps) => {
  return (
    <div className={`w-full flex justify-center ${className}`}>
      <script type="text/javascript" dangerouslySetInnerHTML={{
        __html: `
          var a = document.createElement('div'); a.id = '${adId}'; a.className = '_3eca654a6';
          var b = document.currentScript; if (b.parentElement) b.parentElement.insertBefore(a, b);
          var c = document.getElementsByTagName('head')[0];
          var d = document.createElement('script'); d.type = "text/javascript"; d.src = "//prscripts.com/d/?resource=pubJS";
          if (!window.prpubappended && !window.prpubappendedlocal) {
          window.prpubappendedlocal = true; c.appendChild(d);
          }
        `
      }} />
    </div>
  );
};

export default AdBanner;
