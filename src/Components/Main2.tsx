
import style1 from './Adithya2.module.css'
export const Main2 = () => {
  return (
    <>
    <div className= {style1.container}>
        <div >
            <div><h2 style={{color:'blue',fontSize:'55px'}}>TESTIMONIALS</h2></div>
        <div><h1 style={{fontSize:'30px'}}>What Customers Saying</h1></div>
        <br />
        <div><p>Over 25 years working in IT services developing software <br/>
applications and mobile apps for clients all over the world.</p></div>
        </div>
        <br />

      <div className={style1.cardcontainer}>

          <div className={style1.cards}>
            <h2 className={style1.h2}> "Epsum factorial non deposit quid pro quo hic escorol. <br />
          Olympian quarrels et gorilla congolium sic ad nauseum. <br />
          Souvlaki ignitus carborundum e pluribus unum. <br />
          Defacto lingo est igpay atinlay. Marquee selectus non <br />
          provisio incongruous feline nolo contendre."
          <br />
          <h1 style={{color:'orange',fontSize:'30px'}}>Hiddleston</h1>
          </h2>
          </div>
          <div className={style1.cards}>
          <h2 className={style1.h2}>
            "Epsum factorial non deposit quid pro quo hic escorol. <br />
          Olympian quarrels et gorilla congolium sic ad nauseum. <br />
          Souvlaki ignitus carborundum e pluribus unum. <br />
          Defacto lingo est igpay atinlay. Marquee selectus non <br />
          provisio incongruous feline nolo contendre."
          <br />
          <h1 style={{color:'orange',fontSize:'30px'}}>Leto</h1>
          </h2>
          </div>
              </div>
      </div>



    </>
  )
}


