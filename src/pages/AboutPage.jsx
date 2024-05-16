import { useState } from 'react';
import { team, myProcess } from '../utils/constants';
import { PageHero } from '../components';
const About = () => {
    const [currentImage, setCurrentImage] = useState(null);
    const Modal = ({ imageUrl, onClose }) => {
        return (
            <div className='fixed inset-0 z-50 flex justify-center items-center bg-opacity-75 bg-gray-800 select-none'>
                <div className='bg-white p-6 rounded-xl shadow-2xl'>
                    <img
                        src={imageUrl}
                        className='w-80 h-80 object-cover rounded-xl'
                        alt=''
                    />
                    <button
                        className='block mx-auto mt-4 py-2 px-4 text-white bg-blue-500 rounded-lg shadow-xl hover:shadow-2xl transition1000-all duration-300 ease-in-out hover:bg-violet-500'
                        onClick={onClose}
                    >
                        Close Image
                    </button>
                </div>
            </div>
        );
    };

    const teamMembers = (
        <section className='flex justify-between w-full select-none py-6 flex-wrap'>
            {team.map(({ id, age, name, picture, skills }) => {
                return (
                    <div
                        key={id}
                        className='w-[47%] p-7 mx-5 shadow-md rounded-lg transition1000 font-bold'
                    >
                        <div className='flex items-center justify-between gap-6 mb-4 w-full'>
                            <div className='flex items-center'>
                                <img
                                    src={`../../public/${picture}.png`}
                                    className='w-16 h-16 rounded-full object-cover cursor-pointer drop-shadow-2xl'
                                    alt='Image Of Team People'
                                    onClick={() =>
                                        setCurrentImage(
                                            `../../public/${picture}.png`
                                        )
                                    }
                                />
                                <h3 className='text-xl ml-6 gradText'>
                                    {name}
                                </h3>
                            </div>
                            <h3 className='text-sm flex justify-end items-end'>
                                {age} Year Old
                            </h3>
                        </div>
                        <ul className='flex items-center justify-center flex-wrap gap-1'>
                            {skills.map(
                                ({ color, name, backgroundColor }, index) => (
                                    <li
                                        style={{
                                            backgroundColor,
                                            color,
                                        }}
                                        className='px-4 py-2 m-2 rounded-md shadow-xl text-sm transition1000 hover:shadow-2xl hover:scale-110'
                                        key={index}
                                    >
                                        {name}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                );
            })}
        </section>
    );

    return (
        <>
            <PageHero title='About' />
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                <div className='lg:text-center'>
                    <h2
                        className={`text-3xl font-bold mb-4 gradText drop-shadow-md`}
                    >
                        About Me
                    </h2>
                    <p>
                        Hi there! My name is Muhammad Mustjab and I'm a
                        15-year-old web developer. I'm passionate about creating
                        beautiful and functional websites and web applications
                        using various technologies such as HTML, CSS,
                        JavaScript, Tailwind, Bootstrap, React, Next.js,
                        MongoDB, Mongoose, Node, and Express. I'm constantly
                        learning and expanding my skills to stay up-to-date with
                        the latest trends and technologies in the industry.
                    </p>
                </div>
                <div className='mt-10'>
                    <h3
                        className={`text-2xl font-bold mb-4 gradText drop-shadow-md`}
                    >
                        My Expertise
                    </h3>
                    <p>
                        Over the years, I have gained expertise in creating
                        responsive and user-friendly websites and web
                        applications that meet my clients' needs and
                        expectations. I have experience in designing and
                        developing custom websites from scratch as well as using
                        popular frameworks like React and Next.js to build
                        complex web applications. I also have extensive
                        knowledge of databases like MongoDB and Mongoose, which
                        I use to create dynamic and scalable web applications.
                        Additionally, I am skilled in implementing SEO best
                        practices to optimize websites for search engines.
                    </p>
                </div>
                <div className='mt-10'>
                    <h3
                        className={`text-xl font-bold mb-2 gradText drop-shadow-md`}
                    >
                        My Process
                    </h3>
                    <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
                        {myProcess.map(({ title, description }, index) => {
                            return (
                                <div
                                    className='shadow-md p-8 rounded-md hover:shadow-xl transition1000 hover:shadow-neutral-400'
                                    key={index}
                                >
                                    <h4
                                        className={`text-xl font-bold mb-2 gradText drop-shadow-md`}
                                    >
                                        {title}
                                    </h4>
                                    <p>{description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <h3 className='font-bold text-3xl pt-5 text-center'>Our Team</h3>
            {teamMembers}
            {currentImage && (
                <Modal
                    imageUrl={currentImage}
                    onClose={() => setCurrentImage(null)}
                />
            )}
        </>
    );
};

export default About;
