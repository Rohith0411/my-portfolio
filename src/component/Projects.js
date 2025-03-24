import webimg1 from "../assest/paperproject.png"
import webimg2 from "../assest/pega project.webp"
import webimg3 from "../assest/Screenshot (88).png"

export default function Project(){

    return <section id= "projects" className="flex flex-col justify-center bg-primary px-5 py-20">
        <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl text-white font-bold border-b-4 mb-7 w-[140px]">Projects</h1>
          <p className="text-white">These are some of my best projects. I have built these with Reactjs, TailwindCss, pega, HTML, CSS, check them out.</p>
        </div>
        </div>
        <div className ="w-full">
            <div className ="flex flex-col md:flex-row px-10 gap-10">
               <div className = "relative">
                <img className = "h-[250px] w-[500px]" src={webimg1}/>
                <div className = "project-content">
                    <p className ="text-center px-2 py-3 text-white">Citified Drift Enhancement Prediction From Diverse Source Hetrogenous Data Analysis And Prediction Graph Drive In:
                    Navigating the fluid currents of city life but also establishes a new standard for predictive efficiency and harmonious urban
                    mobility.Published in Googlescholar(2024)</p>
                    <div className="flex justify-center">
                    <a className= "btn1" target="_blank" href="https://www.psvpec.in/jcres/2024_2/A5.pdf">View Project</a>
                    </div>
                </div>
            </div>
            <div className = "relative">
                <img className = "h-[250px] w-[500px]" src={webimg2}/>
                <div className = "project-content">
                    <p className = "text-center px-5 py-5 text-white"> Canteen Automation:Canteen Automation The objective of this use case is to
                    digitalize the institution or the organization.By using this application the 
                    wastage of the food will be reduced created by [PEGA platform]</p>
                    <div className="flex justify-center">
                    <a className= "btn1" target="_blank" href="#">View Project</a>
                    </div>
                </div>
            </div>
            <div className="relative">
                <img className = "h-[250px] w-[500px]" src={webimg3}/>
                <div className = "project-content">
                    <p className = "text-center px-5 py-5 text-white">A E-commerce Website. Built with HTML5, CSS3.</p>
                    <div className="flex justify-center">
                    <a className= "btn1" target="_blank" href="#">View Project</a>
                    </div>
                </div>
            </div>
        </div>        
        </div>
    </section>
}