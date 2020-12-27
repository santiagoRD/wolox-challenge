import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const useFetch = (url, method, data) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({ data: null, loading: true, error: null });

  useEffect(
    () => () => {
      isMounted.current = false;
    },
    []
  );

  useEffect(() => {
    setState({ data: null, loading: true, error: null });
    axios({
      method,
      url,
      data
    }).then(resp => {
      if (isMounted.current) {
        setState({
          loading: false,
          error: null,
          data: resp.data
        });
      }
    });
  }, [url]);

  return state;
};

export default useFetch;

useFetch.propTypes = {
  url: PropTypes.string.isRequired,
  init: PropTypes.shape({
    method: PropTypes.string.isRequired,
    headers: PropTypes.shape({})
  })
};
