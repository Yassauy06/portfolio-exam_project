import React from 'react';

const Experience = () =>{
    return(
        <div className='experience'>
            <h1 className='title-page'>Experience</h1>
            <article className='experience-article'>
               <div className="experience_job">
               <div className='job_1'>
                    <h3>Google</h3>
                    <p>2023-2024</p>
                </div>
                <div className='job_2'>
                    <h3>Front-end developer</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</p>
                </div>
               </div>
                <div className="experience_job">
                     <div className='job_1'>
                        <h3>Twitter</h3>
                        <p>2022</p>
                    </div>
                    <div className='job_2'>
                        <h3>Web developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</p>
                    </div>
                </div>
               
            </article>
        </div>
    )
}
export default Experience;