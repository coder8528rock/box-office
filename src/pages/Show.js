/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const Show = () => {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // console.log('params', params);

  useEffect(() => {
    // console.log('id inUseEffect', id);
    let isMounted = true;
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        if (isMounted) {
          setShow(results);
          setIsLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err.message);
          setIsLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [id]);
  console.log('show', show);
  if (isLoading) {
    return <div>Data is being loaded</div>;
  }
  if (error) {
    return <div>Error occured : {error}</div>;
  }

  return <div>this is show page</div>;
};

export default Show;
