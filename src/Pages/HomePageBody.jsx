import React, { useRef, useState, useEffect } from 'react';
import Pova5Vid from './../Assets/Videos/Pova5.mp4';
import CamonVid from './../Assets/Videos/Camon.mp4';
import Spark10Vid from './../Assets/Videos/Spark10.mp4';
import BrandFilmVid from './../Assets/Videos/BrandFilm.mp4';
import BrandIntroVid from './../Assets/Videos/BrandIntro.mp4';

import PhantomFlipImg from './../Assets/Images/PhantomFlip.png';
import PhantomFlipMegaImg from './../Assets/Images/PhantomFlipMega.png';
import Pova5MiniImg from './../Assets/Images/Pova5Mini.png';
import Pova5MegaImg from './../Assets/Images/Pova5Mega.png';
import MegaBookMegaImg from './../Assets/Images/MegaBookMega.png';
import MegaBookMiniImg from './../Assets/Images/MegaBookMini.png';
import RecomePhantomImg from './../Assets/Images/RecomePhantom.png';
import RecomPovaImg from './../Assets/Images/RecomPova.png';
import RecomCamonImg from './../Assets/Images/RecomCamon.png';
import BrandFactsImg from './../Assets/Images/BrandFacts.png';
import LaunchFoldImg from './../Assets/Images/LaunchFold.png';
import LaunchUltimateImg from './../Assets/Images/LaunchUltimate.png';
import NewsShinesImg from './../Assets/Images/NewsShines.png';
import TSpotImg from './../Assets/Images/TSpot.png';
import HiosImg from './../Assets/Images/Hios.png';
import videoCloseIcon from './../Assets/Icons/videoClose.png';
import playIcon from './../Assets/Icons/play.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './../Styles/HomePageBody.css';
import Card from '../Components/Card/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Footer from '../Components/Footer/Footer';
const HomePageBody = () => {
  return (
    <div>
      <FullVideoSlider />
      <PhoneAdvert
        AdvertBckgd={PhantomFlipMegaImg}
        AdvertTitle="PHANTOM V Flip 5G"
        AdvertFeature="Perfect in Pocket
"
      />
      <PhoneAdvertResponsive
        AdvertBckgdResp={PhantomFlipImg}
        AdvertTitle="PHANTOM V Flip 5G"
        AdvertFeature="Perfect in Pocket
"
      />
      <PhoneAdvert
        AdvertBckgd={Pova5MegaImg}
        AdvertTitle="POVA 5 Pro 5G

"
        AdvertFeature="LIGHT UP!
"
      />
      <PhoneAdvertResponsive
        AdvertBckgdResp={Pova5MiniImg}
        AdvertTitle="POVA 5 Pro 5G

"
        AdvertFeature="LIGHT UP YOUR POWER
"
      />
      <PhoneAdvert
        AdvertBckgd={MegaBookMegaImg}
        AdvertTitle={<span style={{ color: 'white' }}>MEGABOOK TI</span>}
        AdvertFeature={
          <span style={{ color: 'white' }}>
            {' '}
            Be a change-maker.
            <br /> Be a creator.
          </span>
        }
      />
      <PhoneAdvertResponsive
        AdvertBckgdResp={MegaBookMiniImg}
        AdvertTitle="MEGABOOK TI
"
        AdvertFeature={
          <span>
            {' '}
            Be a change-maker.
            <br /> Be a creator.
          </span>
        }
      />
      <RecommedationSection />
      <Brands />
      <News />
      <Software />
      <Footer />
    </div>
  );
};

