export default function Skills() {
    return (
        <section id="skill" className="flex flex-col justify-center items-center bg-secondary text-white py-10 px-5">
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full md:w-3/4">
                <div className="md:w-1/2 text-left">
                    <h1 className="text-white font-bold border-b-4 mb-5 inline-block">
                        Technical Skills
                    </h1>
                    <ul className="list-disc list-inside space-y-2" role="list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>Redux</li>
                    </ul>
                </div>
                <div className="md:w-1/2 flex flex-col items-center">
                    <h1 className="text-white font-bold border-b-4 mb-5 inline-block">
                        Non-Technical Skills
                    </h1>
                    <div className="text-left">
                        <ul className="list-disc list-inside space-y-2" role="list">
                            <li>Teamwork</li>
                            <li>Decision Making</li>
                            <li>Problem Solving</li>
                            <li>Communication</li>
                            <li>Adaptability</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
