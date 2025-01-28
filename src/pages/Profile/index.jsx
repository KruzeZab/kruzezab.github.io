import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import ProfileBadge from '../../components/Badge/ProfileBadge';
import {
  ACCOMPLISHMENTS,
  EDUCATION,
  EXPERIENCES,
  PROFILE_BADGES,
  PROJECTS,
} from '../../data';
import SingleProject from '../../components/SingleProject';
import Header from '../../components/Header';
import SingleEducation from './SingleEducation';

function Bio() {
  return (
    <div className="flex flex-col gap-3 mb-6 text-gray-700 dark:text-gray-100 tracking-wide text-sm">
      <p>{"Hi there! I'm Kaushal. <3"}</p>
      <p>
        {
          "I'm a React Developer crafting sleek and powerful UI's. I bring in creative and innovative approach."
        }
      </p>
      <p>{' I love contributing to open source projects. <3'}</p>
    </div>
  );
}

function Skills() {
  return (
    <div className="flex gap-4 flex-wrap mb-8">
      {PROFILE_BADGES.map((badge) => (
        <ProfileBadge
          key={badge.text}
          text={badge.text}
          icon={badge.icon}
          extraClasses={badge.extraClass}
        />
      ))}
    </div>
  );
}

function MetaInfo() {
  return (
    <ul className="flex gap-2 mb-4 flex-wrap text-gray-600 dark:text-gray-100">
      <li className="text-sm">@kruzezab,</li>
      <li className="text-sm">React Developer,</li>
      <li className="text-sm">Kathmandu</li>
    </ul>
  );
}

function Socials() {
  return (
    <ul className="flex gap-5 mb-6 text-gray-600 dark:text-gray-100">
      <li>
        <Link
          to="https://github.com/kruzezab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-xl" />
        </Link>
      </li>
      <li>
        <Link
          to="https://twitter.com/KruZe_Zab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="text-xl" />
        </Link>
      </li>
      <li>
        <Link
          to="https://www.linkedin.com/in/kaushal-bhattarai-664b9123a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-xl" />
        </Link>
      </li>
    </ul>
  );
}

function Projects() {
  return (
    <div className="mb-12">
      <h2 className="project-title">Projects</h2>

      {/* Project List */}
      <div className="item-wrapper">
        {PROJECTS.map((project) => (
          <SingleProject
            key={project.title}
            tags={project.tags}
            title={project.title}
          >
            {/* Links */}
            <div className="flex flex-col gap-2 mb-4 text-gray-700 dark:text-gray-100 text-sm">
              {project.githubLink && (
                <div>
                  Github:{' '}
                  <a
                    target="_blank"
                    href={project.githubLink}
                    className="text-blue-500 hover:underline"
                  >
                    {project.githubLink}
                  </a>
                </div>
              )}

              {project.liveDemoLink && (
                <div>
                  Live Demo:{' '}
                  <a
                    target="_blank"
                    href={project.liveDemoLink}
                    className="text-blue-500 hover:underline"
                  >
                    {project.liveDemoLink}
                  </a>
                </div>
              )}
            </div>

            {/* Project Description */}
            <ul className="list-wrapper">
              {project.content.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link
              to={`project/${project.id}`}
              replace
              className="text-sm text-blue-500 hover:underline block mt-3 ml-4"
            >
              Read more...
            </Link>
          </SingleProject>
        ))}
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="mb-12">
      <h2 className="project-title">Education</h2>

      <div className="md-border-left">
        {EDUCATION.map((education) => (
          <div className="mb-8" key={education.title}>
            <SingleEducation
              title={education.title}
              university={education.university}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Accomplishments() {
  return (
    <div>
      <h2 className="project-title">Acomplishments</h2>

      {/* Accomplishment List */}

      <div className="item-wrapper">
        {ACCOMPLISHMENTS.map((project) => (
          <Link to={`accomplish/${project.id}`}>
            <SingleProject
              key={project.title}
              tags={project.tags}
              title={project.title}
            >
              {/* Project Description */}
              <ul className="list-wrapper">
                {project.content.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <span className="text-sm text-blue-500 hover:underline block mt-3 ml-4">
                Read more...
              </span>
            </SingleProject>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="mb-12">
      <h2 className="project-title">Work Experience</h2>

      {/* Accomplishment List */}

      <div className="item-wrapper">
        {EXPERIENCES.map((exp) => (
          <SingleProject
            key={exp.title}
            tags={exp.tags}
            title={exp.title}
          >
            {/* exp Description */}
            <ul className="list-wrapper">
              {exp.content.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SingleProject>
        ))}
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img
        className="h-28 w-28 sm:w-32 sm:h-32 rounded-full object-cover outline outline-4 outline-offset-1 outline-pink-400"
        src="/assets/images/avatar.png"
        alt="avatar"
      />
    </div>
  );
}

const Profile = () => {
  return (
    <>
      <Header />
      <div className="flex justify-between mb-4">
        {/* Avatar */}
        {<Avatar />}

        {/* Resume Button */}
        {/* <div>
          <a
            href="./resume.pdf"
            target="_blank"
            className="bg-gray-100 text-sm tracking-wide p-3 rounded-lg font-bold text-gray-500 hover:bg-gray-200 duration-150 transition-all hover:shadow dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
          >
            View Resume
          </a>
        </div> */}
      </div>
      <h1 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 mb-2 tracking-wide">
        Kaushal Bhattarai
      </h1>

      {/* Meta Information */}
      {<MetaInfo />}

      {/* Social Links */}
      {<Socials />}

      {/* Bio Info */}
      {<Bio />}

      {/* Skill Tags */}
      {<Skills />}

      {/* Experience */}
      {<Experience />}

      {/* Education */}
      {<Education />}

      {/* Projects */}
      {<Projects />}

      {/* Accomplishments */}
      {<Accomplishments />}
    </>
  );
};

export default Profile;
