import { services } from '../utils/constants';
import { FaShippingFast, FaWallet, FaHeart } from 'react-icons/fa';

const Services = () => {
    return (
        <div className='py-16 px-6 lg:px-16'>
            <div className='max-w-7xl mx-auto relative'>
                <div className='absolute inset-0 gradBg transform rounded-xl skew-x-12 -z-50 shadow-2xl'></div>
                <h2 className='w-fit text-3xl text-black font-semibold text-center mb-8'>
                    Our Services
                    <div className='underlineImp'></div>
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative'>
                    {services.map(({ icon, id, text, title }) => {
                        return (
                            <div
                                className='bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition1000 duration-300 relative z-10'
                                key={id}
                            >
                                <div className='flex items-center justify-center h-16 w-16 rounded-full shadow-2xl gradBg text-white mb-4'>
                                    {icon}
                                </div>
                                <h3 className='text-xl font-medium mb-2'>
                                    {title}
                                </h3>
                                <p className='text-base'>{text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Services;
