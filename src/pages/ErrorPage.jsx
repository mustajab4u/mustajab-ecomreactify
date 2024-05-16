import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='w-full px-16 md:px-0 h-[70vh] flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl'>
                <p className='text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider'>
                    404
                </p>
                <p className='text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider mt-4'>
                    Page Not Found
                </p>
                <p className='mt-4 pb-4 border-b-2 text-center'>
                    Sorry, the page you are looking for could not be found.
                </p>
                <Link
                    className='flex items-center space-x-2 bg-violet-400 hover:bg-violet-600 text-white px-4 py-2 mt-6 rounded transition1000 duration-150'
                    to={'/'}
                >
                    Return Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
