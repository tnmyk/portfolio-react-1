const Banner = () => {
  const body = document.querySelector('body')
  setTimeout(()=>{
     body.style.height = "auto";
     body.style.overflowY = "visible";
  },3000)

  return <div className="banner"> T A N M A Y &nbsp; &nbsp; K A C H R O O</div>;
};

export default Banner;
