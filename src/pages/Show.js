/* eslint-disable no-console */
/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const Show = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  // console.log('params', params);

  useEffect(() => {
    // console.log('id inUseEffect', id);
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results => {
      setShow(results);
    });
  }, [id]);
  console.log('show', show);

  return <div>this is show page</div>;
};

export default Show;
