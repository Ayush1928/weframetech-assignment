import AdvertisementSection from '@/components/AdvertisementSection';
import ArticlesSections from '@/components/ArticlesSections';
import ContentOptions from '@/components/ContentOptions';
import StoriesSection from '@/components/StoriesSection';
import * as React from 'react';

interface IPageProps {
}

const Page: React.FunctionComponent<IPageProps> = (props) => {
  return (
    <div className='p-6'>
        <h1 className='text-2xl xl:text-3xl font-semibold'>Hello Admin,</h1>
        <p className='text-xs xl:text-[15px] text-[#A0A3BD] mt-2'>This is what we got for you today.</p>
        <ContentOptions />
        <ArticlesSections />
        <StoriesSection />
        <AdvertisementSection />
    </div>
  );
};

export default Page;
