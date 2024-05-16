import { useState } from 'react';

const ProductImages = ({ images = [{ url: '' }] }) => {
    const [main, setMain] = useState(images[0]);
    return (
        <div className='shadow-md flex justify-center items-center flex-col h-[500px] xl:w-[600px]'>
            <img
                src={main.url}
                className='object-cover px-4 w-[600px] h-96 object-center'
                alt=''
            />
            <div className='flex justify-center'>
                {images.map((image, index) => {
                    return (
                        <img
                            key={index}
                            src={image.url}
                            className={`rounded-full object-cover cursor-pointer opacity-75 hover:opacity-100 transition1000 shadow-xl hover:shadow-2xl h-12 w-12 m-2 ${
                                image.url === main.url
                                    ? 'border-4 border-violet-100 drop-shadow-2xl hover:shadow-violet-400 transition1000'
                                    : null
                            }`}
                            onClick={() => setMain(images[index])}
                            alt={`Item Image ${
                                image.url === main.url
                                    ? 'border-4 border-violet-100 drop-shadow-2xl hover:shadow-violet-400 transition1000'
                                    : null
                            }`}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ProductImages;
