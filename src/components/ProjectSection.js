import { Link } from 'react-router-dom';
import './ProjectSection.css';

function ProjectSection({ projects }) {
    const viewAll = `View All ⇢`;

    return (
        <section id='projects'>
            <header>
                <h2><span>#</span>projects</h2>
                <Link to='/projects'><button id='view-all-btn'>{viewAll}</button></Link>
            </header>
            <main>
                {
                    projects.map((value, index) => {
                        if (index >= 4) {
                            return <></>;
                        }
                        return (
                            <section className='project-card' key={`${value}-${index}`}>
                                <p id='madeby'>{value.madeby.slice(0, 31)}</p>
                                <div className='row'>
                                    <img src={value.image} alt={`${value.title}-${index}`} />
                                    <h3>{value.title}</h3>
                                </div>
                                <p id='desc'>{value.description.slice(0, 120).trim().concat('...')}</p>
                                <div className='btns'>
                                    <a href={value.demo}><button>DEMO</button></a>
                                    <a href={value.url}><button>CODE</button></a>
                                </div>
                            </section>
                        );
                    })
                }
            </main>
        </section>
    );

}

export default ProjectSection;