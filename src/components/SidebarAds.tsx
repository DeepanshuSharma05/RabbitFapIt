
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
    <div className="hidden lg:flex lg:flex-col space-y-6">
      {adIds.map((adId) => (
        <AdBanner key={adId} adId={adId} />
      ))}
    </div>
  );
};

export default SidebarAds;
