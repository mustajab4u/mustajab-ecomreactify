import { links, siteName } from '../utils/constants';
const Footer = () => {
    return (
        <footer className='bg-slate-100/90 text-black font-semibold p-8 px-12 shadow-md transition1000 hover:shadow-lg hover:shadow-violet-200 shadow-violet-100  mt-4 select-none '>
            <div className='flex items-center justify-between gap-4 flex-wrap'>
                <h5 className='bg-slate-100/90 shadow-md p-3 rounded-md'>
                    &copy; {new Date().getFullYear()}
                    <span className='gradText font-bold'>
                        &nbsp;&nbsp; {siteName}
                    </span>
                </h5>
                <h5 className='bg-slate-100/90 shadow-md p-3 rounded-md'>
                    All Rights Reserved
                </h5>
            </div>
        </footer>
    );
};
export default Footer;