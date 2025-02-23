import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import { useState } from 'react';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import Guestbook from './Guestbook';
import GuestBook from './components/GuestBook';import React, { useState } from 'react';

function App() {
  const images = [];
  for (let i = 0; i < 11; i++) images.push(`slide-images/${i+1}.jpg`)es/${i+1}.jpg`)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGroomExpend, setIsGroomExpend] = useState(true);
  const [isBrideExpend, setIsBrideExpend] = useState(true);  const [isBrideExpend, setIsBrideExpend] = useState(true);
ate(false);
  const copyText = async (texture) => {
    try {
      await navigator.clipboard.writeText(texture)
      alert("복사가 완료되었습니다.")
    } catch (e) {
      console.error("텍스트 복사 실패", e)st handleRSVPResponse = (willAttend) => {
    } alert(willAttend ? '참석해 주셔서 감사합니다!' : '아쉽지만 다음에 만나요!');
  }    setShowRSVP(false);

  return (
    <div className="App">) => {
      <section className="cover">
        <img src="image1.jpg" alt="Cover" />gator.clipboard.writeText(texture)
      </section>      alert("복사가 완료되었습니다.")

      <section className="intro">, e)
        <div className="place">
          <p>
            2025.04.05. 토요일 오후 12시 30분<br />
            <span>한동대학교 김영길 GRACE 스쿨</span>
          </p>Name="App">
        </div>me="cover">
        <h3>결혼합니다</h3>g src="image1.jpg" alt="Cover" />
        <p>
          하나님의 은혜로<br />
          서로 다른 두 사람이 만나<br />ntro">
          한 가정을 이룹니다.<br />ssName="place">
          <br />
          주님의 사랑 안에서<br />2시 30분<br />
          거룩한 가정을 이룰 수 있도록<br />ACE 스쿨</span>
          축복해 주시고 기도해주시면<br />
          감사하겠습니다.v>
        </p>다</h3>
      </section>        <p>

      <section className="family">
        <p><span>한상륜 · 이정선</span> 의 장남 <span>한창희</span></p>
        <p><span>권영익 · 김영순 </span> 의 장녀 <span>권지은</span></p>
      </section>          주님의 사랑 안에서<br />

      <div className="center-img">
        <img src="slide-images/7.jpg" alt="" className="cover-img" />하겠습니다.
      </div>        </p>

      <section className="groom-bride">
        <div className="groom">
          <div className="groom-img"></span></p>
            <img src="groom-img.jpg" alt="신랑" />>권영익 · 김영순 </span> 의 장녀 <span>권지은</span></p>
          </div>n>
          <h3>
            <span>신랑</span>sName="center-img">
            한창희c="slide-images/7.jpg" alt="" className="cover-img" />
          </h3>
          <div className="button-div">
            <button onClick={() => window.location.href = `tel:010-2650-2895`}>
              <img src="call_icon.png" alt="" />e="groom">
            </button>
            <button onClick={() => window.location.href = `sms:010-2650-2895`}>
              <img src="messenger.png" alt="" />
            </button>
          </div>
          <hr style={{ borderWidth: '0.2px', margin: '0', marginTop: '20px'}} />희
          <h3>
            <span>신랑 혼주</span>className="button-div">
          </h3>button onClick={() => window.location.href = `tel:010-2650-2895`}>
          <p>on.png" alt="" />
            <span>아버지</span>한상륜button>
          </p>dow.location.href = `sms:010-2650-2895`}>
          <div className="button-div">
            <button onClick={() => window.location.href = `tel:010-3349-2895`}>
              <img src="call_icon.png" alt="" />
            </button>>
            <button onClick={() => window.location.href = `sms:010-3349-2895`}>
              <img src="messenger.png" alt="" />혼주</span>
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
            <img src="bride-img.jpg" alt="신부" />ton onClick={() => window.location.href = `tel:010-2218-2895`}>
          </div><img src="call_icon.png" alt="" />
          <h3>
            <span>신부</span>tton onClick={() => window.location.href = `sms:010-2218-2895`}>
            권지은img src="messenger.png" alt="" />
          </h3>
          <div className="button-div">
            <button onClick={() => window.location.href = `tel:010-2626-1264`}>
              <img src="call_icon.png" alt="" />e="bride">
            </button>
            <button onClick={() => window.location.href = `sms:010-2626-1264`}>
              <img src="messenger.png" alt="" />
            </button>
          </div>
          <hr style={{ borderWidth: '0.2px', margin: '0', marginTop: '20px'}} />은
          <h3>
            <span>신부 혼주</span>className="button-div">
          </h3>button onClick={() => window.location.href = `tel:010-2626-1264`}>
          <p>on.png" alt="" />
            <span>아버지</span>권영익button>
          </p>dow.location.href = `sms:010-2626-1264`}>
          <div className="button-div">
            <button onClick={() => window.location.href = `tel:010-5152-3694`}>
              <img src="call_icon.png" alt="" />
            </button>>
            <button onClick={() => window.location.href = `sms:010-5152-3694`}>
              <img src="messenger.png" alt="" />혼주</span>
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
        </div>n>어머니</span>김영순
      </section>    </p>
      iv">
      <div className="horizontal"> onClick={() => window.location.href = `tel:010-9342-3694`}>
        <div></div>src="call_icon.png" alt="" />
        <div></div></button>
      </div>            <button onClick={() => window.location.href = `sms:010-9342-3694`}>
ng" alt="" />
      <section className="gallery">>
        <h3>갤러리</h3>          </div>

        <Swiper
          modules={[Navigation]}
          navigation={true}ssName="horizontal">
          loop
          spaceBetween={50}
          slideperview={1}
          onSlideChange={(swiper) => {
            const index = swiper.realIndex + 1;>
            setCurrentIndex(index)갤러리</h3>
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Slide ${index}`} />
            </SwiperSlide>ceBetween={50}
          ))}rview={1}
        </Swiper>  onSlideChange={(swiper) => {
         + 1;
        <div style={{ padding: '0 10px'}}>tIndex(index)
          <p style={{
            color: "#aaa",
            fontSize: "14px",ex) => (
            fontWeight: "bold",index}>
            marginTop: "10px",ndex}`} />
            textAlign: 'center',            /SwiperSlide>
          }}>
            {currentIndex} / {images.length}er>
          </p>
        </div><div style={{ padding: '0 10px'}}>
          <p style={{
        r: "#aaa",
      </section>            fontSize: "14px",

      <section className="route"> "10px",
        <h2>오시는 길</h2>textAlign: 'center',            
        <Map
          center={{ lat: 36.102520927369206, lng: 129.3820512860352 }}
          style={{ width: '100%', height: '400px', marginTop: '20px' }}
          level={3}/div>
        >
          <MapMarker position={{ lat: 36.102520927369206, lng: 129.3820512860352 }}></MapMarker>
        </Map>section>
        
        <div style={{ backgroundColor: '#eee', padding: '30px 15px 40px'}}>
          <h3 className="place">한동대학교 김영길 GRACE 스쿨</h3>시는 길</h2>
          <p>
            경북 포항시 북구 흥해읍 352-4 남송리 <span onClick={() => copyText('경북 포항시 북구 흥해읍 352-4 남송리')}>복사</span>er={{ lat: 36.102520927369206, lng: 129.3820512860352 }}
          </p>          style={{ width: '100%', height: '400px', marginTop: '20px' }}

          <h3 className="left" style={{ marginTop: '30px'}}>KTX</h3>
          <p className="left">포항 KTX역</p>          <MapMarker position={{ lat: 36.102520927369206, lng: 129.3820512860352 }}></MapMarker>

          <h3 className="left" style={{ marginTop: '30px'}}>버스</h3>
          <p className="left">한동대학교 하차 : 302, 마을버스</p>        <div style={{ backgroundColor: '#eee', padding: '30px 15px 40px'}}>

          <h3 className="left" style={{ marginTop: '30px'}}>주차</h3>
          <p className="left">김영길 GRACE 스쿨 및 한동대학교 주차장</p>            경북 포항시 북구 흥해읍 352-4 남송리 <span onClick={() => copyText('경북 포항시 북구 흥해읍 352-4 남송리')}>복사</span>

          {/* <h3 className="left" style={{ marginTop: '30px'}}>대절버스 안장</h3>
          <p className="left">서울역 한동대학교 | 07:30 출발<br />{ marginTop: '30px'}}>KTX</h3>
          서울역 한동대학교 | 15:00 출발</p> */}lassName="left">포항 KTX역</p>
        </div>
        assName="left" style={{ marginTop: '30px'}}>버스</h3>
      </section>    <p className="left">한동대학교 하차 : 302, 마을버스</p>
      
      {/* <section className="after-party">="left" style={{ marginTop: '30px'}}>주차</h3>
        <h3>피로연 안내</h3>
        <p className="date">일시 | 2025.03.03 15:00 ~ 19:00</p>
        <p className="place">장소 | 무</p>
        <p className="address">경북 포항시 한동대학교 <span onClick={() => copyText('경북 포항시 한동대학')}>복사</span></p> className="left">서울역 한동대학교 | 07:30 출발<br />
        <Map
          center={{ lat: 36.10358685346486, lng: 129.3889226319518 }}
          style={{ width: '100%', height: '400px', marginTop: '20px' }}
          level={3}ection>
        >
          <MapMarker position={{ lat: 36.10358685346486, lng: 129.3889226319518 }}></MapMarker>tion className="after-party">
        </Map>h3>
      </section> */}        <p className="date">일시 | 2025.03.03 15:00 ~ 19:00</p>

      <section className="bank-number">ress">경북 포항시 한동대학교 <span onClick={() => copyText('경북 포항시 한동대학')}>복사</span></p>
        <h3>마음 전하실 곳</h3>
        <pre>10358685346486, lng: 129.3889226319518 }}
          멀리서도 축하의 마음을<br />%', height: '400px', marginTop: '20px' }}
          전하고 싶으신 분들을 위해<br />
          계좌번호를 안내드립니다.<br />
          <br />: 36.10358685346486, lng: 129.3889226319518 }}></MapMarker>
          소중한 축하를 보내주셔서 감사드리며,<br />
          따뜻한 마음에 깊이 감사드립니다.<br />
          장소 특성상 화환은 정중히 사양합니다.<br />
          <br /> className="bank-number">
        </pre>
        <div className="groom">
          <h2>의 마음을<br />
            <div>r />
              <h3>신랑측</h3>
              <button onClick={() => setIsGroomExpend(!isGroomExpend)}>
                <div className={isGroomExpend ? 'arrow arrow-up' : 'arrow arrow-down'}></div> 감사드리며,<br />
              </button>깊이 감사드립니다.<br />
            </div>상 화환은 정중히 사양합니다.<br />
          </h2>
          {isGroomExpend && (
            <>ame="groom">
            <div>  
              <div>  
                <h3>신랑 한창희</h3>
                <p>IBK기업은행 15812469401016 한창희</p>n onClick={() => setIsGroomExpend(!isGroomExpend)}>
              </div>'}></div>
              <button onClick={() => copyText("IBK기업은행 15812469401016")}>복사</button>tton>
            </div>
            <div>  
            <div>  
              <h3>신랑 부) 한상륜</h3>
              <p>IBK기업은행 15812469401016 한창희</p> 
            </div>
            <button onClick={() => copyText("IBK기업은행 15812469401016 한창희")}>복사</button><h3>신랑 한창희</h3>
          </div>p>IBK기업은행 15812469401016 한창희</p>
          <div>  
            {/* <div style={{ borderTop: 'none'}}>   */} onClick={() => copyText("IBK기업은행 15812469401016")}>복사</button>
              <div>  
                <h3>신랑 모) 이정선</h3>
                <p>IBK기업은행 15812469401016 한창희</p>
              </div>
              <button onClick={() => copyText("IBK기업은행 15812469401016 한창희")}>복사</button>BK기업은행 15812469401016 한창희</p>
            </div>iv>
            </><button onClick={() => copyText("IBK기업은행 15812469401016 한창희")}>복사</button>
          )}</div>
          >  
        </div>            {/* <div style={{ borderTop: 'none'}}>   */}

        <div className="bride" style={{ marginTop: '40px'}}>  <h3>신랑 모) 이정선</h3>
          <h2>p>IBK기업은행 15812469401016 한창희</p>
            <div>
              <h3 style={{ color: '#ff85a1'}}>신부측</h3>창희")}>복사</button>
              <button onClick={() => setIsBrideExpend(!isBrideExpend)}>
                <div className={isBrideExpend ? 'arrow bride arrow-up' : 'arrow bride arrow-down'}></div>
              </button>
            </div>
          </h2> 
          <div>  
            <div>  " style={{ marginTop: '40px'}}>
              <h3>신부 권지은</h3>
              <p>국민은행 59420204088297 권지은</p>
            </div>
            <button onClick={() => copyText("국민은행 59420204088297 권지은")}>복사</button>utton onClick={() => setIsBrideExpend(!isBrideExpend)}>
          </div>div className={isBrideExpend ? 'arrow bride arrow-up' : 'arrow bride arrow-down'}></div>
          <div>  ton>
            <div>  
              <h3>신부 부) 권영익</h3>
              <p>국민은행 59420204088297 권지은</p>
            </div>
            <button onClick={() => copyText("국민은행 59420204088297 권지은")}>복사</button>3>신부 권지은</h3>
          </div>국민은행 59420204088297 권지은</p>
          <div>  
            <div>  => copyText("국민은행 59420204088297 권지은")}>복사</button>
              <h3>신부 모) 김영순</h3>
              <p>국민은행 59420204088297 권지은</p>
            </div>
            <button onClick={() => copyText("국민은행 59420204088297 권지은")}>복사</button>3>신부 부) 권영익</h3>
          </div><p>국민은행 59420204088297 권지은</p>
        </div>v>
      </section>            <button onClick={() => copyText("국민은행 59420204088297 권지은")}>복사</button>

      <section className="guestbook">div>  
        <p>
          Edited by<br />순</h3>
          Changhee & Jieun  <p>국민은행 59420204088297 권지은</p>
        </p>
        <img src="slide-images/10.jpg" alt="" />lick={() => copyText("국민은행 59420204088297 권지은")}>복사</button>
         <Guestbook /> 
         <GuestBook />div>
      </section>  </section>
    </div>
  );      <section className="guestbook">
}
          Edited by<br />


export default App;          Changhee & Jieun
        </p>
        <img src="slide-images/10.jpg" alt="" />
         <Guestbook /> 
      </section>

      <button 
        onClick={handleRSVPClick}
        className="rsvp-button"
      >
        참석 여부 알리기
      </button>

      {showRSVP && (
        <div className="rsvp-modal">
          <div className="rsvp-modal-content">
            <h2>참석하시나요?</h2>
            <div className="rsvp-buttons">
              <button onClick={() => handleRSVPResponse(true)}>예</button>
              <button onClick={() => handleRSVPResponse(false)}>아니오</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
