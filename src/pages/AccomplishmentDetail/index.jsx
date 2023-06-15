import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { ACCOMPLISHMENTS } from '../../data';
import { useEffect, useMemo } from 'react';
import SingleProject from '../../components/SingleProject';

const AccomplishmentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const accomplish = ACCOMPLISHMENTS.find((acc) => acc.id === id);

  useEffect(() => {
    if (!accomplish) navigate('/');
  }, [accomplish]);

  return (
    <>
      <Header hasBack />
      <SingleProject tags={accomplish.tags} title={accomplish.title}>
        {/* project Description */}
        <ul className="list-wrapper">
          {accomplish.content.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </SingleProject>
    </>
  );
};

export default AccomplishmentDetail;
