import Link from 'next/link';
import Faq from '../components/Faq';
import Testimonial from '../components/Testimonial';
import BlogSlider from '../components/BlogSlider';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Head from 'next/head';
import { IoIosArrowForward } from 'react-icons/io';

const DoyouKnowaboutData = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <Head>
                <title>Data Protection Athourity</title>
            </Head>
            <section className="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
                <section className="bg-white py-[4rem] md:py-[4rem] lg:py-[4rem]">
                    <div className="container">
                        <div className="heading text-center font-normal ltr:lg:text-left rtl:lg:text-right">
                            <h4>What do you need to know about data</h4>
                            <p className="pt-12 text-lg font-semibold">
                            They gonna be 4 link inside the top one.
                            </p>
                        </div>

                        <div className="group ml-2 mt-5 flex items-center text-[20px] font-semibold text-black/80 underline hover:text-primary">
                            <IoIosArrowForward className="" />
                            <a href="/DataTransfer" className="text-blue-600 ml-2 no-underline">
                            DataTransfer
                            </a>
                        </div>
                        <div className="ml-2 mt-5 flex items-center text-[20px] font-semibold text-black/80 underline hover:text-primary">
                            <IoIosArrowForward className="" />
                            <a href="/Cross-BorderDataTransfers" className="text-blue-600 ml-2 no-underline">
                            Cross-BorderDataTransfers
                            </a>
                        </div>
                        <div className="ml-2 mt-5 flex items-center text-[20px] font-semibold text-black/80 underline hover:text-primary">
                            <IoIosArrowForward className="" />
                            <a href="/DRESA" className="text-blue-600 ml-2 no-underline">
                            DRESA
                            </a>
                        </div>
                        <div className="ml-2 mt-5 flex items-center text-[20px] font-semibold text-black/80 underline hover:text-primary">
                            <IoIosArrowForward className="" />
                            <a href="/DataBreach" className="text-blue-600 ml-2 no-underline">
                            DataBreach
                            </a>
                        </div>
                     
                    </div>
                </section>
            </section>
        </div>
    );
};
export default DoyouKnowaboutData;
