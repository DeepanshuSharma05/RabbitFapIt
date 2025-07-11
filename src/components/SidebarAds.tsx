
import React from 'react';
import AdBanner from './AdBanner';

interface SidebarAdsProps {
  side: 'left' | 'right';
}

const SidebarAds = ({ side }: SidebarAdsProps) => {
  const leftAdIds = ['_2609848', '_2609852', '_2609853'];
  const rightAdIds = ['_2609849', '_2609855', '_2609857'];
  
  const adIds = side === 'left' ? leftAdIds : rightAdIds;

  return (
    <div className="sticky top-4 space-y-4">
      {adIds.map((adId, index) => (
        <div key={adId} className="w-full max-w-[160px]">
          <AdBanner 
            adId={adId} 
            label={`${side.toUpperCase()} SIDEBAR ${index + 1}`}
            className="min-h-[250px]"
          />
        </div>
      ))}
    </div>
  );
};

export default SidebarAds;
