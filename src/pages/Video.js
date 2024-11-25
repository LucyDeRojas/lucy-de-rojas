import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Layout from "@/Components/Layout";





export default function Video () {


        let videoItem = "w-full md:w-1/2 xl:w-1/3 rounded-lg drop-shadow-xl";

return (<Layout>
<h1>Video Editing & <br />Motion Graphics</h1>

<main className="px-14">


<p>



Welcome to my video editing and motion graphics portfolio! With a passion for storytelling through dynamic visuals, I specialize in creating engaging video content that captures attention and delivers impactful messages.

<br /><br />
From sleek transitions and animated infographics to polished promotional videos and social media clips, my work combines creativity with technical precision. Whether collaborating on a brand campaign, crafting explainer videos, or enhancing digital experiences, I bring concepts to life through visually compelling and cohesive designs.
<br /><br />
Dive in and explore how I transform ideas into motion!
</p>






{/* videos wrapper: */}
<div className="flex flex-col w-full place-items-center gap-10 my-7 py-5">





<video src="/Media/Images/Portfolio/Video/ScannAppeal Christmas Carols 2023.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>




<video src="/Media/Images/Portfolio/Video/Elite movie night 2023 FINAL-OutdoorCinema2.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>







<video src="/Media/Images/Portfolio/Video/Kophill  Climb.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>



<video src="/Media/Images/Portfolio/Video/Mario.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>



<video src="/Media/Images/Portfolio/Video/What Is Graphic Design.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>



<video src="/Media/Images/Portfolio/Video/CSSC Star Wars Centenary Introduction original music.mp4" type="video/mp4"controls className={videoItem}></video>





<video src="/Media/Images/Portfolio/Video/GoKartingTaplow.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>






<video src="/Media/Images/Portfolio/Video/StephieFame.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>


<video src="/Media/Images/Portfolio/Video/InviteToTheGames.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>



<video src="/Media/Images/Portfolio/Video/LewisCup.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>







<video src="/Media/Images/Portfolio/Video/ThankYouVolunteers.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>










<video src="/Media/Images/Portfolio/Video/Naphill Tennis Club - Tennis Ball Machine.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>


<video src="/Media/Images/Portfolio/Video/NaphillTennisClub - SlowMotion.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>




<video src="/Media/Images/Portfolio/Video/What Is Tennis.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>



<video src="/Media/Images/Portfolio/Video/Vandalism.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>




</div>
</main>
</Layout>)};
























