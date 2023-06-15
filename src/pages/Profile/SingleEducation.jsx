import PropTypes from 'prop-types';
import { FaAward } from 'react-icons/fa';

const SingleEducation = ({ title, university }) => {
  return (
    <>
      <h3 className="text-lg text-gray-800  font-extrabold mb-2 dark:text-gray-200">
        {title}
        <FaAward className="inline-block ml-2 text-green-500" />
      </h3>
      <p className="text-sm dark:text-gray-300">- {university}</p>
    </>
  );
};

SingleEducation.propTypes = {
  title: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
};

export default SingleEducation;
