import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { PROJECTS } from '../../data';
import { useEffect, useMemo } from 'react';
import SingleProject from '../../components/SingleProject';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((project) => project.id === id);

  useEffect(() => {
    if (!project) navigate('/');
  }, [project]);

  const renderLinks = useMemo(
    () => (
      <div className="flex flex-col gap-2 my-4 text-gray-700 dark:text-gray-100 text-sm">
        {project.githubLink && (
          <div>
            Github:{' '}
            <a
              href={project.githubLink}
              className="text-blue-500 hover:underline"
            >
              {project.githubLink}
            </a>
          </div>
        )}

        <div>
          Live Demo:{' '}
          <a
            href={project.liveDemoLink}
            className="text-blue-500 hover:underline"
          >
            {project.liveDemoLink}
          </a>
        </div>
      </div>
    ),
    []
  );

  return (
    <>
      <Header hasBack />
      <SingleProject tags={project.tags} title={project.title}>
        {/* Links */}
        {renderLinks}
        {/* project Description */}
        <ul className="list-wrapper mb-8">
          {project.content.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {/* Screenshots */}
        <div>
          <h2 className="project-title">Screenshots</h2>
          <div className="flex flex-col gap-8">
            {project.screenshots.map((image) => (
              <div>
                <h4 className="text-gray-700 dark:text-white font-semibold text-lg mb-4">
                  {image.title}
                </h4>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="rounded-lg w-full h-96"
                />
              </div>
            ))}
          </div>
        </div>
      </SingleProject>
    </>
  );
};

export default ProjectDetail;
