import bag from '../../image/bag.png'
import logo from '../../image/logo.png'
import google from '../../image/google.png'
import twitter from '../../image/twitter.png'
import instragram from '../../image/instragram.png'

const Footer = () => {
    return (
        <footer className='bg-[#F99F1C] '>
            <div className='w-full lg:w-10/12 lg:mx-auto flex pb-28'>
                <div className='w-full flex flex-col justify-between mt-10 gap-y-10 lg:gap-0'>
                    {/* subscribe input */}
                    <div className="relative w-10/12 lg:w-7/12 mx-auto lg:m-0 bg-transparent">
                        <input type="text" placeholder="Search audiobook" className="w-full ps-2 py-3 pe-36 md:pe-48 rounded-xl focus:outline-[#F99F1C]" />
                        <button className='absolute top-0 right-0 pe-2 md:bg-[#FC6011] flex justify-end text-[#FC6011] md:text-[#F8FAFC] md:ps-12 py-2 pe-4 rounded-xl gap-x-2 my-1 me-2'>
                            <span>Subscribe</span>
                            <svg className='hidden md:block' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.50004 11.9998C1.50004 11.8009 1.57906 11.6102 1.71971 11.4695C1.86036 11.3289 2.05113 11.2498 2.25004 11.2498H19.9395L15.219 6.53085C15.1493 6.46112 15.094 6.37833 15.0563 6.28722C15.0185 6.19612 14.9991 6.09846 14.9991 5.99985C14.9991 5.90123 15.0185 5.80358 15.0563 5.71247C15.094 5.62136 15.1493 5.53858 15.219 5.46885C15.2888 5.39912 15.3716 5.3438 15.4627 5.30606C15.5538 5.26833 15.6514 5.2489 15.75 5.2489C15.8487 5.2489 15.9463 5.26833 16.0374 5.30606C16.1285 5.3438 16.2113 5.39912 16.281 5.46885L22.281 11.4688C22.3509 11.5385 22.4063 11.6213 22.4441 11.7124C22.4819 11.8035 22.5014 11.9012 22.5014 11.9998C22.5014 12.0985 22.4819 12.1962 22.4441 12.2873C22.4063 12.3784 22.3509 12.4612 22.281 12.5308L16.281 18.5308C16.2113 18.6006 16.1285 18.6559 16.0374 18.6936C15.9463 18.7314 15.8487 18.7508 15.75 18.7508C15.6514 18.7508 15.5538 18.7314 15.4627 18.6936C15.3716 18.6559 15.2888 18.6006 15.219 18.5308C15.1493 18.4611 15.094 18.3783 15.0563 18.2872C15.0185 18.1961 14.9991 18.0985 14.9991 17.9998C14.9991 17.9012 15.0185 17.8036 15.0563 17.7125C15.094 17.6214 15.1493 17.5386 15.219 17.4688L19.9395 12.7498H2.25004C2.05113 12.7498 1.86036 12.6708 1.71971 12.5302C1.57906 12.3895 1.50004 12.1988 1.50004 11.9998Z" fill="#F8FAFC" />
                            </svg>
                            <svg className='md:hidden' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.50004 11.9998C1.50004 11.8009 1.57906 11.6102 1.71971 11.4695C1.86036 11.3289 2.05113 11.2498 2.25004 11.2498H19.9395L15.219 6.53085C15.1493 6.46112 15.094 6.37833 15.0563 6.28722C15.0185 6.19612 14.9991 6.09846 14.9991 5.99985C14.9991 5.90123 15.0185 5.80358 15.0563 5.71247C15.094 5.62136 15.1493 5.53858 15.219 5.46885C15.2888 5.39912 15.3716 5.3438 15.4627 5.30606C15.5538 5.26833 15.6514 5.2489 15.75 5.2489C15.8487 5.2489 15.9463 5.26833 16.0374 5.30606C16.1285 5.3438 16.2113 5.39912 16.281 5.46885L22.281 11.4688C22.3509 11.5385 22.4063 11.6213 22.4441 11.7124C22.4819 11.8035 22.5014 11.9012 22.5014 11.9998C22.5014 12.0985 22.4819 12.1962 22.4441 12.2873C22.4063 12.3784 22.3509 12.4612 22.281 12.5308L16.281 18.5308C16.2113 18.6006 16.1285 18.6559 16.0374 18.6936C15.9463 18.7314 15.8487 18.7508 15.75 18.7508C15.6514 18.7508 15.5538 18.7314 15.4627 18.6936C15.3716 18.6559 15.2888 18.6006 15.219 18.5308C15.1493 18.4611 15.094 18.3783 15.0563 18.2872C15.0185 18.1961 14.9991 18.0985 14.9991 17.9998C14.9991 17.9012 15.0185 17.8036 15.0563 17.7125C15.094 17.6214 15.1493 17.5386 15.219 17.4688L19.9395 12.7498H2.25004C2.05113 12.7498 1.86036 12.6708 1.71971 12.5302C1.57906 12.3895 1.50004 12.1988 1.50004 11.9998Z" fill="#FC6011" />
                            </svg>
                        </button>
                    </div>
                    <div className='flex flex-col-reverse lg:flex-row lg:justify-between items-center lg:items-end gap-y-10 lg:gap-0'>
                        <div>
                            <img src={logo} className='mx-auto lg:m-0 mb-2' alt="" />
                            <h3 className='font-semibold text-black lg:mt-4 lg:ms-2'>Copyright©Tripp.All right reserved</h3>
                        </div>
                        <div className='h-fit flex gap-x-1'>
                            <a href=""><img src={google} alt="" /></a>
                            <a href=""><img src={twitter} alt="" /></a>
                            <a href=""><img src={instragram} alt="" /></a>
                        </div>
                    </div>
                </div>
                <img src={bag} className='hidden lg:block w-4/12' alt="" />
            </div>
        </footer>
    );
};

export default Footer;