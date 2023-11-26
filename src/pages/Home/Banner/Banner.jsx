

const Banner = () => {
    return (
        <>
        <div className="hero h-[300px]  md:h-[620px] mb-8" 
        style={{backgroundImage: 'url(https://i.ibb.co/p4wL0nm/blur-office-abstract-background-coffee-260nw-644441308.webp)'}}>
  <div className="bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-black font-bold">Hello there</h1>
      <p className="mb-5 text-black font-bold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  </>
    );
};

export default Banner;