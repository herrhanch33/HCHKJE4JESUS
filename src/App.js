import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import { useState } from 'react';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import Guestbook from './Guestbook';
import RSVP from "./RSVP";
import BGM from "./BGM";
import BackgroundMusic from './BGM';

function App() {
  const images = [];
  for (let i = 0; i < 12; i++) images.push(`slide-images/${i+1}.jpg`)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGroomExpend, setIsGroomExpend] = useState(true);
  const [isBrideExpend, setIsBrideExpend] = useState(true);

  const copyText = async (texture) => {
    try {
      await navigator.clipboard.writeText(texture)
      alert("복사가 완료되었습니다.")
    } catch (e) {
      console.error("텍스트 복사 실패", e)
    }
  }

  return (
    <div className="App">
      <section className="cover">
        <img src="/image1.jpg" alt="Cover" />
      </section>

      <section className="intro">
        <div className="place">
          <p>
            2025.04.05. 토요일 오후 12시 30분<br />
            <span>한동대학교 김영길 GRACE 스쿨</span>
          </p>
        </div>
        <h3>한창희 † 권지은 결혼 예배</h3>
        <p className="bible-verses">
          "우리가 사랑함은 그가 먼저 우리를 사랑하셨음이라.(요일4:19)"<br />
          "We love because he first loved us.(1John 4:19)"<br />
          <br />
          하나님의 인도하심으로 <br />
          만난 두 사람이 <br />
          <br />
          예수 그리스도 안에서 <br />
          참소망을 발견하고 <br />
          <br />
          한 성령 안에서<br />
          서로 사랑하기를 언약하는 자리에<br />
          <br />
          함께 축복해주시고 증인이 되어 주시면 <br />
          감사하겠습니다.
        </p>
      </section>

      <section className="family">
        <p><span>한상륜 · 이정선</span> 의 장남 <span>한창희</span></p>
        <p><span>권영익 · 김영순 </span> 의 장녀 <span>권지은</span></p>
      </section>

        <img src="slide-images/7.jpg" alt="" className="cover-img" />

      <section className="groom-bride">
        <div className="groom">
          <div className="groom-img">
            <img src="groom-img.jpg" alt="신랑" />
          </div>
          <h3>
            <span>신랑</span>
            한창희
          </h3>
          <div className="button-div">
            <button onClick={() => window.location.href = `tel:010-2650-2895`}>
              <img src="call_icon.png" alt="" />
            </button>
            <button onClick={() => window.location.href = `sms:010-2650-2895`}>
              <img src="messenger.png" alt="" />
            </button>
          </div>
          <hr style={{ borderWidth: '0.2px', margin: '0', marginTop: '20px'}} />
          <h3>
            <span>신랑 혼주</span>
          </h3>
          <p>
            <span>아버지</span>한상륜
          </p>
          <div className="button-div">
            <button onClick={() => window.location.href = `tel:010-3349-2895`}>
              <img src="call_icon.png" alt="" />
            </button>
            <button onClick={() => window.location.href = `sms:010-3349-2895`}>
              <img src="messenger.png" alt="" />
            </button>
          </div>
          <p>
            <span>어머니</span>이정선
          </p>
          <div className="button-div">
            <button onClick={() => window.location.href = `tel:010-2218-2895`}>
              <img src="call_icon.png" alt="" />
            </button>
            <button onClick={() => window.location.href = `sms:010-2218-2895`}>
              <img src="messenger.png" alt="" />
            </button>
          </div>
        </div>
        <div className="bride">
          <div className="bride-img">
            <img src="bride-img.jpg" alt="신부" />
          </div>
          <h3>
            <span>신부</span>
            권지은
          </h3>
          <div className="button-div">
            <button onClick={() => window.location.href = `tel:010-2626-1264`}>
              <img src="call_icon.png" alt="" />
            </button>
            <button onClick={() => window.location.href = `sms:010-2626-1264`}>
              <img src="messenger.png" alt="" />
            </button>
          </div>
          <hr style={{ borderWidth: '0.2px', margin: '0', marginTop: '20px'}} />
          <h3>
            <span>신부 혼주</span>
          </h3>
          <p>
            <span>아버지</span>권영익
          </p>
          <div className="button-div">
            <button onClick={() => window.location.href = `tel:010-5152-3694`}>
              <img src="call_icon.png" alt="" />
            </button>
            <button onClick={() => window.location.href = `sms:010-5152-3694`}>
              <img src="messenger.png" alt="" />
            </button>
          </div>
          <p>
            <span>어머니</span>김영순
          </p>
          <div className="button-div">
            <button onClick={() => window.location.href = `tel:010-9342-3694`}>
              <img src="call_icon.png" alt="" />
            </button>
            <button onClick={() => window.location.href = `sms:010-9342-3694`}>
              <img src="messenger.png" alt="" />
            </button>
          </div>
        </div>
      </section>
      
      <div className="horizontal">
        <div></div>
        <div></div>
      </div>

      <section className="gallery">
        <h3>갤러리</h3>

        <Swiper
          modules={[Navigation]}
          navigation={true}
          loop
          spaceBetween={50}
          slideperview={1}
          onSlideChange={(swiper) => {
            const index = swiper.realIndex + 1;
            setCurrentIndex(index)
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Slide ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div style={{ padding: '0 10px'}}>
          <p style={{
            color: "#aaa",
            fontSize: "14px",
            fontWeight: "bold",
            marginTop: "10px",
            textAlign: 'center',            
          }}>
            {currentIndex} / {images.length}
          </p>
        </div>
        
        
      </section>

      <section className="route">
        <h2>오시는 길</h2>
        <Map
          center={{ lat: 36.102520927369206, lng: 129.3820512860352 }}
          style={{ width: '100%', height: '400px', marginTop: '20px' }}
          level={3}
        >
          <MapMarker position={{ lat: 36.102520927369206, lng: 129.3820512860352 }}></MapMarker>
        </Map>
        
        <div style={{ backgroundColor: '#eee', padding: '30px 15px 40px'}}>
          <h3 className="place">한동대학교 김영길 GRACE 스쿨</h3>
          <p>
            경북 포항시 북구 흥해읍 한동로 558 한동대학교 김영길그레이스스쿨 <span onClick={() => copyText('경북 포항시 북구 흥해읍 한동로 558 한동대학교 김영길그레이스스쿨')}>복사</span>
          </p>

          <h3 className="left" style={{ marginTop: '30px'}}>KTX</h3>
          <p className="left">포항 KTX역</p>

          <h3 className="left" style={{ marginTop: '30px'}}>버스</h3>
          <p className="left">한동대학교 하차 : 302, 마을버스</p>

          <h3 className="left" style={{ marginTop: '30px'}}>주차</h3>
          <p className="left">김영길 GRACE 스쿨 및 한동대학교 주차장</p>

          {/* <h3 className="left" style={{ marginTop: '30px'}}>대절버스 안장</h3>
          <p className="left">서울역 한동대학교 | 07:30 출발<br />
          서울역 한동대학교 | 15:00 출발</p> */}
        </div>
        
      </section>
      
      {/* <section className="after-party">
        <h3>피로연 안내</h3>
        <p className="date">일시 | 2025.03.03 15:00 ~ 19:00</p>
        <p className="place">장소 | 무</p>
        <p className="address">경북 포항시 한동대학교 <span onClick={() => copyText('경북 포항시 한동대학')}>복사</span></p>
        <Map
          center={{ lat: 36.10358685346486, lng: 129.3889226319518 }}
          style={{ width: '100%', height: '400px', marginTop: '20px' }}
          level={3}
        >
          <MapMarker position={{ lat: 36.10358685346486, lng: 129.3889226319518 }}></MapMarker>
        </Map>
      </section> */}

      <section className="bank-number">
        <h3>마음 전하실 곳</h3>
        {/* <pre>
          따듯한 마음에 깊이 감사드립니다.<br />
          *화환은 수령이 어려운 점 양해 부탁드립니다.<br />
        </pre> */}
        <div className="groom">
          <h2>
            <div>
              <h3>신랑측</h3>
              <button onClick={() => setIsGroomExpend(!isGroomExpend)}>
                <div className={isGroomExpend ? 'arrow arrow-up' : 'arrow arrow-down'}></div>
              </button>
            </div>
          </h2>
          {isGroomExpend && (
            <>
            <div>  
              <div>  
                <h3>신랑 한창희</h3>
                <p>IBK기업은행 15812469401016 한창희</p>
              </div>
              <button onClick={() => copyText("IBK기업은행 15812469401016")}>복사</button>
            </div>
            <div>  
            <div>  
              <h3>신랑 부) 한상륜</h3>
              <p>국민은행 429501-56-3311 한상륜</p>
            </div>
            <button onClick={() => copyText("국민은행 429501-56-3311 한상륜")}>복사</button>
          </div>
          <div>  
            {/* <div style={{ borderTop: 'none'}}>   */}
              <div>  
                <h3>신랑 모) 이정선</h3>
                <p>국민은행 70300101467034 이정선</p>
              </div>
              <button onClick={() => copyText("국민은행 70300101467034 이정선")}>복사</button>
            </div>
            </>
          )}
          
        </div>

        <div className="bride" style={{ marginTop: '40px'}}>
          <h2>
            <div>
              <h3 style={{ color: '#ff85a1'}}>신부측</h3>
              <button onClick={() => setIsBrideExpend(!isBrideExpend)}>
                <div className={isBrideExpend ? 'arrow bride arrow-up' : 'arrow bride arrow-down'}></div>
              </button> 
            </div>
          </h2> 
          {isBrideExpend && (
            <>
          <div>  
            <div>  
              <h3>신부 권지은</h3>
              <p>국민은행 59420204088297 권지은</p>
            </div>
            <button onClick={() => copyText("국민은행 59420204088297 권지은")}>복사</button>
          </div>
          <div>  
            <div>  
              <h3>신부 부) 권영익</h3>
              <p>국민은행 606210657696 권영익</p>
            </div>
            <button onClick={() => copyText("국민은행 606210657696 권영익")}>복사</button>
          </div>
          <div>  
            <div>  
              <h3>신부 모) 김영순</h3>
              <p>국민은행 619210601898 김영숙</p>
            </div>
            <button onClick={() => copyText("국민은행 619210601898 김영순")}>복사</button>
          </div>
          </>
          )}
        </div>
      </section>

      <section className="guestbook">
        <p>
          Thanks to<br />
          Jupyeong Alliance Church<br />
          Brothers & Sisters<br /> 
        </p>
        <img src="slide-images/13.jpg" alt="" />
         <Guestbook /> 
      </section>

      <section className="rsvp">
        <RSVP /> {/* RSVP */}
      </section>
    <BackgroundMusic /> {/* BGM */}
    </div>

  );
}

export default App;
