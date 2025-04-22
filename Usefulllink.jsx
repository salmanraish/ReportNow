import React, { useState, useEffect } from "react";
// import toggleMode from toggleMode();

const MarqueeItem = ({ link, imgSrc, altText }) => {
  return (
    <div
      className="marquee-item flex-shrink-0 px-4 py-2"
      style={{
        marginRight: "10px",
        marginBottom: '20px',
        borderRadius: 5,
        background: "#FFFFFF",
        zIndex: 1, 
        maxWidth: "100%", 
        height: "auto",
        overflow: "hidden",
        border: '2px solid #D9F9FF'
      }}
    >
      <a href={link}>
        <img
          className="h-15 w-30 object-contain flex justify-center mx-auto" 
          src={imgSrc}
          alt={altText}
          style={{
            maxWidth: "100%", 
            maxHeight: "100%", 
            objectFit: "contain", 
          }}
        />
      </a>
    </div>
  );
};

export default function Marquee() {
  const [position, setPosition] = useState(window.innerWidth); 
  const [images, setImages] = useState([ 
    { link: "https://ncpcr.gov.in/", imgSrc: "https://ncpcr.gov.in/images/ncpcr-logo.png", altText: "Item 1" },
    { link: "https://www.example2.com", imgSrc: "https://educatie.lvlb.nl/image/904-110/1200x326/pVr2kMZDnlJ49QeHq1vHVCVTPLZFPjVmTK0JvTuHMfsnhncCVTIS-certin.png", altText: "Item 2" },
    { link: "https://www.example3.com", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Government_of_India_logo.svg/500px-Government_of_India_logo.svg.png", altText: "Item 3" },
    { link: "https://x.com/CyberDost", imgSrc: "https://www.staysafeonline.in/img/stakeholders/cyber-dost.png", altText: "Item 4" },
    { link: "https://cytrain.ncrb.gov.in/", imgSrc: "https://cytrain.ncrb.gov.in/staticpage/web_pages/Content/images/NCRB_LOGO.png", altText: "Item 5" },
    { link: "https://igotkarmayogi.gov.in/#/", imgSrc: "https://igotkarmayogi.gov.in/assets/img/karmayogiLogo.svg", altText: "Item 5" },
    { link: "http://nielitcyberforensics.in/", imgSrc: "https://tibetanprivateiti.com/wp-content/uploads/2019/02/nielit-logo-png-5-300x130.png", altText: "Item 5" },
    { link: "https://isea.gov.in/", imgSrc: "https://isea.gov.in/assets/img/Logos/isea.png", altText: "Item 5" },
    { link: "https://nalsa.gov.in/", imgSrc: "https://th.bing.com/th/id/R.ec0e03fad2414963e27feb1bc65cfeed?rik=rMfV%2fqgZree74A&riu=http%3a%2f%2faswwf.org%2fwp-content%2fuploads%2f2018%2f07%2fnalsa.png&ehk=PCx3pawYRgAzySSlxuzM4WAs8Kzi0yb%2fj5KikoL5ELE%3d&risl=&pid=ImgRaw&r=0", altText: "Item 5" },
    { link: "https://www.antiragging.in/", imgSrc: "https://th.bing.com/th/id/R.98ccc8cf8a8608eebd9449b546b4534a?rik=Ykvqo2M%2fUPvYnQ&riu=http%3a%2f%2fengtuwa.org%2fwp-content%2fuploads%2f2021%2f11%2fanti-ragging-policy-of-ect-1024x792.png&ehk=TuVVN%2bm4bhL%2b2XbPAQgtGYRVrPYHYxLNuexL767hqW4%3d&risl=&pid=ImgRaw&r=0"}
  ]);

  useEffect(() => {
    let interval = setInterval(() => {
      setPosition((prevPosition) => prevPosition - 2); 
    }, 30);

    if (position < -window.innerWidth) {
      setPosition(window.innerWidth); 
      setImages((prevImages) => [...prevImages, ...prevImages]); 
    }

    return () => clearInterval(interval); 
  }, [position]);

  return (
    <div>
      <p style={{ textAlign: 'center', marginBottom: '30px',fontSize:'25px',marginTop:'20px',fontWeight:'bold'}}>Important Links</p> {/* Added Heading */}
      <div className="marquee-container overflow-hidden">
        <div
          className="marquee flex"
          style={{
            transform: `translateX(${position}px)`, 
            display: "flex",
            width: "100%",
            zIndex: 0, 
          }}
        >
          {images.map((item, index) => (
            <MarqueeItem
              key={index}
              link={item.link}
              imgSrc={item.imgSrc}
              altText={item.altText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
