import { MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import article1 from "../../public/article1.jpg"
import article2 from "../../public/article2.jpg"
import article3 from "../../public/article3.jpg"
import profilePicture2 from "../../public/profilePicture2.jpg"
interface IArticlesSectionsProps {
}

const ArticlesSections: React.FunctionComponent<IArticlesSectionsProps> = (props) => {
    const articles = [
        {
            image: article1,
            category: "BUSINESS",
            status: "Created",
            date: "20 Sep 2022",
            heading: "7 Rules of Effective Branding",
            description: "Why Branding matters for your Business",
            tags: ["Branding", "Communication", "Branding"],
        },
        {
            image: article2,
            category: "Economy",
            status: "Published",
            date: "20 Sep 2022",
            heading: "Research on biodiversity an...",
            description: "Lorem ipsum dolor sit amet, consectetur",
            tags: ["World", "Population"],
        },
        {
            image: article3,
            category: "POLITICS",
            status: "Published",
            date: "20 Sep 2022",
            heading: "Close and historical ties to h...",
            description: "Lorem ipsum dolor sit amet, consectetur",
            tags: ["Politics", "Defence"],
        },
        {
            image: article3,
            category: "POLITICS",
            status: "Published",
            date: "20 Sep 2022",
            heading: "Close and historical ties to h...",
            description: "Lorem ipsum dolor sit amet, consectetur",
            tags: ["Politics", "Defence"],
        },
    ]
    return (
        <div className='flex flex-col w-full px-2'>
            <div className='flex justify-between my-6'>
                <h1 className='text-2xl font-semibold'>Top Articles</h1>
                <Link href={"/content/articles"} className='text-[#9058FF] text-lg hover:underline'>See All</Link>
            </div>
            <div className='flex gap-x-4 overflow-x-auto scrollbar pb-2 justify-stretch'>
                {articles.map((article,index) => (
                    <div className='flex flex-col p-4 min-w-[380px] rounded-md bg-white gap-y-3 ' key={index}>
                        <Image src={article.image} width={3600} height={2400} alt={article.heading} className='rounded-md' loading='eager' />
                        <div className='flex justify-between items-center'>
                            <p className='flex font-extrabold text-[#9058FF]'>
                                {article.category} &nbsp;
                                <span className='flex items-center flex-row font-semibold text-[#D9D9D9]'>
                                    <div className='h-1 w-1 rounded-full bg-[#D9D9D9]'></div>
                                    &nbsp; {article.date}
                                </span>
                            </p>
                            <div className='flex gap-x-2 font-semibold'>
                                <Image src={profilePicture2} width={720} height={480} alt='Profile Picture' className='rounded-full h-6 w-6' loading='eager' />
                                Maria Doe
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='text-xl font-semibold'>{article.heading}</p>
                            <div className='py-2 px-4 text-sm text-[#7950F2] bg-[#E3D5FF] font-semibold rounded-md'>Created</div>
                        </div>
                        <p className='text-[#A0A3BD]'>{article.description}</p>
                        <div className='flex flex-row flex-wrap gap-2'>
                            {article.tags.map((tag,index) => (
                                <div className='text-[#A0A3BD] bg-[#F8FAFB] py-2 px-4 rounded-md w-min' key={index}>
                                    {tag}
                                </div>
                            ))}
                        </div>
                        <div className='flex items-center gap-x-2 mt-auto'>
                            <button className='w-5/6 bg-[#E8E9FF] text-[#7750F1] py-3 px-auto rounded-lg font-semibold'>
                                View
                            </button>
                            <button className='bg-[#F8FAFB] w-1/6 py-3 rounded-lg flex justify-center'>
                                <MoreHorizontal className='text-[#7750F1]'/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArticlesSections;
