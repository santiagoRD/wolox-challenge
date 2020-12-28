import React, { useEffect, lazy, Suspense, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userLogout } from '../../actions/authActions';
import { getTechsByNameAndType, noop, sortDesc, sortAsc } from '../../helpers/helpers';
import { BASE_URL } from '../../helpers/constants';
import { setTechnologies, techError } from '../../actions/technologiesActions';
import Loader from '../../helpers/common/Loader';
import './TechnologiesList.scss';

const TechnologiesNav = lazy(() => import('./TechnologiesNav'));
const TechnologiesFooter = lazy(() => import('./TechnologiesFooter'));
const TechnologiesList = lazy(() => import('./TechnologiesList'));

const TechnologiesPage = props => {
  const [techList, setTechList] = useState([]);
  const { handleSetTechs, handleSetError, handleLogout } = props;
  const [searchText, setSearchText] = useState('');
  const [updateData, setUpdateData] = useState(true);
  const filteredTechList = useMemo(() => getTechsByNameAndType(techList, searchText), [techList, searchText, setTechList]);

  const handleUserLogout = () => {
    localStorage.removeItem('auth');
    handleLogout();
  };

  const handleInputChange = ({ target }) => {
    setSearchText(target.value);
  };

  const handleUpdateData = techs => {
    localStorage.setItem('techList', JSON.stringify(techs));
    setUpdateData(true);
  };

  const handleSelectFavorite = name => {
    const tmpTechList = techList.map(tech => (tech.tech === name ? { ...tech, favorite: !tech.favorite } : tech));
    handleUpdateData(tmpTechList);
  };

  const getTechList = async () => {
    try {
      let { data } = await axios.get(`${BASE_URL}/techs`);
      data = data.map(tech => ({ ...tech, favorite: false }));
      setTechList(data);
      handleSetTechs(data);
    } catch (error) {
      handleSetError(`Hubo un error obteniendo el listado, ${error}`);
    }
  };

  const handleCalculateFavorites = () => {
    let quantity = 0;
    techList.forEach(tech => {
      if (tech.favorite) quantity += 1;
    });
    return quantity;
  };

  const handleSortAsc = () => {
    const sortedTechs = sortAsc(techList);
    handleUpdateData(sortedTechs);
  };
  const handleSortDesc = () => {
    const sortedTechs = sortDesc(techList);
    handleUpdateData(sortedTechs);
  };

  const favorites = useMemo(() => handleCalculateFavorites(), [techList]);

  useEffect(() => {
    if (updateData) {
      if (localStorage.getItem('techList')) {
        setTechList(JSON.parse(localStorage.getItem('techList')));
        handleSetTechs(JSON.parse(localStorage.getItem('techList')));
      } else {
        getTechList();
      }
      setUpdateData(false);
    }
  }, [updateData]);
  return (
    <section className='techlist__section'>
      <Suspense fallback={<Loader />}>
        <TechnologiesNav
          searchText={searchText}
          handleInputChange={handleInputChange}
          favorites={favorites}
          handleSortAsc={handleSortAsc}
          handleSortDesc={handleSortDesc}
          handleUserLogout={handleUserLogout}
        />
        <TechnologiesList techs={filteredTechList} handleSelectFavorite={handleSelectFavorite} />
        <TechnologiesFooter total={filteredTechList.length} />
      </Suspense>
    </section>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({ handleLogout: userLogout, handleSetTechs: setTechnologies, handleSetError: techError }, dispatch);

export default connect(noop, mapDispatchToProps)(TechnologiesPage);

TechnologiesPage.propTypes = {
  handleSetTechs: PropTypes.func.isRequired,
  handleSetError: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired
};
