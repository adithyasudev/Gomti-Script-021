import Bluebox from './Bluebox';

export const ContactUs2 = () => {
  return (
    <>
      <div style={{ height:'auto'}}>
        <h1 style={{ marginLeft:'7vw',fontSize: '70px' }}>Contact Us
        <Bluebox />
        </h1>

        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', height: 'auto' ,flexDirection:'row',marginLeft:'2vw'}}>
          <div style={{display:'flex' ,flexDirection:'column'}}>
              <br />
            <p style={{ fontSize: 'clamp(16px, 1.5vw, 20px)' }}> <span style={{ color: 'blue', fontSize: 'clamp(18px, 2.5vw, 30px)' }}>Beyond Boundaries</span> is proud to operate with a globally distributed <br />team, ensuring a diverse
             and dynamic working environment. Our offices are  <br /> strategically located across three  countries, each fully equipped with the necessary <br /> resources to support our operations and innovations.</p>
            <br />
            <p style={{ fontSize: 'clamp(14px, 1.5vw, 23px)' }}>For detailed addresses and specific contact information of each office, we invite you to<br /> reach out directly to our team.</p>
          </div>
          <div>
            <img src="https://picjj.com/images/2024/05/09/sMaw1.png" alt="" style={{ maxWidth: '100%', height: '40vh' }} />
          </div>
        </div>
      </div>
    </>
  );
};