export const FullVideoSlider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const [showRovaVidPopup, setShowRovaVidPopup] = useState(false);

  const handleRovaVidClick = () => {
    setShowRovaVidPopup(true);
  };
  const closeRovaVidPopup = () => {
    setShowRovaVidPopup(false);
  };
  const [showCamonVidPopup, setShowCamonVidPopup] = useState(false);

  const handleCamonVidClick = () => {
    setShowCamonVidPopup(true);
  };
  const closeCamonVidPopup = () => {
    setShowCamonVidPopup(false);
  };
  const [showSparkVidPopup, setShowSparkVidPopup] = useState(false);

  const handleSparkVidClick = () => {
    setShowSparkVidPopup(true);
  };
  const closeSparkVidPopup = () => {
    setShowSparkVidPopup(false);
  };
  return (
    <div className="full-video-container">
      {showRovaVidPopup && (
        <div className="rova-pop-container">
          <div className="rova-vid-content">
            <img
              src={videoCloseIcon}
              className="close-button"
              onClick={closeRovaVidPopup}
            />
            <video autoPlay loop controls className="video-play">
              <source
                src="https://d3fyizz0b46qgr.cloudfront.net/global/homepage/new_global/bannerVideo/pova5-pc-complete.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
      {showCamonVidPopup && (
        <div className="rova-pop-container">
          <div className="rova-vid-content">
            <img
              src={videoCloseIcon}
              className="close-button"
              onClick={closeCamonVidPopup}
            />
            <video autoPlay loop controls className="video-play">
              <source
                src="https://d3fyizz0b46qgr.cloudfront.net/global/homepage/new_global/bannerVideo/20-complete-pc.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
      {showSparkVidPopup && (
        <div className="rova-pop-container">
          <div className="rova-vid-content">
            <img
              src={videoCloseIcon}
              className="close-button"
              onClick={closeSparkVidPopup}
            />
            <video autoPlay loop controls className="video-play">
              <source
                src="https://d3fyizz0b46qgr.cloudfront.net/global/homepage/new_global/bannerVideo/10-complete-pc.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 15500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <video autoPlay loop muted className="video">
            <source src={Pova5Vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1 className="Phone-title">POVA 5</h1>
          <h3 className="play-vid" onClick={handleRovaVidClick}>
            <img src={playIcon} className="play-icon" />
            <span className="fiim-play">Play the film</span>
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <video autoPlay loop muted>
            <source src={CamonVid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1 className="Phone-title">CAMON 20</h1>
          <h3 className="play-vid" onClick={handleCamonVidClick}>
            <img src={playIcon} className="play-icon" />
            <span className="fiim-play">Play the film</span>
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <video autoPlay loop muted>
            <source src={Spark10Vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1 className="Phone-title">Spark 10 Series</h1>
          <h3 className="play-vid" onClick={handleSparkVidClick}>
            <img src={playIcon} className="play-icon" />
            <span className="fiim-play">Play the film</span>
          </h3>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

const PhoneAdvert = (props) => {
  const AdvertStyles = {
    background: `url("${props.AdvertBckgd}")`,
    backgroundRepeat: 'no-Repeat',
    backgroundSize: 'cover',
  };
  const [showSection, setShowSection] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 1.3;
        const sectionOffset = document
          .querySelector('.Advert-title-container')
          .getBoundingClientRect().top;

        if (sectionOffset <= halfScreenHeight) {
          setShowSection(true);
          setAnimationTriggered(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationTriggered]);
  return (
    <div className="phone-advert-container" style={AdvertStyles}>
      <div
        className={`Advert-title-container ${
          showSection ? 'show animated' : ' '
        }`}
      >
        <div className="Advert-main">
          <h1 className="Advert-title">{props.AdvertTitle}</h1>
          <h1 className="Advert-feature">{props.AdvertFeature}</h1>
        </div>
        <button className="bg-blue-500   hover:bg-blue-600  rounded-lg p-3 text-white text-xl w-40">
          Learn more
        </button>
      </div>
    </div>
  );
};

const PhoneAdvertResponsive = (props) => {
  const AdvertStyles = {
    background: `url("${props.AdvertBckgd}")`,
    backgroundRepeat: 'no-Repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // backgroundPosition: 'center',
  };
  const [showSection, setShowSection] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 1.3;
        const sectionOffset = document
          .querySelector('.Advert-title-container')
          .getBoundingClientRect().top;

        if (sectionOffset <= halfScreenHeight) {
          setShowSection(true);
          setAnimationTriggered(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationTriggered]);
  return (
    <div
      className="phone-advert-container advert-responsive"
      style={AdvertStyles}
    >
      <div
        className={`Advert-title-container ${
          showSection ? 'show animated' : ' '
        }`}
      >
        <div className="Advert-main">
          <h1 className="Advert-title">{props.AdvertTitle}</h1>
          <h1 className="Advert-feature">{props.AdvertFeature}</h1>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 rounded-lg text-white text-xl w-4auto ml-auto mr-auto p-2 ">
          Learn more
        </button>
      </div>
      {props.AdvertBckgdResp && (
        <img src={props.AdvertBckgdResp} className="img-backgd-responsive" />
      )}
    </div>
  );
};

const RecommedationSection = () => {
  const [showSection, setShowSection] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 1.3;
        const sectionOffset = document
          .querySelector('.recom-content')
          .getBoundingClientRect().top;

        if (sectionOffset <= halfScreenHeight) {
          setShowSection(true);
          setAnimationTriggered(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationTriggered]);
  return (
    <div className="recom-container">
      <h1 className="recom-container-title">RECOMMENDATION OF THE MONTH</h1>
      <div className={`recom-content ${showSection ? 'show animated' : ' '}`}>
        <Card
          RecomeCard={RecomPovaImg}
          Recome="POVA 5"
          features="Light Up Your Power"
        />
        <Card
          RecomeCard={RecomePhantomImg}
          Recome="PHANTOM V Flip 5G
"
          features="Perfect in pocket"
        />
        <Card
          RecomeCard={RecomCamonImg}
          Recome="CAMON 20 Premier 5G
"
          features="Night portrait master"
        />
      </div>
    </div>
  );
};
const Brands = () => {
  return (
    <div className="brands-container">
      <h1 className="recom-container-title">BRAND</h1>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 15500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <video autoPlay loop muted className="video" id="brand-vid">
            <source src={BrandFilmVid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1 className="Phone-title brand-header">Brand Film</h1>
        </SwiperSlide>
        <SwiperSlide>
          <video autoPlay loop muted>
            <source src={BrandIntroVid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1 className="Phone-title brand-header accordion-body">
            Brand Introduction
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={BrandFactsImg} />
          <h1 className="Phone-title brand-header">Brand Facts</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const News = () => {
  const [showSection, setShowSection] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 1.3;
        const sectionOffset = document
          .querySelector('.news-container ')
          .getBoundingClientRect().top;

        if (sectionOffset <= halfScreenHeight) {
          setShowSection(true);
          setAnimationTriggered(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationTriggered]);
  const deFaultImage = LaunchFoldImg;
  const [currentImage, setCurrentImage] = useState(deFaultImage);

  const images = {
    image1: LaunchFoldImg,
    image2: LaunchUltimateImg,
    image3: NewsShinesImg,
  };
  const handleClick = (imageKey) => {
    setCurrentImage(images[imageKey]);
  };

  return (
    <div className={`news-container ${showSection ? 'show animated' : ' '}`}>
      <h1 className="recom-container-title">News</h1>
      <div className="news-content">
        <div className="news-img-container">
          {currentImage && <img src={currentImage} className="news-img" />}
        </div>
        <div className="news">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0" onClick={() => handleClick('image1')}>
              <Accordion.Header>
                <div className="accordion-title">
                  <span className="AccdHeader">
                    TECNO Globally Launches PHANTOM V
                  </span>
                  <p className="AccdHeader news-header">
                    {' '}
                    TECNO Globally Launches PHANTOM V Flip 5G: Representing Flip
                    in Style and Perfect in Pocket
                  </p>
                  <p className=" news-date">September/22/2023</p>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <p className="accordion-body-text">
                  Perfect in Pocket September/22/2023 The brand’s latest
                  foldable device delivers a stunning synergy of fashionable
                  aesthetics and advanced technology that’s “perfect in pocket”
                  for stylish youth.{' '}
                </p>{' '}
                <button className="bg-blue-500 hover:bg-blue-600 rounded-lg text-white text-l w-4auto ml-auto mr-auto p-2 ">
                  Learn more
                </button>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" onClick={() => handleClick('image2')}>
              <Accordion.Header>
                <div className="accordion-title">
                  <span className="AccdHeader">
                    TECNO Unveils “PHANTOM Ultimate”
                  </span>
                  <p className="AccdHeader news-header">
                    {' '}
                    Concept Phone Redefining Rollable Screen Innovation
                  </p>
                  <p className=" news-date">September/01/2023 </p>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <p className="accordion-body-text">
                  PHANTOM, TECNO's premium technology sub-brand, released a
                  concept video for its latest rollable smartphone concept,
                  PHANTOM Ultimate.{' '}
                </p>{' '}
                <button className="bg-blue-500 hover:bg-blue-600 rounded-lg text-white text-l w-4auto ml-auto mr-auto p-2 ">
                  Learn more
                </button>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" onClick={() => handleClick('image3')}>
              <Accordion.Header>
                <div className="accordion-title">
                  <span className="AccdHeader">
                    TECNO Shines at IFA 2023 with
                  </span>
                  <p className="AccdHeader news-header">
                    {' '}
                    Revolutionary Laptop Debuts and All-Star Smart Product
                    Ecology
                  </p>
                  <p className=" news-date">September/01/2023</p>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <p className="accordion-body-text">
                  TECNO showcases an extensive array of smart products including
                  4 cutting-edge smartphones and all-star AIoT products. TECNO
                  also introduces two revolutionary laptop models – TECNO
                  MEGABOOK T1 2023 14inch and TECNO MEGABOOK S1 Dazzling
                  Edition.
                </p>{' '}
                <button className="bg-blue-500  hover:bg-blue-600 rounded-lg text-white text-l w-4auto ml-auto mr-auto p-2 ">
                  Learn more
                </button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
const Software = () => {
  const [showSection, setShowSection] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!animationTriggered) {
        const halfScreenHeight = window.innerHeight / 1.3;
        const sectionOffset = document
          .querySelector('.software-container')
          .getBoundingClientRect().top;

        if (sectionOffset <= halfScreenHeight) {
          setShowSection(true);
          setAnimationTriggered(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationTriggered]);
  return (
    <div
      className={`software-container ${showSection ? 'show animated' : ' '}`}
    >
      <Card SoftwareCard={HiosImg} />
      <Card SoftwareCard={TSpotImg} />
    </div>
  );
};

export default HomePageBody;
