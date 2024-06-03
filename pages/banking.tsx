import Link from 'next/link';
import Faq from '../components/Faq';
import Testimonial from '../components/Testimonial';
import BlogSlider from '../components/BlogSlider';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Head from 'next/head';

const Banking = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <Head>
                <title>Data Protection Athourity</title>
            </Head>
            <section className="overflow-hidden bg-black pt-[82px] lg:pt-[106px]">
                <section className="bg-white py-[4rem] md:py-[4rem] lg:py-[4rem]">
                    <div className="container">
                        <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
                            <h4>Banking: Data Security and Compliance</h4>
                        </div>
                        <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h2 className=" text-[24px] font-extrabold text-black">Banking: Data Security and Compliance</h2>
                            <p className="pt-12 text-lg font-semibold">
                            The banking and finance sector handles sensitive financial information 
                            that requires stringent protection measures.
.

                            </p>
                        </div>
                        <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h2 className=" text-[24px] font-extrabold text-black">Data Collection and Processing in Banking:</h2>
                            <p className="pt-12 text-lg font-semibold">
                            Customer Data: Personal information, account details, transaction history.
                            Financial Transactions: Payment data, credit card information, loan applications.
                             Operational Data: Employee records, internal financial data, audit logs.

                            </p>
                            <ul>
                                <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                    <div
                                        className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                        data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                        data-aos-duration="1000"
                                    >
                                        
                                    </div>
                                  
                                </li>
                              
                            </ul>
                            <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                                <h2 className=" text-[24px] font-extrabold text-black">Best Practices </h2>
                                <p className="pt-12 text-lg font-semibold">
                                    
                                </p>
                                <ul>
                                    <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                        <div
                                            className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                            data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                            data-aos-duration="1000"
                                        >
                                         
                                        </div>
                                        <div className="lg:w-4/6">
                                            <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                            Data Encryption: Encrypt sensitive financial data during storage and transmission.










                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                        <div
                                            className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                            data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                            data-aos-duration="1000"
                                        >
                                           
                                        </div>
                                        <div className="lg:w-4/6">
                                            <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                            Access Control: Implement strict access controls and authentication mechanisms.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                        <div
                                            className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                            data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                            data-aos-duration="1000"
                                        >
                                            
                                        </div>
                                        <div className="lg:w-4/6">
                                            <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                            Fraud Prevention: Use advanced monitoring tools to detect and prevent fraud.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                        <div
                                            className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                            data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                            data-aos-duration="1000"
                                        >
                                            
                                        </div>
                                        <div className="lg:w-4/6">
                                            <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                            Compliance: Ensure compliance with financial data protection regulations (e.g., AML, GDPR).
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                        <div
                                            className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                            data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                            data-aos-duration="1000"
                                        >
                                            
                                        </div>
                                        <div className="lg:w-4/6">
                                            <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                            Data Minimization: Collect only necessary financial data and limit retention periods.
                                            </p>
                                        </div>
                                        </li>
                                        <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                        <div
                                            className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                            data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                            data-aos-duration="1000"
                                        >

                                        </div>
                                        <div className="lg:w-4/6">
                                            <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                            Customer Education: Educate customers about data protection best practices.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                                <h2 className=" text-[24px] font-extrabold text-black">Benefits:</h2>
                                <p className="pt-12 text-lg font-semibold">
                                Enhances data security and reduces the risk of data breaches.



                                    <span className="mt-5">
                                        <br /> Builds customer trust and confidence in financial institutions.
                                    </span>{' '}
                                    <span className="mb-5">
                                        {' '}
                                        <br />
                                        Ensures compliance with regulatory requirements. <br />
                                    </span>{' '}
                                    {/* <span>
                                        {' '}
                                        Employees: All employees involved in data transfer must be trained in data protection principles and follow the
                                        established protocols to ensure data security.
                                    </span> */}
                                </p>
                            </div>
                            {/* <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                                <h2 className=" text-[24px] font-extrabold text-black">Legal and Regulatory Compliance</h2>
                                <p className="pt-12 text-lg font-semibold">
                                    Organizations must comply with relevant data protection laws and regulations when transferring data. In Somalia, this
                                    includes adhering to the Data Protection Act, which mandates the secure handling and transfer of personal data.
                                    Non-compliance can result in legal penalties and damage to an organization's reputation.
                                </p>
                            </div>
                            <div className="my-10 text-center ltr:lg:text-left rtl:lg:text-right">
                                <h2 className=" text-[24px] font-extrabold text-black">Practical Advice for Organizations</h2>
                                <p className="pt-12 text-lg font-semibold">
                                    Data Transfer Agreements: Establish clear agreements with third parties involved in data transfer. These agreements should
                                    outline the responsibilities and expectations for data security. <br /> Monitoring and Reporting: Implement monitoring
                                    systems to detect and respond to suspicious activities during data transfer. Establish reporting mechanisms for any data
                                    breaches or security incidents. <br /> Employee Training: Regularly train employees on data protection and secure data
                                    transfer practices. Awareness and education are key to preventing data breaches. <br /> Data Minimization: Transfer only the
                                    data that is necessary for the intended purpose. Reducing the amount of data transferred minimizes the risk of exposure.{' '}
                                    <br /> By following these guidelines, organizations can ensure the secure transfer of data and maintain compliance with data
                                    protection laws. For further information or assistance, please contact DPA Somalia at [dpa infor].
                                </p>
                            </div> */}
                        </div>
                        {/* <ul>
                            <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    01
                                </div>
                                <div className="lg:w-4/6">
                                    <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                        The processing is carried out by a public authority or body.
                                    </p>
                                </div>
                            </li>
                            <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    02
                                </div>
                                <div className="lg:w-4/6">
                                    <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                        The core activities of the controller or the processor consist of processing operations, which require regular and
                                        systematic monitoring of data subjects on a large scale.
                                    </p>
                                </div>
                            </li>
                            <li className="flex border-t-2 border-dotted border-black/5 py-10 dark:border-gray-dark lg:items-center">
                                <div
                                    className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                    data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                    data-aos-duration="1000"
                                >
                                    03
                                </div>
                                <div className="lg:w-4/6">
                                    <p className="pb-3 text-[18px] font-semibold text-black dark:text-white">
                                        The core activities of the controller or the processor consist of processing on a large scale of special categories of
                                        data or personal data relating to criminal convictions and offences.
                                    </p>
                                </div>
                            </li>
                        </ul> */}
                    </div>
                </section>
            </section>
        </div>
    );
};
export default Banking;
