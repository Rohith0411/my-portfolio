import Resumeimg from"../assest/Resumeimg.jpg"
import resume from "../assest/Resume.png"

export default function Resume(){

    return <section id= "resume" className="flex flex-col md:flex-row bg-primary px-5">
        <div className="md:w-1/2 flex justify-center md:justify-end py-5">
            <img className="w-[300px]" src={Resumeimg}/>
        </div>
        <div className="md:w-1/2 flex  justify-center">
            <div className="flex flex-col justify-center text-white">
                <h1 className="text-4xl text-white font-bold border-b-4 mb-7 w-[140px]">Resume</h1>
                <p className="pb-5">You can view my Resume <a className="btn" href={resume} download={resume} target="_blank">Download</a></p>
            </div>
        </div>
    </section>
}