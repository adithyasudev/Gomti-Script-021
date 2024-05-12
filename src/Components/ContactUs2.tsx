import Bluebox from './Bluebox';

export const ContactUs2 = () => {
  return (
    <>
      <div style={{ backgroundColor: '#ffffff#fff' }}>
        <h1 style={{ marginLeft: '12%', fontSize: '70px' }}>Contact Us</h1>

        <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', height: 'auto' }}>
          <div style={{ margin: '20px' }}>
            <Bluebox />
            <br />
            <p style={{ fontSize: 'clamp(16px, 2vw, 30px)' }}> <span style={{ color: 'blue', fontSize: 'clamp(18px, 2.5vw, 35px)' }}>Beyond Boundaries</span> is proud to operate with a globally distributed team, ensuring a diverse
              <br /> and dynamic working environment. Our offices are strategically located across three <br /> countries, each fully equipped with the necessary resources to support our operations <br /> and innovations.</p>
            <br />
            <p style={{ fontSize: 'clamp(14px, 1.5vw, 25px)' }}>For detailed addresses and specific contact information of each office, we invite you to<br /> reach out directly to our team.</p>
          </div>
          <div>
            <img src="https://picjj.com/images/2024/05/09/sMaw1.png" alt="" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </>
  );
};
