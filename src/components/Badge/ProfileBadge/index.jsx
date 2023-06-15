import PropTypes from 'prop-types';

const ProfileBadge = ({ icon, text, extraClasses }) => {
  const className = `flex items-center gap-1 text-sm tracking-wider border px-3.5 py-1.5 rounded-full font-bold ${extraClasses}`;

  return (
    <div className={className}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

ProfileBadge.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  extraClasses: PropTypes.string.isRequired,
};

export default ProfileBadge;
