import {useEffect} from 'react';

const Ifeel = () => {
  const url_staging = 'https://staging.ifeelonline.com/';
  // const url_local = 'http://localhost:3000/widgets/users/login';
  const url_local = 'http://localhost:3000/';
  useEffect(() => {
    window.addEventListener('load', () => {
      console.log('LISTO!');
      navigator.getUserMedia = ( navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia);
      navigator.getUserMedia({audio:true,video:true}, function(stream) {
        stream.getTracks().forEach(x=>x.stop());
      }, err=>console.log(err));
      
    });
    
  }, [])
  return(
    <iframe src={url_staging} width="900" height="600" frameBorder="1"></iframe>
  )
}

export default Ifeel;
