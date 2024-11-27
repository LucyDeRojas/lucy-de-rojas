import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Layout from "@/Components/Layout";





export default function Video () {


        let videoItemWrapper = "flex flex-col items-center xl:flex-row p-5 border-2 border-red-200 rounded-2xl border-dashed text-center xl:text-left justify-between w-full lg:w-3/4";

        let paragraphSpacing = "py-5";
        let paraTitle = "text-2xl";


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
        <b className={paraTitle}> ScannAppeal</b><br />
        (2024) <br />
        <b>Work included:</b> <br />
Video editing, motion graphics, visual effects. <br />
<b>Usage:</b> <br />
Website, social media. </p>



<video src="/Media/Images/Portfolio/Video/ScannAppeal Christmas Carols 2023.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>





<div className={videoItemWrapper}>

        <p className={paragraphSpacing}>
        <b className={paraTitle}> ScannAppeal</b><br />
Top Gun Outdoor Cinema Introduction<br />
(2024)<br />
<b>

Work included:<br />
</b>
Video editing, motion graphics, visual effects, illustrator, music sourcing.<br />
<b>

Usage:<br />
</b>
Website, social media.
</p>



<video src="/Media/Images/Portfolio/Video/Elite movie night 2023 FINAL-OutdoorCinema2.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>




<div className={videoItemWrapper}>
<p className={paragraphSpacing}><b className={paraTitle}>
Kop Hill Climb Charity </b><br />
(2023)<br />
<b>
Work included:<br />
</b>
Video editing, motion graphics, visual effects, sourcing video from BBC.<br />
<b>

Usage:<br />
</b>
Website, social media.
</p>

<video src="/Media/Images/Portfolio/Video/Kophill  Climb.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>






<div className={videoItemWrapper}>
<p>
<b className={paraTitle}>Friend request video</b> <br />
(2022)<br />
<b>

Work included:<br />
</b>
Video editing, Music sourcing (provided by our son).<br />
<b>

Usage:<br />
</b>
Social media
</p>

<video src="/Media/Images/Portfolio/Video/Mario.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>




<div className={videoItemWrapper}>
<p className={paragraphSpacing}>

<b className={paraTitle}>

Fun Project:<br />
</b>
What is Graphic Design?<br />
(2015)<br />
<b>

Work included:<br />
</b>
Video editing, motion graphics, visual effects, music sourcing. <br />
<b>
Usage:<br />
</b>
Website, social media.</p>
<video src="/Media/Images/Portfolio/Video/What Is Graphic Design.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>







<div className={videoItemWrapper}>
<p className={paragraphSpacing}>
<b className={paraTitle}>
CSSC <br /></b>
Centenary Celebration<br />
(2018)<br />
<b>
Work included:<br />
</b>
Motion graphics, video editing, visual effects, music sourcing. <br />
<b>
Usage:<br />
</b>
Cinema screen projection at AGM, website, social media. </p>

<video src="/Media/Images/Portfolio/Video/VidoesWithFirstFrame/CSSC Star Wars Centenary Introduction original music.mp4.mp4" type="video/mp4"controls className={videoItem}></video>
</div>








<div className={videoItemWrapper}>
<p className={paragraphSpacing}>
<b className={paraTitle}>
Go Kart Race<br /></b>
(2016)<br />
<b>

Work included:<br />
</b>
Video editing, motion graphics, visual effects, music sourcing.<br />
<b>
Usage:<br />
</b>
Social media.</p>
<video src="/Media/Images/Portfolio/Video/GoKartingTaplow.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>







<div className={videoItemWrapper}>
<p className={paragraphSpacing}><b className={paraTitle}>
Fame Musical <br /></b>
(Selection)<br />
(2022)<br />
<b>
Work included:<br />
</b>
Video editing, motion graphics.<br />
<b>
Usage:<br />
</b>
Private viewing.</p>
<video src="/Media/Images/Portfolio/Video/StephieFame.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>








<div className={videoItemWrapper}>
<p className={paragraphSpacing}>
<b className={paraTitle}>
CSSC<br /></b>
(2018)<br />
<b>
Work inc luded:<br />
</b>
Video editing, motion graphics, visual effects.<br />
<b>
Usage:<br />

</b>
Website, social media, music sourcing.</p>
<video src="/Media/Images/Portfolio/Video/InviteToTheGames.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>








<div className={videoItemWrapper}>
<p className={paragraphSpacing}>
<b className={paraTitle}>
CSSC Lewis Cup<br /></b>
Football Cup<br />
(2017)<br />
<b>

Work included:<br />
</b>
Motion graphics, video editing, visual effects, music sourcing, Illustrator.<br />
<b>

Usage:<br />
</b>
Website, social media.</p>
<video src="/Media/Images/Portfolio/Video/LewisCup.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>








<div className={videoItemWrapper}>
<p className={paragraphSpacing}>
<b className={paraTitle}>
CSSC<br /></b>
(2019)<br />
<b>
Work included:<br />
</b>
Video recording, video editing, motion graphics, visual effects, music Sourcing<br />
<b>

Usage:<br />
</b>
Website, social media.</p>
<video src="/Media/Images/Portfolio/Video/ThankYouVolunteers.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>











<div className={videoItemWrapper}>
<p className={paragraphSpacing}>
<b className={paraTitle}>
Naphill Tennis Club - Invite To Open Day<br /> </b>
(2015)<br />
<b>
Work included:<br />

</b>
Video editing, motion graphics, visual effects, music sourcing, voice over (provided by our son).<br />
<b>
Usage:<br />

</b>
Website, social media.</p>
<video src="/Media/Images/Portfolio/Video/Naphill Tennis Club - Tennis Ball Machine.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>






<div className={videoItemWrapper}>
<p className={paragraphSpacing}>
<b className={paraTitle}>
Naphill Tennis Club - Rusty Rackets Invite<br /></b>
(2015)<br />
<b>
Work included:<br />
</b>
Video editing, motion graphics, visual effects, music sourcing.
<b>
Usage:<br />
</b>
Website, social media.</p>
<video src="/Media/Images/Portfolio/Video/NaphillTennisClub - SlowMotion.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>








<div className={videoItemWrapper}>
<p className={paragraphSpacing}>
<b className={paraTitle}>
Naphill Tennis Club - What Is Tennis?<br /></b>
(2015)<br />
<b>
Work included:<br />
</b>
Video editing, motion graphics, visual effects, music sourcing.<br />
<b>
Usage:<br />
</b>
Website, social media.</p>
<video src="/Media/Images/Portfolio/Video/What Is Tennis.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>









<div className={videoItemWrapper}>
<p className={paragraphSpacing}>
<b className={paraTitle}>
Fun project<br /></b>
(2015)<br />
<b>
Work included:<br />
</b>
Video editing, motion graphics, visual effects, music sourcing.<br />
<b>
Usage:<br />
</b>
Website, social media.</p>
<video src="/Media/Images/Portfolio/Video/Vandalism.mp4" width="100%" height="auto" type="video/mp4"controls className={videoItem}></video>
</div>



</div>
</main>
</Layout>)};
























