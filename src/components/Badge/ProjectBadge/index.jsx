import PropTypes from 'prop-types';

const ProjectBadge = ({ text, icon, extraClass }) => {
  const className = `flex items-center gap-1 rounded text-xs tracking-wider px-4 py-2 font-bold ${extraClass}`;

  return (
    <div className={className}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

ProjectBadge.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  extraClass: PropTypes.string.isRequired,
};

export default ProjectBadge;
