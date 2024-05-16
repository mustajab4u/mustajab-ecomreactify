const StripeCheckout = () => {
    const handleSubmit = e => {
        e.preventDefault();
    };
    return (
        <div className='w-full lg:w-1/2 xl:w-1/3 mx-auto my-36'>
            <form
                className='p-6 rounded-lg shadow-md bg-white'
                onSubmit={handleSubmit}
            >
                <button
                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
                    type='submit'
                >
                    This will Not Work For Some reason Thank you
                </button>
            </form>
        </div>
    );
};

export default StripeCheckout;
