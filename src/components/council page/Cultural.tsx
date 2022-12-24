import { useState, useEffect } from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import { Navigation } from "swiper"
import 'swiper/css'
import './Cultural.css'

 interface club{
    name: string,
    desc: string
 }
const clubs:club[] = [
        {name: 'infocus',
        desc: 'Life is all about memories. We at InFocus work hard to glorify those moments which add up to your journey making it worthwhile. The club was awarded the best cultural club of the year 2015-16. We not only take photos but also conduct sessions for students who are willing to learn photography. We conduct events throughout the year and have them approachable for everyone out there. Our aim is to expand the club to newer horizons and make the learning experience comfortable for everyone interested.',
    },
    {name: 'litsoc', desc:'The LitSoc, short for The Literary Society, is a hobby club for a number of activities of “literary nature”. Originally started by two fiery young men, with unabated passion, as a club for quizzing every week, the LitSoc quickly encompassed a number of activities, besides quizzing. The Lexicon ( https://theiithlexicon.wordpress.com ) is our online blog/magazine where young writers weave words of their choice, be it hot opinions, satire or evocative pieces that surprise your way of thinking or tales worthy of a college level bard. Debates are held on both pressing current topics and more nuanced policy based ones. We also have a readers circle that meets up every once in a while to discuss books and literature. The LitSoc hopes to hold many more interesting literary activities, encourage fresh ideas and have fun.  ',},
    {name: 'btl', desc:'The behind the lens club exists to Foster the appreciation and study of film making. The purpose of our club is to give students the opportunity to approach all aspects of film and film making in a serious, meaningful, and in-depth manner. By offering film screenings, speakers, and production opportunities, we strive to expose and educate our student body about the medium we love. If you love watching films, talking about them, making them, or just have interest in connecting with other film lovers, you\'ve come to the right place. Come join us in our weekly meetings - we\'d love to have you.',},
    {name: 'vibes', desc:'Welcome to VIBES - The music club of IITH! We conduct regular jamming sessions, guitar sessions, vocal sessions etc. to encourage learning new things and having fun. We want to bring out the musician in everyone. Join us if you love to sing, play or write music! Vibes was the winner of the "Best Cultural Club" title in the year 2017-18!',},
    {name: 'shuffle', desc:'An assorted collection of quirky energy - that\'s the shuffle crew for you. Dance is the ideal workout for both mind and body. This is the excuse we often give for our indelible love for dance, which is only second to our love for food. (one needs to eat after a tough practice session!) We, the dance club of IIT Hyderabad, never miss out on the opportunity to showcase our moves and our talent. Mostly, we focus on becoming a better, classier version of ourselves with each performance. But sometimes, we simply focus on enjoying the dance. :)',},
    {name: 'gesture', desc:'Creativity and imagination leads to innovation and inventions. Gestures, the arts and craft club of IIT Hyderabad, guarantees the students a fun filled ride with a lots of activities. It promises a whimsical escape from the stressful and hectic college life. It does not matter if you\'re a noob or a ninja, there is place for everyone',},
    {name: 'rang', desc:'Rang De Manch is the official drama club of IITH which works under the cultural council of IITH. It is a platform where the students can show their extra curricular activities related with acting. It presents a bunch of amazing events round the year from stage and street performances to mimes and comedy acts that entertain the junta thoroughly. The club aims to entertain people and along with that spread messages for the betterment of the society through mimes,street plays etc. Rang De Manch is a home to all the lovers of acting. A plethora of talented individuals who join every year to take forward IITH\'s rich legacy in dramatics. From writing plays, to direction and performance members get to learn the skills required for each of these jobs.',}
]

function Card({title, desc}){
    return <div className="bg-white text-black rounded-2xl flex flex-col justify-center items-center p-[2rem] pt-[1rem] mt-3 max-w-5xl">
        <div className="self-start font-semibold"><h2 className="text-4xl">{title}</h2></div>
        <div className="bg-slate-400 h-[15rem] w-[15rem] mt-4 rounded-2xl">

        </div>
        <div className="mt-8"><p>{desc}</p></div>
    </div>
}

