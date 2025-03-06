interface ParallaxBannerProps {
  title: string;
  subtitle: string;
}

const ParallaxBanner = ({ title, subtitle }: ParallaxBannerProps) => {
    return (
      <div
        className="relative z-0 h-[60vh] bg-fixed bg-center bg-cover flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: "url('https://www.techspot.com/images2/news/bigimage/2022/04/2022-04-14-image-15.jpg')", 
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
  
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase">{title}</h1>
          <p className="mt-4 text-lg md:text-2xl font-medium">{subtitle}</p>
        </div>
      </div>
    );
  };  
  
  export default ParallaxBanner;
    

//Discover the best rated on the world stage.