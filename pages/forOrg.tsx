import { useSelector } from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
import { IRootState } from '../store';
import { useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const forOrg = () => {
    const dialog: any = useRef();
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <section className="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
            <div className="bg-white">
                <section className="relative">
                    <div className="h-[20px] w-full bg-transparent md:h-[30px] lg:h-[30px]"></div>
                </section>
                <div className="container">
                    <div className="my-[30px] flex gap-3">
                        <div className="h-[40px] w-[7px] bg-primary"></div>
                        <h5 id="sheader" className="text-[2.15rem] font-[700] text-black">
                            For Organizations
                        </h5>
                    </div>
                    <div className="flex flex-col border-t-2 border-dotted border-gray/10 lg:flex-row" data-aos="fade-up" data-aos-duration="1000">
                        {/* First Child Div with Responsive Grid and 70% width */}
                        <div className="mb-10 grid w-full grid-cols-1 gap-0 md:w-[70%] md:auto-rows-auto md:grid-cols-2 lg:w-[70%] lg:grid-cols-2">
                            <div className="flex flex-row p-5">
                                <a href="/DPB" className="group flex h-[100%] w-full border-b-2 border-dotted border-gray/30">
                                    <div className="flex w-full flex-row items-start justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                            <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                        </div>
                                        <div className="flex w-[80%] flex-col">
                                            <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">Data Protection Basics</h2>
                                            <p className="text-justify text-black">
                                            Data Protection Basics: is a comprehensive guide aimed at demystifying the essentials of data protection.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="flex flex-row p-5">
                                <a href="/knowYourObli" className="group flex h-[100%] w-full border-b-2 border-dotted border-gray/30 ">
                                    <div className="flex w-full flex-row items-start justify-between ">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                            <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                        </div>
                                        <div className="flex w-[80%] flex-col">
                                            <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">Know Your Obligations</h2>
                                            <p className="text-justify text-black">
                                            This section contains information about the obligations placed on organisations under data protection Authories. 
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="flex flex-row p-5">
                                <a href="/doyouKnowaboutData" className="group flex h-[100%] w-full border-b-2 border-dotted border-gray/30 ">
                                    <div className="flex w-full flex-row items-start justify-between ">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                            <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                        </div>
                                        <div className="flex w-[80%] flex-col">
                                            <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">What do you need to know about data</h2>
                                            <p className="text-justify text-black">
                                            This is a critical information that individuals should understand regarding data handling, especially in the context of privacy. 
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className=" flex flex-row p-5">
                                <a href="/RFEM" className="group flex h-[100%] w-full border-b-2 border-dotted border-gray/30">
                                    <div className="flex w-full flex-row items-start justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                            <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                        </div>
                                        <div className="flex w-[80%] flex-col">
                                            <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">Direct Marketing: Opt-In and Opt-Out</h2>
                                            <p className="text-justify text-black">
                                            involves emails, texts, calls, and mail. Clear Opt-In and Opt-Out options ensure privacy and legal compliance.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className=" flex flex-row p-5">
                                <a href="/codeOfCondect" className="group flex h-[100%] w-full border-b-2 border-dotted border-gray/30 ">
                                    <div className="flex w-full flex-row items-start justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                            <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                        </div>
                                        <div className="flex w-[80%] flex-col">
                                            <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">Code of Conduct & Registration</h2>
                                            <p className="text-justify text-black">
                                                {' '}
                                                mandates lawful data processing, registration with the authority, and regular public updates.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className=" flex flex-row p-5">
                                <a href="/education" className="group flex h-[100%] w-full border-b-2 border-dotted border-gray/30 ">
                                    <div className="flex w-full flex-row items-start justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                            <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                        </div>
                                        <div className="flex w-[80%] flex-col">
                                            <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">Education</h2>
                                            <p className="text-justify text-black">
                                                {' '}
                                                Educational institutions handle a vast amount of personal data related to students, staff, and faculty. 
                                               
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className=" flex flex-row p-5">
                            <a href="/education" className="group flex h-[100%] w-full border-b-2 border-dotted border-gray/30 ">
                                    <div className="flex w-full flex-row items-start justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                            <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                        </div>
                                        <div className="flex w-[80%] flex-col">
                                            <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black"> Health</h2>
                                            <p className="text-justify text-black">
                                            Healthcare providers must prioritize the confidentiality and security of patient data 
                                            to maintain trust and comply with legal requirements.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className=" flex flex-row p-5">
                            <a href="/banking" className="group flex h-[100%] w-full border-b-2 border-dotted border-gray/30 ">
                                    <div className="flex w-full flex-row items-start justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                            <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                        </div>
                                        <div className="flex w-[80%] flex-col">
                                            <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black"> Banking and Finance</h2>
                                            <p className="text-justify text-black">
                                            Healthcare providers must prioritize the confidentiality and security of patient data 
                                            to maintain trust and comply with legal requirements.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                </div>
                            <div className=" flex flex-row p-5">
                            <div className=" flex flex-row border-b-2 border-dotted border-gray/30 p-5">
                                <a href="/DRE" className="group flex w-full">
                                    <div className="flex w-full flex-row items-start justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                            <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                        </div>
                                        <div className="flex w-[80%] flex-col">
                                            <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">
                                            Data Protection Impact Assessment (DPIA) & Privacy by Design and Default
                                            </h2>
                                            <p className="text-justify text-black">
                                                When a data controller is involved in processing activities that are likely to result in high risk to the
                                                rights,
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            </div>
                            <div className=" flex flex-row p-5">
                            <a href="/telecommunications" className="group flex h-[100%] w-full border-b-2 border-dotted border-gray/30 ">
                                    <div className="flex w-full flex-row items-start justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                            <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                        </div>
                                        <div className="flex w-[80%] flex-col">
                                            <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">Telecommunications</h2>
                                            <p className="text-justify text-black">
                                            Telecom companies handle vast amounts of user data, including personal information and communication records.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className=" flex flex-row  p-5">
                                <a href="/e-Governance" className="group flex w-full border-b-2 border-dotted border-gray/30">
                                    <div className="flex w-full flex-row items-start justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                            <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                        </div>
                                        <div className="flex w-[80%] flex-col">
                                            <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">E-Governance and Online Data Collection</h2>
                                            <p className="text-justify text-black">
                                            E-Governance, or electronic governance, refers to the use of digital technologies and the internet to provide public services, 
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className=" flex flex-row  p-5">
                                <a href="/complainceChecklist" className="group flex w-full border-b-2 border-dotted border-gray/30">
                                    <div className="flex w-full flex-row items-start justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                            <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                        </div>
                                        <div className="flex w-[80%] flex-col">
                                            <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">Compliance Checklist for Data Protection & Risk Management</h2>
                                            <p className="text-justify text-black">
                                            ensures data law compliance with policy, inventory, consent, rights, security, audits, training, and breach response.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* <div className=" flex flex-row  p-5">
                                <a href="/Registration&RM" className="group flex w-full border-b-2 border-dotted border-gray/30">
                                    <div className="flex w-full flex-row items-start justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:rotate-180 group-hover:ease-in-out">
                                            <FaArrowRight style={{ color: 'white', fontSize: '18px' }} />
                                        </div>
                                        <div className="flex w-[80%] flex-col">
                                            <h2 className="text-[20px] font-extrabold text-primary group-hover:text-black">Registration & Risk Managment</h2>
                                            <p className="text-justify text-black">
                                                Data controllers of major importance must register with the Data Protection Authority.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div> */}
                        </div>
                        {/* Second Child Div with a Single Column and 30% width */}
                        <div className="grid w-full grid-cols-1 gap-4 md:w-[30%] lg:w-[30%]">
                            <div
                                className="group flex flex-col bg-none p-6 px-4 transition dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.01] dark:to-transparent dark:drop-shadow-none dark:hover:border-gray-dark dark:hover:bg-gray-dark sm:px-6"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="mb-8">
                                    <h3 className="text-[22px] font-black text-black">TAKE ACTION</h3>
                                </div>
                                <ul className="text-md space-y-5 pb-7 font-bold">
                                    <li className="flex items-center justify-between rounded-2xl bg-black transition hover:scale-105 hover:bg-black hover:text-white">
                                        <a href="/E-Services" className="flex h-full w-full items-center justify-between p-5">
                                            <p className="text-white hover:text-white">REGISTER</p>
                                            <div className="pr-3">
                                                <svg width="26" height="26" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="">
                                                        <circle cx="8" cy="8" r="8" fill="#ffff" />
                                                    </g>
                                                    <path
                                                        d="M5 8H11M11 8L8 5M11 8L8 11"
                                                        stroke="black"
                                                        stroke-width="1.6"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="flex items-center justify-between rounded-2xl bg-black transition hover:scale-105 hover:bg-black hover:text-white">
                                        <a href="/E-Services" className="flex h-full w-full items-center justify-between p-5">
                                            <p className="text-white">FILE A COMPLAINT</p>
                                            <div className="pr-3">
                                                <svg width="26" height="26" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="">
                                                        <circle cx="8" cy="8" r="8" fill="white" />
                                                    </g>
                                                    <path
                                                        d="M5 8H11M11 8L8 5M11 8L8 11"
                                                        stroke="black"
                                                        stroke-width="1.6"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="flex items-center justify-between rounded-2xl bg-black transition hover:scale-105 hover:bg-black hover:text-white">
                                        <a href="/E-Services" className="flex h-full w-full items-center justify-between p-5">
                                            <p className="text-white">
                                                REPORT A <br /> DATA BREACH
                                            </p>
                                            <div className="pr-3">
                                                <svg width="26" height="26" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="">
                                                        <circle cx="8" cy="8" r="8" fill="white" />
                                                    </g>
                                                    <path
                                                        d="M5 8H11M11 8L8 5M11 8L8 11"
                                                        stroke="black"
                                                        stroke-width="1.6"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="flex items-center justify-between rounded-2xl bg-black transition hover:scale-105 hover:bg-black hover:text-white">
                                        <a href="/faq" className="flex h-full w-full items-center justify-between p-5">
                                            <p className="text-white">FAQ's</p>
                                            <div className="pr-3">
                                                <svg width="26" height="26" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="">
                                                        <circle cx="8" cy="8" r="8" fill="white" />
                                                    </g>
                                                    <path
                                                        d="M5 8H11M11 8L8 5M11 8L8 11"
                                                        stroke="black"
                                                        stroke-width="1.6"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default forOrg;
