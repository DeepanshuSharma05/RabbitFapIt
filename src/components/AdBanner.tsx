
import React from 'react';

interface AdBannerProps {
  adId: string;
  className?: string;
  label?: string;
}

const AdBanner = ({ adId, className = "", label }: AdBannerProps) => {
  return (
    <div className={`w-full flex justify-center ${className}`}>
      {/* Visual indicator box for ad placement */}
      <div className="border-2 border-dashed border-pink-500 bg-pink-500/10 rounded-lg p-4 min-h-[120px] flex items-center justify-center max-w-full">
        <div className="text-center">
          <div className="text-pink-400 font-semibold text-sm mb-1">
            AD PLACEMENT: {label || adId}
          </div>
          <div className="text-pink-300 text-xs opacity-75">
            Banner Advertisement
          </div>
        </div>
      </div>
      
      {/* Actual ad script - hidden for now to show visual indicators */}
      <script 
        type="text/javascript" 
        dangerouslySetInnerHTML={{
          __html: `
            var a = document.createElement('div'); a.id = '${adId}'; a.className = '_3eca654a6';
            var b = document.currentScript; if (b.parentElement) b.parentElement.insertBefore(a, b);
            var c = document.getElementsByTagName('head')[0];
            var d = document.createElement('script'); d.type = "text/javascript"; d.src = "//prscripts.com/d/?resource=pubJS";
            if (!window.prpubappended && !window.prpubappendedlocal) {
            window.prpubappendedlocal = true; c.appendChild(d);
            }
          `
        }} 
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default AdBanner;
