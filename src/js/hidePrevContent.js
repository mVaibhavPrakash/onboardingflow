
const hidePrevContent = (index) => {
    let prevElement = 'content';
    const previousContent = document.getElementById(
      `${prevElement}${index}`
    );
    previousContent.className = `content`;
}

export default hidePrevContent