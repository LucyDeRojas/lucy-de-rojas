import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Layout from "@/Components/Layout";




export default function Print () {


        let imagesALLWrapper = "w-full flex flex-col bg-red-300 justify-center my-5 py-5 items-center";
        let imagesWrapper = "w-1/2 flex flex-col bg-green-500 p-5 rounded-2xl gap-5 drop-shadow-2xl my-5";






return (<Layout>
        <Head>
                <title>Lucy de Rojas - Print Design</title>
        </Head>

<h1>Print Design</h1>
<main className="px-14">

<p>


Welcome to my print portfolio, a curated collection of my journey as a graphic designer. With over 20 years of experience crafting impactful designs across diverse mediums, I take pride in transforming ideas into visually compelling narratives. From elegant brochures to bold promotional materials, my work reflects a passion for creativity, precision, and storytelling. Each piece showcases not only technical skill but a commitment to delivering designs that resonate with audiences and elevate brands.
<br />
<br />
Thank you for taking the time to explore my work—let’s create something extraordinary together!


</p>




{/* all images wrapper: */}
<div className={imagesALLWrapper}>


<div className={imagesWrapper}>
<Image
src="/Media/Images/Portfolio/Print Design/Harveys/NU-Solutions-Sustainable-Solutions.jpg"
width={500}
height={500}
alt=""
layout="responsive"
/>


<Image
src="/Media/Images/Portfolio/Print Design/Harveys/Grains.jpg"
width={500}
height={500}
alt=""
layout="responsive"
/>

</div>







<div className={imagesWrapper}>

<Image
src="/Media/Images/Portfolio/Print Design/Leisrure_Scenes/SPREADS/LeisureSceneAutumn2019/Lesiure_Scene_Autumn_Winter_2019-1.jpg"
width={500}
height={500}
alt=""
layout="responsive"
 />


<Image
src="/Media/Images/Portfolio/Print Design/Leisrure_Scenes/SPREADS/LeisureSceneAutumn2019/LesiureSceneAutumn2019---5.jpg"
width={500}
height={500}
alt=""
layout="responsive"
 />

</div>







<div className={imagesWrapper}>

        <Image
        src="/Media/Images/Portfolio/Print Design/Leisrure_Scenes/SPREADS/LeisureSceneSpring2016/Lesiure_Scene_Spring_Summer_2016.jpg"
        width={500}
        height={500}
        alt=""
        layout="responsive"
         />


         <Image
         src="/Media/Images/Portfolio/Print Design/Leisrure_Scenes/SPREADS/LeisureSceneSpring2016/Lesiure_Scene_Spring_Summer_20168.jpg"
         width={500}
         height={500}
         alt=""
         layout="responsive"
          />
</div>








<div className={imagesWrapper}>


        <Image
        src="/Media/Images/Portfolio/Print Design/Leisrure_Scenes/SPREADS/LeisureSceneAutumn2017/Lesiure_Scene_Spring_Summer_2017.jpg"
        width={500}
        height={500}
        alt=""
        layout="responsive"
         />




         <Image
         src="/Media/Images/Portfolio/Print Design/Leisrure_Scenes/SPREADS/LeisureSceneAutumn2017/LesiureSceneSpring20175.jpg"
         width={500}
         height={500}
         alt=""
         layout="responsive"
          />
</div>








<div className={imagesWrapper}>

<Image
src="/Media/Images/Portfolio/Print Design/Leisrure_Scenes/SPREADS/LeisureSceneAutumn2017/Lesiure_Scene_Autumn_Winter_2018.jpg"
width={500}
height={500}
alt=""
layout="responsive"
 />




<Image
src="/Media/Images/Portfolio/Print Design/Leisrure_Scenes/SPREADS/LeisureSceneAutumn2017/LeisureSceneAutumn2017--6.jpg"
width={500}
height={500}
alt=""
layout="responsive"
 />


</div>










<div className={imagesWrapper}>

<Image
src="/Media/Images/Portfolio/Print Design/Booklets/BenefitsOfMembership/CSSCBenefitsofMembership---.jpg"
width={500}
height={500}
alt=""
layout="responsive"
 />




<Image
src="/Media/Images/Portfolio/Print Design/Booklets/BenefitsOfMembership/CSSCBenefitsofMembership---16.jpg"
width={500}
height={500}
alt=""
layout="responsive"
 />


</div>










<div className={imagesWrapper}>


<Image
src="/Media/Images/Portfolio/Print Design/Booklets/WhatsOnInLondon2017/WhatsOnInLondon2017-----.jpg"
width={500}
height={500}
alt=""
layout="responsive"
 />



<Image
src="/Media/Images/Portfolio/Print Design/Booklets/WhatsOnInLondon2017/WhatsOnInLondon2017-----14.jpg"
width={500}
height={500}
alt=""
layout="responsive"
 />

</div>







<div className={imagesWrapper}>

<Image
src="/Media/Images/Portfolio/Print Design/Booklets/BenefitsOfMembership2017/CSSCBenefitsofMembership2017---.jpg"
width={500}
height={500}
alt=""
layout="responsive"
 />




<Image
src="/Media/Images/Portfolio/Print Design/Booklets/BenefitsOfMembership2017/CSSCBenefitsofMembership2017---5.jpg"
width={500}
height={500}
alt=""
layout="responsive"
 />




</div>








<div className={imagesWrapper}>

<Image
src="/Media/Images/Portfolio/Print Design/Leisrure_Scenes/SPREADS/LeisureSceneSpring2018/Lesiure_Scene_Spring_Summer_2018.jpg"
width={500}
height={500}
alt=""
layout="responsive"
 />



<Image
src="/Media/Images/Portfolio/Print Design/Leisrure_Scenes/SPREADS/LeisureSceneSpring2018/LesiureSceneSpring2018---9.jpg"
width={500}
height={500}
alt=""
layout="responsive"
 />


</div>







<div className={imagesWrapper}>


<Image
src="/Media/Images/Portfolio/Print Design/Booklets/WhatsOnInLindon2016/WhatsOnInLondon2016---.jpg"
width={500}
height={500}
alt=""
layout="responsive"
 />




<Image
src="/Media/Images/Portfolio/Print Design/Booklets/WhatsOnInLindon2016/WhatsOnInLondon2016---2.jpg"
width={500}
height={500}
alt=""
layout="responsive"
 />



</div>












</div>   {/* end of all images wrapper */}
</main></Layout>)};

















