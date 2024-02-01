import { MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import adv1 from "../../public/adv1.png"
import adv3 from "../../public/adv3.png"
interface IAdvertisementSectionProps {
}

const AdvertisementSection: React.FunctionComponent<IAdvertisementSectionProps> = (props) => {
    const advertisements = [
        {
            image: adv1,
            headline: "Build your business",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, officia.",
            link: "/"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/e7c8/01e5/2b52cb2b593f8af26ff29940da53d504?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=esPY1yds4bmg6mdX31gdJTP4LP1myLme2aBhY5QSJ~RFVWAoYV7zy5RPGKLxHYShyEvn-eVPvI6AKLOJ7LDYtUUZyQHGcRX4gxzHt5K0odeJeIBRB7kolJe8gClt10xZ0c9qGBMRTDFO2R24Db4sgciKtxgtgQOW9AW7U6syTtzjOwmIdoJwVPBtIcg5rBdBfVVMQzr45JeROa~3hk-rW4vfwvi6~jcKao1f2xq44i-p~CCls2vFLeA8Cf98FHZ-F8uHFTx5G~1ziC8nMHwLXNISQhEAU5aDixW53RlRXGwkYVnUV40iNzLHYGLgjYVQaDHw9IXhC4JVu1tB0sELlg__",
            headline: "Libre Coffee",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, officia.",
            link: "/"
        },
        {
            image: adv3,
            headline: "KFC",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, officia.",
            link: "/"
        },
    ]
    return (
        <div className='flex flex-col w-full px-2'>
            <div className='flex justify-between my-6'>
                <h1 className='text-2xl font-semibold'>Advertisement</h1>
                <Link href={"/content/ads"} className='text-[#9058FF] text-lg hover:underline'>See All</Link>
            </div>
            <div className='w-full flex gap-x-4'>
                {advertisements.map((advertisement,index) => (
                    <div className='flex w-1/3 gap-x-2 bg-white rounded-lg max-h-[175px] shadow-xl' key={index}>
                        <Image src={advertisement.image} width={1600} height={1200} alt={advertisement.headline} className='w-1/2 h-[175px] rounded-l-lg object-cover' />
                        <div className='flex p-2 flex-col'>
                            <h1 className='text-xl font-semibold'>
                                {advertisement.headline}
                            </h1>
                            <p className='text-sm mt-auto text-[#A0A3BD]'>
                                {advertisement.description}
                            </p>
                            <div className='flex items-center gap-x-1 mt-auto'>
                                <button className='w-3/4 bg-[#E8E9FF] text-sm text-[#7750F1] py-2 px-auto rounded-lg font-semibold'>
                                    View
                                </button>
                                <button className='bg-[#F8FAFB] w-1/4 py-2 rounded-lg flex justify-center'>
                                    <MoreHorizontal className='text-[#7750F1]' size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdvertisementSection;
