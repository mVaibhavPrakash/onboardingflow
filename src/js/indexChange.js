import hidePrevContent from './hidePrevContent';
import displayCurrentContent from './displayCurrentContent';

const indexChange = (index,last) => {
  if(index !==last){
  if (index === 1) {
    document
      .getElementById('progress-first')
      .style.setProperty(
        '--backs',
        'linear-gradient(to right, rgba(102,77,229,255) 50%, rgba(102,77,229,255) 50%)'
      );
  } else {
    const ele = document.getElementById(index - 1);
    ele.style.setProperty(
      '--back',
      'linear-gradient(to right, rgba(102,77,229,255) 50%, rgba(102,77,229,255) 50%)'
    );
  }

  hidePrevContent(index);
  displayCurrentContent(index);

  //change style of current active psuedo element
  const element = document.getElementById(index);
  element.style.backgroundColor = 'rgba(102,77,229,255)';
  element.style.color = 'white';
  element.style.setProperty(
    '--back',
    'linear-gradient(to right, rgba(102,77,229,255) 50%, rgba(236,240,246,1) 50%)'
  );
  }
};

export default indexChange;