function CulturalMobile(){
    return <div className="lg:hidden">
        <Swiper 
            loop={true} 
            autoHeight={true} 
            slidesPerView={'auto'} 
            centeredSlides={true} 
            spaceBetween={20} 
            navigation={true} 
            className='[&>div]:w-[80%]'
            >
            <SwiperSlide className="">
                <Card title={'Infocus'} desc={clubs[0].desc}/>
            </SwiperSlide>
            <SwiperSlide className=""><Card title={'Litsoc'} desc={clubs[1].desc}/></SwiperSlide>
            <SwiperSlide className=""><Card title={'Behind The Lens'} desc={clubs[2].desc}/></SwiperSlide>
            <SwiperSlide className=""><Card title={'Vibes'} desc={clubs[3].desc}/></SwiperSlide>
            <SwiperSlide className=""><Card title={'Shuffle'} desc={clubs[4].desc}/></SwiperSlide>
            <SwiperSlide className=""><Card title={'Gesture'} desc={clubs[5].desc}/></SwiperSlide>
            <SwiperSlide className=""><Card title={'Rang de Manch'} desc={clubs[6].desc}/></SwiperSlide>
        </Swiper>
    </div>
}

function Cultural() {
    const [club, setClub] = useState('infocus');
    const [desc, setDesc] = useState(clubs[0].desc)

    useEffect(()=>{
        console.log({club})
        let description = clubs.filter(el => el.name===club)
        setDesc(description[0].desc)
    },[club])

  return (
    <div className="mb-8 col-span-6 w-full">
        <div>
          <h2 className='lg:text-4xl text-3xl font-bold text-center text-black lg:text-left'>Cultural and Literary Secretary</h2>
          <div className='flex flex-col lg:flex-row gap-4 justify-center items-center mt-5 lg:justify-start' >
            <div className='bg-white text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl'>
              <h4 className='italic text-p'>Cultural & Literary Secretary</h4>
              <h3 className='lg:text-2xl text-xl font-semibold text-black'>NETHRA MANDA</h3>
              <address className='pt-3'>
              <h4 className='lg:text-xl text-lg font-semibold'>7995813273</h4> 
              {/* <a href="mailto:general_secy_1@gymkhana.iith.ac.in" className=' lg:text-xl text-[1rem]'>general_secy_1@gymkhana.iith.ac.in</a> */}
              </address>
            </div>
          </div>
        </div>
        <h2 className='lg:text-4xl text-4xl font-bold text-center text-black lg:text-left mt-[2rem]'>
            Clubs
        </h2>
        <div className="lg:grid lg:grid-cols-5 pt-4 hidden">
            <ul className={`lg:col-span-1 hidden text-2xl lg:flex lg:flex-col gap-3 [&>li]:cursor-pointer `}>
                <li className={`text-p ${club==='infocus' ? '':'text-opacity-40'}`} onClick={()=>{setClub('infocus')}}>Infocus</li>
                <li className={`text-p ${club==='litsoc' ? '':'text-opacity-40'}`} onClick={()=>{setClub('litsoc')}}>Litsoc</li>
                <li className={`text-p ${club==='vibes' ? '':'text-opacity-40'}`} onClick={()=>{setClub('vibes')}}>Vibes</li>
                <li className={`text-p ${club==='rang' ? '':'text-opacity-40'}`} onClick={()=>{setClub('rang')}}>Rang De Manch</li>
                <li className={`text-p ${club==='btl' ? '':'text-opacity-40'}`} onClick={()=>{setClub('btl')}}>Behind The Lens</li>
                <li className={`text-p ${club==='shuffle' ? '':'text-opacity-40'}`} onClick={()=>{setClub('shuffle')}}>Shuffle</li>
                <li className={`text-p ${club==='gesture' ? '':'text-opacity-40'}`} onClick={()=>{setClub('gesture')}}>Gesture</li>
            </ul>
            <div className="lg:col-span-4 col-span-6 grid grid-cols-6 gap-6 lg:gap-[2rem] items-center relative">
                <div className="lg:col-span-4 lg:text-[18px] col-span-full lg:row-span-full ">
                    <p className="mt-8 justify-self-start">{desc}</p>
                </div>
                <div className="lg:col-span-2 lg:p-8 bg-slate-300 h-full col-span-full  lg:row-span-full">
                    
                </div>
            </div>
        </div>
        <CulturalMobile/>
    </div>
  )
}

export default Cultural