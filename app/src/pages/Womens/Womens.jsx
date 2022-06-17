import React from 'react'
import './Womens.css'
import { MensCardBig } from './WomensCard'
import WomensCard from './WomensCard';
import Visit from '../Visit/Visit';
import FooterPage from '../Footer/Footer';
const Womens = () => {
  return (
    <div className='MainMens'>
      <div style={{display:"flex",justifyContent:"space-around",background:"black",alignItems:"center"}}>
        <div>
          <button className='btn' style={{background:"black",color:"white",width:"100px",borderColor:"white",fontWeight:"bold"}} >LEDIES</button>
        </div>
        <div style={{fontSize:"13px",fontWeight:"bold",color:"white",textAlign:"center"}}>
          <p >NEW HERE?</p>
          <p style={{marginTop:"-18px"}}>Get 15% Discount* With Code : Hi</p>
          <p  style={{marginTop:"-18px"}}>Or Doenload the app for 20% discount With code : Hiya</p>
          </div>
          <div>
           <button className='btn' style={{background:"black",color:"white",width:"100px",borderColor:"white",fontWeight:"bold"}}>MEN'S</button>
          </div>
      </div>
      <div className='MensBanner' style={{marginTop:"60px"}}>
        <div className='MensBannerImg'>
          
           <div className='WomensBannerImgData'>
           <div className='WomensBannerImgData1'>Festi-Girl</div>
            {/* <div className='WomensBannerImgData2'>SHOP ASSOS DESIGN</div> */}
           </div>
         
        </div>
      </div>

      <div className='MaleMensCard' style={{gap:"20px",textAlign:"center",display:"flex",justifyContent:"center",marginTop:"40px"}}>

        <WomensCard image='https://content.asos-media.com/-/media/homepages/ww/2022/june/06/moments/119158763_model_1-(1).jpg'
        title='Good Sunday energy'  category= "ASOS WEEKEND COLLECTIVE"/>
        <WomensCard
         category= "GLAM COMBI PARTS"
         title= "dream couples"
         image= "https://content.asos-media.com/-/media/homepages/ww/2022/june/06/moments/ww_glam_coords_moment_870x1110.jpg" />
        <WomensCard
         category= "TOPSHOP"
         title= "Top (shop) styled"
         image= "https://content.asos-media.com/-/media/homepages/ww/2022/june/06/moments/220511_vk_asos_shot_04_310-(1).jpg"/>
        <WomensCard
        category ="THE ORDINARY"
        title= "Anything but ordinary"
        image= "https://content.asos-media.com/-/media/homepages/ww/2022/june/06/moments/2022-03-17_ord-lb-serum-visual_v3.jpg"/>


     
      </div>

      <div className='MensMainBanner2' style={{display:"flex",marginTop:"50px",justifyContent:"center"}}>
        <img src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/06_june/pride---banner-1---2022/de/pride_hp_p1_de_dt_1258_150-new.png" alt="" />
      </div>

      <div className='MensMainBigCards' style={{display:"flex",marginTop:"40px",justifyContent:"center",gap:"50px",textAlign:"center"}}>
      <MensCardBig
         category= "ASOS EDITION"
         title= "glamor girl"
         but='SHOP THE BRAND'
         image= "https://content.asos-media.com/-/media/homepages/ww/2022/june/06/moments/ww_asos_edition_moment_870x1110_v3.jpg"/>
        <MensCardBig
        category ="SUMMER LOVE"
        title= "Featherweight chic"
        but='SHOP ASOS DESIGN'
        image= "https://content.asos-media.com/-/media/homepages/ww/2022/june/06/moments/ww_summer_romance_moment_870x1110.jpg"/>
      </div>

      <div style={{marginTop:"40px"}} >
        <img src="https://i.ibb.co/MVDTWMc/Screenshot-912.png" alt="" />
      </div>
      <div style={{marginTop:"40px"}} >
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

          <div>
            <hr />
            <Visit/>
            <FooterPage/>
          </div>
      </div>
    </div>
  )
}

export default Womens;