import DownloadBanner from '@/components/details/DownloadBanner';
import Features from '@/components/details/Features';
import GameSection from '@/components/details/GameSection';
import RelatedGames from '@/components/details/RelatedGames';
import VideoEmbed from '@/components/details/VideoEmbed';
import React from 'react';

const DetailsPage = () => {
    return (
        <div>
            <DownloadBanner />
            <VideoEmbed />
            <GameSection />
            <Features />
            <RelatedGames />
        </div>
    );
};

export default DetailsPage;