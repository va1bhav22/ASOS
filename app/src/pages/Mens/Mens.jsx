import React from 'react'
import FooterPage from '../Footer/Footer'
import Visit from '../Visit/Visit'
import './Mens.css'
// import MensMainData from './MensMain'
import MensCard from './MensCard'
import { MensCardBig } from './MensCard'

const Mens = () => {
  return (
    <div className='MainMens'>
      <div className='MenMensFirstBlackInfoDive'>
        <div>
          <button className='btn MenMensFirstBlackInfoDiveBtn'  >LEDIES</button>
        </div>
        <div style={{fontSize:"13px",fontWeight:"bold",color:"white",textAlign:"center"}}>
          <p >NEW HERE?</p>
          <p style={{marginTop:"-18px"}}>Get 15% Discount* With Code : Hi</p>
          <p  style={{marginTop:"-18px"}}>Or Doenload the app for 20% discount With code : Hiya</p>
          </div>
          <div>
           <button className='btn MenMensFirstBlackInfoDiveBtnsec' >MEN'S</button>
          </div>
      </div>
      <div className='MensBanner' style={{marginTop:"60px"}}>
        <div className='MensBannerImg'>
          
           <div className='MensBannerImgData'>
           <div className='MensBannerImgData1'>Summer Fun</div>
            <div className='MensBannerImgData2'> ASSOS DESIGN SHOPPEN</div>
           </div>
         
        </div>
      </div>

      <div className='MaleMensCard'>

        <MensCard image='https://content.asos-media.com/-/media/homepages/mw/2022/june/06/moments/mw_asos_design_festive_jewels_moment_870x1110.jpg'
        title='E-Boy Coolness'  category= "ASOS DESIGN JEWELRY "/>
        <MensCard
         category= "SHOES"
         title= "Sneak(er) peek"
         image= "https://content.asos-media.com/-/media/homepages/mw/2022/june/06/moments/mw_au_footwear_moment_870x1110.jpg" />
        <MensCard
         category= "SKATE PRINTS"
         title= "Punk perfection by ASOS DESIGN"
         image= "https://content.asos-media.com/-/media/homepages/mw/2022/june/06/moments/mw_asos_design_skate_prints_moment_870x1110.jpg"/>
        <MensCard
        category ="HIIT"
        title= "Sweaty styles"
        image= " https://content.asos-media.com/-/media/homepages/mw/2022/june/06/moments/mw_hiit_moment_870x1110.jpg"/>


     
      </div>

      <div className='MensMainBanner2' >
        <img src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/06_june/pride---banner-1---2022/de/pride_hp_p1_de_dt_1258_150-new.png" alt="" />
      </div>

      <div className='MensMainBigCards' >
      <MensCardBig
         category= "TOPMAN"
         title= "Top trend styles"
         but='  BRAND SHOP'
         image= "https://content.asos-media.com/-/media/homepages/mw/2022/june/06/moments/mw_gbl_topman_moment_870x1110v2.jpg"/>
        <MensCardBig
        category ="BATH STYLES"
        title= "Let the beach boy out"
        but='SHOP NOW'
        image= "https://content.asos-media.com/-/media/homepages/mw/2022/june/06/moments/mw_swim_moment_870x1110.jpg"/>
      </div>

      <div className='Lieferung' style={{marginTop:"40px"}} >
        <img src="https://i.ibb.co/MVDTWMc/Screenshot-912.png" alt="" />
      </div>
      <div className='afberPay' style={{marginTop:"40px"}} >
        <img src="https://i.ibb.co/7WCShwy/Screenshot-914.png" alt="" />
      </div>

      <div className='TopBrands' style={{marginTop:"30px"}}>
          <div  className='TopBrandsheading'><p>TOP BRANDS</p></div>
          <div className='TopBrandsImgDiv'>
            <div><img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/tommy-hilfiger-hp-logos-256x256.jpg" alt="" /></div>
            <div><img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/north-face.png" alt="" /></div>
            <div><img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/nike-hp-logos-256x256.jpg" alt="" /></div>
            <div><img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/carhartt-hp-logos-256x256.jpg" alt="" /></div>
            <div><img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/ellesse-hp-logos-256x256.jpg" alt="" /></div>
            <div><img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/dr-martens-hp-logos-256x256.jpg" alt="" /></div>
          </div>

          
      </div>
      <div>
            <hr />
            <Visit/>
            <FooterPage/>
          </div>
    </div>
  )
}

export default Mens