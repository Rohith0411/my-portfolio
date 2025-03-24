import Aboutimg from"../assest/Rohith_A_photo-removebg-preview.png"

export default function About(){

    const config ={
        line1 :'Hi, This is Rohith. I am a Fullstack Developer. I bulit a beautiful and responsive website with Reactjs and TailwindCSS.',
        line2 :'I am proficient in Frontend skills like Reactjs, HTML, CSS, Javascript, Redux Toolkit, TailwindCSS, and also Backend like Nodejs, Mangodb, SQL and many more.',
        line3 :'Seeking a position in life to utilize my skills and abilities and achieve professional growth while being resourceful, innovative and flexible. To add valuable assets to your esteemed organization as an active member.'   
     } 

    return <section id= "about" className="flex flex-col md:flex-row bg-secondary px-5">
        <div className="md:w-1/2 py-5">
            <img src={Aboutimg}/>
        </div>
        <div className="md:w-1/2 flex  justify-center">
            <div className="flex flex-col justify-center text-white">
                <h1 className="text-4xl text-white font-bold border-b-4 mb-7 w-[180px]">About Me</h1>
                <p className="pb-5">{config.line1}</p>
                <p className="pb-5">{config.line2} </p>
                <p className="pb-5">{config.line3} </p>
            </div>
        </div>
    </section>
}