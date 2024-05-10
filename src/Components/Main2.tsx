import React from 'react'
import style1 from './Adithya2.module.css'
import { color } from '@chakra-ui/react'
export const Main2 = () => {
  return (
    <>
    <div className= {style1.container}>
        <div >
            <div><h2 style={{color:'blue'}}>TESTIMONIALS</h2></div>
        <div><h1 >What Customers Saying</h1></div>
        <div><p>Over 25 years working in IT services developing software <br/>
applications and mobile apps for clients all over the world.</p></div>
        </div>
        <br />

      <div className={style1.cardcontainer}>

          <div className={style1.cards}>
            <h3>Epsum factorial non deposit quid pro quo hic escorol. <br />
          Olympian quarrels et gorilla congolium sic ad nauseum. <br />
          Souvlaki ignitus carborundum e pluribus unum. <br />
          Defacto lingo est igpay atinlay. Marquee selectus non <br />
          provisio incongruous feline nolo contendre.
          <br />
          <h1 style={{color:'orange'}}>Tom Hiddleston</h1>
          </h3>
          </div>
          <div className={style1.cards}>
          <h3>Epsum factorial non deposit quid pro quo hic escorol. <br />
          Olympian quarrels et gorilla congolium sic ad nauseum. <br />
          Souvlaki ignitus carborundum e pluribus unum. <br />
          Defacto lingo est igpay atinlay. Marquee selectus non <br />
          provisio incongruous feline nolo contendre.
          <br />
          <h1 style={{color:'orange'}}>JaredLeto</h1>
          </h3>
          </div>
              </div>
      </div>



    </>
  )
}


