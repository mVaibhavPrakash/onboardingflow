const displayCurrentContent = (index) => {
  let displayActiveContent = 'content';
  const currentActiveElement = document.getElementById(
    `${displayActiveContent}${index + 1}`
  );
  currentActiveElement.className = `content contentActive`;
};

export default displayCurrentContent;
