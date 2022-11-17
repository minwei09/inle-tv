import React from 'react'

import { BsSquareFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

import TinyFlag from "tiny-flag-react";

const links = [
    {name: 'STANDARD CHANNEL LISTS', text1: 'OVER 3,000 + LIVE CHANNELS', text2: '▪️SD , HD , Quality', 
    section_1: [
        {id: '1', name: 'Documentaries 🦧 🐍 🦑'},
        {id: '2', name: 'Movies Network 🧜 🥷 🧞‍♂️'},
        {id: '3', name: 'Sports Networks 🏉 🥊 ⚽️'},
        {id: '4', name: 'Kids 🍿 🍪 🍼'},
        {id: '5', name: 'News 📝 ⛈ 🌎'},
        {id: '6', name: 'Music 🎸🥁 🎷'},
        {id: '7', name: 'Betting ♠️ 🎲 🎰'},
        {id: '8', name: 'Entertainment ✈️ 🏟 🎡'},
        {id: '9', name: 'Regional 🌆 🏙 🌉'},
    ],
    section_2a: [
        {id: '1', name: 'ABC/CBS/NBC/FOX'},
        {id: '2', name: 'PPV Live Events 🥊'},
        {id: '3', name: 'UFC Fight Live Events 🥊'},
        // {id: '4', name: 'F1-TV / Motogp'},
        {id: '5', name: 'Fox & Bally Network'},
        {id: '6', name: 'ESPN'},
        // {id: '7', name: 'NFL/NCAAF'},
        {id: '8', name: 'NBC Sports'},
        {id: '9', name: 'NFL'},
        {id: '10', name: 'NBA'},
        {id: '11', name: 'MLB '},
        {id: '12', name: 'NHL'},
        {id: '23', name: '24/7 Channels'},
        {id: "34", name: 'Adult channels'}
    
    ],
    section_2b: [
        // {id: '12', name: ''},
        // {id: '13', name: 'Football/Soccer ⚽️'},
        // {id: '14', name: 'DAZN CA/UK/IT/PL'},
        // {id: '15', name: 'UK Sky Sports'},
        // {id: '16', name: 'UK BT Sports'},
        // {id: '17', name: 'Rugby Pass'},
        // {id: '18', name: 'World Sports'},
        // {id: '19', name: 'Bein Sports'},
        // {id: '20', name: 'Super-sports'},
        // {id: '21', name: 'Astro Super-sports'},
        // {id: '22', name: 'HK Now Sports'},
    ],
    section_2c: [
        // {id: '23', name: ''},
        // {id: '24', name: 'Eleven Sports'},
        // {id: '25', name: 'Saudi Sports (SSC)'},
        // {id: '26', name: 'Peacock'},
        // {id: '27', name: 'Setanta Sports'},
        // {id: '28', name: 'Spark Sports'},
        // // {id: '29', name: 'NZ Sports'},
        // {id: '30', name: 'Stan Sports'},
        // {id: '31', name: 'Rush Sports'},
        // {id: '32', name: 'Mola TV'},
        // {id: '33', name: 'Via-play'},
        
    ],
    section_3: [
        {id: '1', flag: 'US', name: 'USA - Channels'},
        {id: '2', flag: 'GB', name: 'UK - Channels'},
        {id: '3', flag: 'CA', name: 'Canada - Channels'},
        // {id: '4', flag: 'ES', name: 'Spain - Channels'},
        // {id: '5', flag: 'PT', name: 'Portugal - Channels '},
        // {id: '6', flag: 'IT', name: 'Italy - Channels'},
        // {id: '7', flag: 'NL', name: 'Netherland - Channels '},
        {id: '8', flag: 'MX', name: 'Mexico - Channels'},
        // {id: '9', flag: 'IN', name: 'Indian - Channels '},
        // {id: '10', flag: 'MY', name: 'Malaysia - Channels'},
        // {id: '11', flag: 'ZA', name: 'South Africa (DSTV) Channels'},       
    ],
    bottomtext: [
        {id: 1, name: 'Support all devices'},
        {id: 2, name: 'Minimum Internet Speed 10 Mbps'},
    ]
    
    },

    {name: 'PREMIUM CHANNEL LISTS', text1: 'OVER 7,000 + LIVE CHANNELS', text2: '▪️SD , HD , FHD', 
    section_1: [
        {id: '1', name: 'Documentaries 🦧 🐍 🦑'},
        {id: '2', name: 'Movies Network 🧜 🥷 🧞‍♂️'},
        {id: '3', name: 'Sports Networks 🏉 🥊 ⚽️'},
        {id: '4', name: 'Kids 🍿 🍪 🍼'},
        {id: '5', name: 'News 📝 ⛈ 🌎'},
        {id: '6', name: 'Music 🎸🥁 🎷'},
        {id: '7', name: 'Betting ♠️ 🎲 🎰'},
        {id: '8', name: 'Entertainment ✈️ 🏟 🎡'},
        {id: '9', name: 'Regional 🌆 🏙 🌉'},
    ],
    section_2a: [
        {id: '1', name: 'ABC/CBS/NBC/FOX'},
        {id: '2', name: 'PPV Live Events 🥊'},
        {id: '3', name: 'UFC Fight Live Events 🥊'},
        {id: '4', name: 'F1-TV / Motogp'},
        {id: '5', name: 'Fox & Bally Network'},
        {id: '6', name: 'ESPN+'},
        {id: '7', name: 'NFL/NCAAF'},
        {id: '8', name: 'NBA/NCAAB'},
        {id: '9', name: 'MLB'},
        {id: '10', name: 'NHL/AHL'},
        {id: '11', name: 'MLS ⚽️'},
    ],
    section_2b: [
        {id: '12', name: 'Ifollow ⚽️'},
        {id: '35', name: 'SPFL ⚽️'},
        {id: '13', name: 'Football/Soccer ⚽️'},
        {id: '14', name: 'DAZN CA/UK/IT/PL'},
        {id: '15', name: 'UK Sky Sports'},
        {id: '16', name: 'UK BT Sports'},
        {id: '17', name: 'Rugby Pass'},
        {id: '18', name: 'World Sports'},
        {id: '19', name: 'Bein Sports'},
        {id: '20', name: 'Super-sports'},
        {id: '21', name: 'Astro Super-sports'},
        {id: '22', name: 'HK Now Sports'},
    ],
    section_2c: [
        {id: '23', name: 'Optus Sports'},
        {id: '24', name: 'Eleven Sports'},
        {id: '25', name: 'Saudi Sports (SSC)'},
        {id: '26', name: 'Peacock'},
        {id: '27', name: 'Setanta Sports'},
        {id: '28', name: 'Spark Sports'},
        {id: '29', name: 'NZ Sports'},
        {id: '30', name: 'Stan Sports'},
        {id: '31', name: 'Rush Sports'},
        {id: '32', name: 'Mola TV'},
        {id: '33', name: 'Via-play'},
        {id: "34", name: 'Adult channels'}
    ],
    section_3: [
        {id: '1', flag: 'US', name: 'USA - Channels'},
        {id: '2', flag: 'GB', name: 'UK - Channels'},
        {id: '3', flag: 'CA', name: 'Canada - Channels'},
        {id: '4', flag: 'ES', name: 'Spain - Channels'},
        {id: '5', flag: 'PT', name: 'Portugal - Channels '},
        {id: '6', flag: 'IT', name: 'Italy - Channels'},
        {id: '7', flag: 'NL', name: 'Netherland - Channels '},
        {id: '8', flag: 'MX', name: 'Mexico - Channels'},
        {id: '9', flag: 'IN', name: 'Indian - Channels '},
        {id: '10', flag: 'MY', name: 'Malaysia - Channels'},
        {id: '11', flag: 'ZA', name: 'South Africa (DSTV) Channels'},       
    ],
    bottomtext: [
        {id: 1, name: 'Support all devices'},
        {id: 2, name: 'Minimum Internet Speed 10 Mbps'},
    ],

    },
]

const Channels = () => {

    const h1 = useSelector( state => state.language.choose_Language[8].Channels[0].h1)

    function flagURL(code) {
        return `https://cdn.jsdelivr.net/npm/react-flagkit@1.0.2/img/SVG/${code}.svg`;
    }

  return (
    <div>
        <div className='p-3 flex flex-col gap-y-8' >
        {links.map( item => (
            <div key={item.name} className=" ">
                <h1 className='text-xl text-center py-2 px-4 mx-auto  text-white bg-blue rounded-xl w-fit '>{item.name}</h1>
                {/* - CONTAINER */}
                <div className='mb-[2rem] p-3  ma-w-sm m-auto'>
                    <div className='py-3 text-center flex flex-col gap-y-3 sm:py-6'>
                        <p className='font-semibold tracking-wide'>{item.text1}</p>
                        <p className='font-semibold tracking-wide'>{item.text2}</p>
                    </div>

                    <div className=' sm:flex sm:gap-10 sm:justify-center sm:flex-wrap '>

                    <div className='py-2 flex flex-col gap-y-1  border_channel'>
                        {item.section_1.map( s1 => (
                            <div className=' flex items-center gap-3 px-2 ' key={s1.id}>
                               <BsSquareFill className='text-blue'/>
                                <h1 className='tracking-wider'>{s1.name}</h1>
                            </div>
                        ))}
                    </div>

                    <div className='pt-2 flex  flex-col gap-y-1  border_channel'>
                        {item.section_2a.map( s2 => (
                            <div className=' flex items-center gap-3 px-2' key={s2.id}>
                                {s2.name === 'Adult channels' ? 
                                <h1>🔞</h1> : <h1>🌀</h1>}
                                <h1 className='tracking-wider'>{s2.name}</h1>
                            </div>
                        ))}
                    </div>

                    { item.name === 'PREMIUM CHANNEL LISTS' && (
                        <div className=' flex  flex-col gap-y-1  border_channel'>
                        {item.section_2b.map( s2 => (
                            <div className=' flex items-center gap-3 px-2' key={s2.id}>
                                {s2.name === 'Adult channels' ? 
                                <h1>🔞</h1> : <h1>🌀</h1>}
                                <h1 className='tracking-wider'>{s2.name}</h1>
                            </div>
                        ))}
                    </div>
                    )}

                    {item.name === 'PREMIUM CHANNEL LISTS' && (
                        <div className='pb-2 flex  flex-col gap-y-1  border_channel'>
                        {item.section_2c.map( s2 => (
                            <div className=' flex items-center gap-3 px-2' key={s2.id}>
                                {s2.name === 'Adult channels' ? 
                                <h1>🔞</h1> : <h1>🌀</h1>}
                                <h1 className='tracking-wider'>{s2.name}</h1>
                            </div>
                        ))}
                    </div>
                    )}

                    <div className='py-2 flex flex-col gap-y-1 border_channel'>
                        {item.section_3.map( s3 => (
                            <div className=' flex items-center gap-3 px-2' key={s3.id}>
                                <TinyFlag  country={s3.flag}
                                alt={s3.flag + " Flag"}
                                fallbackImageURL={flagURL(s3.flag)}/>
                                <h1 className='tracking-wider'>{s3.name}</h1>
                            </div>
                        ))}
                    </div>

                    {/* <div className='py-2 flex flex-col gap-y-1'>
                        {item.bottomtext.map( bt => (
                            <div className='text-center font-semibold' key={bt.id}>
                                <h1>{bt.name}</h1>
                            </div>
                        ))}
                    </div> */}

                    </div>

                </div>

                {/* <hr className='text-blue'/> */}
            
            </div>       
        ))}
        </div>
        

        <h1 className='text-center text-2xl pb-10 py-4'>{h1}</h1>
    </div>
  )
}

export default Channels