import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm('xlekwvlz');
    if (state.succeeded) {
        return (
            <p className='text-center text-2xl font-bold text-white p-12 w-full gradBg select-none'>
                <span className='text-green-400'> Thanks</span> for joining 🤝
                US
            </p>
        );
    }
    return (
        <div className='py-16 px-6 lg:px-16 relative'>
            <div className='max-w-7xl mx-auto'>
                <div className='absolute inset-0 gradBg rounded-lg shadow-2xl transform -skew-x-12 -z-50'></div>
                <h3 className='w-fit text-3xl font-semibold text-center mb-8 relative z-10'>
                    Join Our{' '}
                    <span className='font-bold text-violet-800'>NewSletter</span>{' '}
                    and get 20% off
                    <div className='underlineImp'></div>
                </h3>

                <form className='relative z-10' onSubmit={handleSubmit}>
                    <div className='flex flex-col md:flex-row items-center md:gap-8'>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Email Address'
                            className='outline-none focus:shadow-2xl shadow-md rounded-lg p-3 mb-4 w-full md:w-1/2'
                            required
                        />
                        <ValidationError
                            prefix='Email'
                            field='email'
                            errors={state.errors}
                        />
                        <button
                            disabled={state.submitting}
                            type='submit'
                            className='shadow-md rounded-lg py-3 font-bold px-6 mb-4 text-white bg-teal-500 hover:bg-teal-600 transition1000 w-full md:w-fit'
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
