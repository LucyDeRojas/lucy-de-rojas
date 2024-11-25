import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Layout from "@/Components/Layout";





export default function Video () {


        let videoItemWrapper = "flex flex-col items-center xl:flex-row p-5 border-2 border-red-200 rounded-2xl border-dashed text-center xl:text-left justify-between";

        let paragraphSpacing = "py-5";


        let videoItem = "w-full md:w-3/4 xl:w-1/2 rounded-lg drop-shadow-xl";


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



<div className={videoItemWrapper}>

        <p className={paragraphSpacing}>
        ScannAppeal<br />
        (2024) <br />
Work included: <br />
Video editing, motion graphics, visual effects. <br />
Usage: <br />
Website, social media. </p>



<video src="/Media/Images/Portfolio/Video/ScannAppeal Christmas Carols 2023.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>





<div className={videoItemWrapper}>

        <p className={paragraphSpacing}>
Scan Appeal<br />
Top Gun Outdoor Movie Introduction<br />
(2024)<br />

Work included:<br />
Video editing, motion graphics, visual effects, illustrator, music sourcing.<br />

Usage:<br />
Website, social media.
</p>



<video src="/Media/Images/Portfolio/Video/Elite movie night 2023 FINAL-OutdoorCinema2.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>




<div className={videoItemWrapper}>
<p className={paragraphSpacing}>
Kop Hill Climb Charity <br />
(2023)<br />

Work included:<br />
Video editing, motion graphics, visual effects, sourcing video from BBC.<br />

Usage:<br />
Website, social media.
</p>

<video src="/Media/Images/Portfolio/Video/Kophill  Climb.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>






<div className={videoItemWrapper}>
<p>Friend request video <br />
(2022)<br />

Work included:<br />
Video editing, Music sourcing (provided by our son).<br />
Usage:<br />
Social media
</p>

<video src="/Media/Images/Portfolio/Video/Mario.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>




<div className={videoItemWrapper}>
<p className={paragraphSpacing}>
Fun Project:<br />
What is Graphic Design?<br />
(2015)<br />

Work included:<br />
Video editing, motion graphics, visual effects, music sourcing. <br />

Usage:<br />
Website, social media.</p>
<video src="/Media/Images/Portfolio/Video/What Is Graphic Design.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>







<div className={videoItemWrapper}>
<p className={paragraphSpacing}>
CSSC <br />
Centenary Celebration<br />
(2018)<br />

Work included:<br />
Motion graphics, video editing, visual effects, music sourcing. <br />
Usage:<br />
Cinema screen projection at AGM, website, social media. </p>
<video src="/Media/Images/Portfolio/Video/CSSC Star Wars Centenary Introduction original music.mp4" type="video/mp4"controls className={videoItem}></video>
</div>








<div className={videoItemWrapper}>
<p className={paragraphSpacing}>
Go Kart Race<br />
(2016)<br />
Work included:<br />
Video editing, motion graphics, visual effects, music sourcing.<br />

Usage:<br />
Social media.</p>
<video src="/Media/Images/Portfolio/Video/GoKartingTaplow.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>







<div className={videoItemWrapper}>
<p className={paragraphSpacing}>
Fame Musical <br />
(Selection)<br />
(2022)<br />

Work included:<br />
Video editing, motion graphics.<br />

Usage:<br />
Private viewing.</p>
<video src="/Media/Images/Portfolio/Video/StephieFame.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>








<div className={videoItemWrapper}>
<p className={paragraphSpacing}>
CSSC<br />
(2018)<br />

Work included:<br />
Video editing, motion graphics, visual effects.<br />

Usage:<br />
Website, social media, music sourcing.</p>
<video src="/Media/Images/Portfolio/Video/InviteToTheGames.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>








<div className={videoItemWrapper}>
<p className={paragraphSpacing}>
CSSC Lewis Cup<br />
Football Cup<br />
(2017)<br />

Work included:<br />
Motion graphics, video editing, visual effects, music sourcing, Illustrator.<br />

Usage:<br />
Website, social media.</p>
<video src="/Media/Images/Portfolio/Video/LewisCup.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>








<div className={videoItemWrapper}>
<p className={paragraphSpacing}>
CSSC<br />
(2019)<br />

Work included:<br />
Video recording, video editing, motion graphics, visual effects, music Sourcing<br />

Usage:<br />
Website, social media.</p>
<video src="/Media/Images/Portfolio/Video/ThankYouVolunteers.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>











<div className={videoItemWrapper}>
<p className={paragraphSpacing}>
Naphill Tennis Club - Invite To Open Day<br />
(2015)<br />

Work included:<br />
Video editing, motion graphics, visual effects, music sourcing, voice over (provided by our son).<br />

Usage:<br />
Website, social media.</p>
<video src="/Media/Images/Portfolio/Video/Naphill Tennis Club - Tennis Ball Machine.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>






<div className={videoItemWrapper}>
<p className={paragraphSpacing}>
Naphill Tennis Club - Rusty Rackets Invite<br />
(2015)<br />

Work included:<br />
Video editing, motion graphics, visual effects, music sourcing.

Usage:<br />
Website, social media.</p>
<video src="/Media/Images/Portfolio/Video/NaphillTennisClub - SlowMotion.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>








<div className={videoItemWrapper}>
<p className={paragraphSpacing}>
Naphill Tennis Club - What Is Tennis?<br />
(2015)<br />

Work included:<br />
Video editing, motion graphics, visual effects, music sourcing.<br />

Usage:<br />
Website, social media.</p>
<video src="/Media/Images/Portfolio/Video/What Is Tennis.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>









<div className={videoItemWrapper}>
<p className={paragraphSpacing}>
Fun project<br />
(2015)<br />

Work included:<br />
Video editing, motion graphics, visual effects, music sourcing.<br />

Usage:<br />
Website, social media.</p>
<video src="/Media/Images/Portfolio/Video/Vandalism.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>



</div>
</main>
</Layout>)};
























