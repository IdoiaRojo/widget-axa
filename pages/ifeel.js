import {useEffect} from 'react';

const Ifeel = () => {
  const url_staging = 'https://staging.ifeelonline.com/';
  const url_local = 'http://localhost:3000/widgets/users/login';
  // const url_local = 'http://localhost:3000/';

  return(
    <iframe src={url_staging} width="900" height="600" frameBorder="1"></iframe>
  )
}

export default Ifeel;
