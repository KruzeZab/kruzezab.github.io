import PropTypes from 'prop-types';
import ProjectBadge from '../Badge/ProjectBadge';

const renderTag = (tag) => {
  return (
    <ProjectBadge
      text={tag.title}
      extraClass={tag.extraClass}
      icon={tag.icon}
    />
  );
};

const SingleProject = ({ title, tags, children }) => {
  return (
    <div>
      {/* Project Badges */}
      <div className="flex mb-4 items-center flex-wrap gap-4">
        {tags.map((tag) => renderTag(tag))}
      </div>

      {/* Project Title */}
      <h3 className="text-lg text-gray-800 dark:text-gray-200 xl:text-xl font-extrabold mb-4">
        {title}
      </h3>

      {children}
    </div>
  );
};

SingleProject.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SingleProject;
