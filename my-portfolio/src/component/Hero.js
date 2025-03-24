import MainImg from '../assest/Heroimg-removebg-preview.png';
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineFacebook,AiOutlineInstagram} from "react-icons/ai";

export default function Hero(){

    const config ={
        line1 : "I'm a Full-stack Developer",
    }

    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center font-Main-font'>
        <div className='md:w-1/2'>
            <h1 className=' text-white text-6xl'>Hi, <br/>I'm Rohith
            <p className='text-2xl'>{config.line1}</p>
            </h1>
         <div className='flex py-10'>
            <a  href="#" className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a>
            <a target='_blank' href= 'https://www.linkedin.com/in/rohith-a-6a254120a/' className='pr-5 hover:text-white'><AiOutlineLinkedin size={40} /></a>
            <a href="#" className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
            <a href= 'https://www.instagram.com/rohith_ar_04?igsh=MTlyOXhnYWxpY285Zg==' className='pr-5 hover:text-white'><AiOutlineInstagram size={40}/></a>
         </div>
        
        </div>
        
        <img className="md:w-1/3"src={MainImg}/>
    </section>
}