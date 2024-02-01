import { MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

interface IArticlesSectionsProps {
}

const ArticlesSections: React.FunctionComponent<IArticlesSectionsProps> = (props) => {
    const articles = [
        {
            image: "https://s3-alpha-sig.figma.com/img/4ff6/844d/4f86ff4a77123ece7ddd1fe82c2c13f8?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bkRnFSNVezIXPvjSezw4mBGCXxuLcO4KQEE1XYSCtL11RdgXwlHZtJ4nYDbHMA90akexx8ZiBsBi~J6idQr0C2rsJGS3qpF33uWPfTWRDi-NDsB3H1G6Qr-2q3uc44FQxwqM9tPtNcx4DZapKcYcn8Pc1M8o0BqAZjSDbosG15XhcPyGTVXjlKLic-EV~KVTiE0~m3zuVfjM1nx7PIKGaCdEr7K2WgSI60iIAJWkFZmxS5QcKX4k9ZLR2H9CZhI954LDXClthjLmAbNspxw6tkSmf0g144hut0FrNRV735TOeUSNJu-t3z5aGWCMX7Cvd6p5CexTn74ySRGIz3sqUA__",
            category: "BUSINESS",
            status: "Created",
            date: "20 Sep 2022",
            heading: "7 Rules of Effective Branding",
            description: "Why Branding matters for your Business",
            tags: ["Branding", "Communication", "Branding"],
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/ddff/a4af/52e696eb282535fabbfb56ca1ad391de?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XH13RPw4Oe31kKJNABSudOCZdJJmaB7a2MwpwVuq3P29hYLWjgFWIg9LuVU~XRzcMA5Lnc3Sec3jVip2bjV4bjAI9S3dOxuPviMF7yg0JeW3F9ab1urpckJ54d2Eeop6H4Eklt5MbOncca5-yF8iQbiNno7n9nU8vEL5P6xzQBemiHpZcx4sVozaepmFZf7HlkON15a~i0lqh~UC8FwkM~X3ppGA7LWi9B6cy0j9NVJlRaE1mtWA7bmGN1WjSA2kuzM-kboPrJBn67XXnDV4tfV7CzMbXu7MJf5ez7SH8vBeTJ~ac8OhaRzxsX9py-JFPtJ2GP1xWH9RCpAG5iWkwQ__",
            category: "Economy",
            status: "Published",
            date: "20 Sep 2022",
            heading: "Research on biodiversity an...",
            description: "Lorem ipsum dolor sit amet, consectetur",
            tags: ["World", "Population"],
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/ed59/b9c0/3e20f7b62c55087feb793f69d4337c80?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ydt-3mASfB6vaXqu2JXlIQ2zRA0WlqQ71~PQs2GojJbVttFuVGNEreNUk4T4-nvRTUwDGlTq5ahF-Huy~IA5wEcQ4tXiFZLHYaczoAODMrBsncOUB87JxL8YHQj57JoynSdVwmtgDCMKlQZZUf~oQPzkMD8OJ5WEy66S41WYUAvk9tUAYhrKNHoiySBYTJ5ZBiJfevci1F5gs56GzdUvz2~qu8Qrgv15puUR16bDzblonDApQ9K7J-byg~xUSKVy6psh10pfD2BJnOvT4Fjt5CiR3TmyAM13B-M8KVwbDPcJiLbCh~paUNauiv-wNBeVbImW78OKMXEJerdVg~QJLg__",
            category: "POLITICS",
            status: "Published",
            date: "20 Sep 2022",
            heading: "Close and historical ties to h...",
            description: "Lorem ipsum dolor sit amet, consectetur",
            tags: ["Politics", "Defence"],
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/ed59/b9c0/3e20f7b62c55087feb793f69d4337c80?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ydt-3mASfB6vaXqu2JXlIQ2zRA0WlqQ71~PQs2GojJbVttFuVGNEreNUk4T4-nvRTUwDGlTq5ahF-Huy~IA5wEcQ4tXiFZLHYaczoAODMrBsncOUB87JxL8YHQj57JoynSdVwmtgDCMKlQZZUf~oQPzkMD8OJ5WEy66S41WYUAvk9tUAYhrKNHoiySBYTJ5ZBiJfevci1F5gs56GzdUvz2~qu8Qrgv15puUR16bDzblonDApQ9K7J-byg~xUSKVy6psh10pfD2BJnOvT4Fjt5CiR3TmyAM13B-M8KVwbDPcJiLbCh~paUNauiv-wNBeVbImW78OKMXEJerdVg~QJLg__",
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
                        <Image src={article.image} width={3600} height={2400} alt={article.heading} className='rounded-md' />
                        <div className='flex justify-between items-center'>
                            <p className='flex font-extrabold text-[#9058FF]'>
                                {article.category} &nbsp;
                                <span className='flex items-center flex-row font-semibold text-[#D9D9D9]'>
                                    <div className='h-1 w-1 rounded-full bg-[#D9D9D9]'></div>
                                    &nbsp; {article.date}
                                </span>
                            </p>
                            <div className='flex gap-x-2 font-semibold'>
                                <Image src={"https://s3-alpha-sig.figma.com/img/24ec/e0a1/20b72a899f9634f3484eed956498fb5c?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QL8JYadn52N0OggbqjYVXXosbJXKfDEBUp00~1a4OLsK7muAvRDs3JAyalAVWxvoKpD5eU3nQW4F45J-WM~zqctg5tTm9qreIh1r--MvYY~61AF0b~Ulr6CCQ4fhm1mHG7UPq31Skb2WjN8Na~MB5HUqTKeW-kcKipg9isqdtonRGPjIR3xbyzES-YlNv5POs-jE1kWDSy4W0iEmpBcUhieReBifd1SjjuiVgmouivc09zyti9gtFtW-NQWbtl41J4d96p34wsmkvyDgPWs9ZkOrio3SVwCQ-S7ySYsVWD3UykMGo0Cp-uTsA~rfjR~Bg3SpMdXcHM1T13GyI4N5IQ__"} width={4096} height={2731} alt='Profile Picture' className='rounded-full h-6 w-6' />
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
