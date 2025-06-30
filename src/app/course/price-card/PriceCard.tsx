import { BorderBeam } from '@/app/auth/BorderBeam';
import GridPattern from '@/components/magicui/grid-pattern';
import Meteors from '@/components/magicui/meteors';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

function PriceCard() {
    const { t } = useTranslation();

    return (
        <section className="bg_pattern_blur">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
                <div className='h-[100px]'></div>
                <div className="p-2 md:p-10">
                    <div className="relative max-w-7xl mx-auto">
                        <div className="relative max-w-lg mx-auto rounded-xl shadow-lg overflow-hidden lg:max-w-none lg:flex">
                            <div className="relative flex-1 px-6 py-8 lg:p-12 bg-black ">
                                <h3 className="text-2xl font-extrabold text-white sm:text-3xl">{t('pricing.basic_plan.title')}</h3>
                                <div className="mt-8">
                                    <div className="flex items-center">
                                        <div className="flex-1 border-t-2 border-gray-200"></div>
                                    </div>
                                    <ul role="list" className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                                        <li className="flex items-start lg:col-span-1">
                                            <div className="flex-shrink-0"><svg className="h-5 w-5 text-green-400"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd"></path>
                                            </svg></div>
                                            <p className="ml-3 text-white">{t(`pricing.basic_plan.features.1`)}</p>
                                        </li>
                                        <li className="flex items-start lg:col-span-1">
                                            <div className="flex-shrink-0"><svg className="h-5 w-5 text-green-400"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd"></path>
                                            </svg></div>
                                            <p className="ml-3 text-white">{t(`pricing.basic_plan.features.2`)}</p>
                                        </li>
                                        <li className="flex items-start lg:col-span-1">
                                            <div className="flex-shrink-0"><svg className="h-5 w-5 text-green-400"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd"></path>
                                            </svg></div>
                                            <p className="ml-3 text-white">{t(`pricing.basic_plan.features.3`)}</p>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            {/* <div
                                className="py-8 px-6 text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12 bg-neutral-800">
                                <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-white">
                                    <span>₩9,000</span><span className="ml-3 text-xl font-medium text-gray-50">won</span>
                                </div>
                                <div className="mt-6">
                                    <div className="rounded-md shadow">
                                        <a href="/guide"
                                            className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600">{t('pricing.basic_plan.button')}</a>
                                    </div>
                                </div>
                            </div> */}
                            <BorderBeam />
                            <GridPattern
                                width={30}
                                height={30}
                                x={-1}
                                y={-1}
                                strokeDasharray={"4 2"}
                                className={cn(
                                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                                )}
                            />
                        </div>

                    </div>
                </div>
                 
            </div>
        </section>
    );
}

export default PriceCard;
