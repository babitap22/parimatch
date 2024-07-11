import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Proto1 from './assets/image1.jpg';
import Proto2 from './assets/Image2.jpg';
import Proto3 from './assets/gamif_wab_money_c6b3097c90.png';
import Proto4 from './assets/download_desk_66f28b7c05.png';
import Proto5 from './assets/dfghnmn_desk_615eea3392.png';

import Proto6 from './assets/NEW_EMB_DESK_9c6c4d83b4.png';
import Proto7 from './assets/SE_344h96_1_64083c8e15.png';
import Proto8 from './assets/Toto344h96_2_47e167fa53.png';
import Proto9 from './assets/VC_296x84_23_8e99fe9e6d.png';


// import ImageGif1 from './assets/296x84_31_e811521141.gif'
import ImageGif2 from './assets/Aviator_2_1b64aa33b7.gif'
import ImageGif3 from './assets/Jetx_38a021974f.gif'
import ImageGif4 from './assets/Mystery_eff058c1ec.gif'


const Home = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>

            <div>
                <header class="flex items-center justify-between max-sm:hidden p-4 bg-black">
                    <div class="flex items-center space-x-4">
                        <div class="flex items-center space-x-1">
                            <div class="text-yellow-500 font-bold text-lg">PARI</div>
                            <div class="text-yellow-500 font-bold text-lg">MATCH</div>
                        </div>
                        <nav class="flex items-center space-x-4">
                            <a href="#" class="text-gray-400 hover:text-white">Live Events</a>
                            <a href="#" class="text-gray-400 hover:text-white">Upcoming Events</a>
                            <a href="#" class="text-gray-400 hover:text-white">Promotions</a>
                            <a href="#" class="text-gray-400 hover:text-white">Virtual Sport</a>
                            <a href="#" class="text-gray-400 hover:text-white">Slots</a>
                            <a href="#" class="text-gray-400 hover:text-white">Live Casino</a>
                            <a href="#" class="text-gray-400 hover:text-white">TV Games</a>
                            <a href="#" class="text-gray-400 hover:text-white">Instant Games</a>
                        </nav>
                    </div>
                    <div class="flex items-center space-x-4">
                        {/* <img src="path/to/flag-icon.png" alt="Language" class="w-6 h-4"> */}
                        <button class="text-gray-400 hover:text-white">Log in</button>
                        <button class="bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-600">Sign up</button>
                    </div>
                </header>


                <header class="flex items-center justify-between  block md:hidden  p-4 bg-black">
                    <div class="flex items-center space-x-4">
                        <div class="flex items-center space-x-1">
                            <div class="text-yellow-500 font-bold text-lg">PARI</div>
                            <div class="text-yellow-500 font-bold text-lg">MATCH</div>
                        </div>
                       
                    </div>
                    <div class="flex items-center space-x-4">
                        {/* <img src="path/to/flag-icon.png" alt="Language" class="w-6 h-4"> */}
                        <button class="text-gray-400 hover:text-white">Log in</button>
                        <button class="bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-600">Sign up</button>
                    </div>
                </header>


                <div>

                    {/* <aside class="w-64 bg-white shadow-md">
                        <ul class="space-y-2 p-4">
                            <li class="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
                                <img src="path/to/fire-icon.png" alt="All Live" class="w-6 h-6">
                                    <span>All Live</span>
                            </li>
                            <li class="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
                                <img src="path/to/star-icon.png" alt="Favorites" class="w-6 h-6">
                                    <span>Favorites</span>
                            </li>
                            <li class="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
                                <img src="path/to/clock-icon.png" alt="Top Parlays" class="w-6 h-6">
                                    <span>Top Parlays</span>
                            </li>
                            <li class="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
                                <img src="path/to/gift-icon.png" alt="Promotions" class="w-6 h-6">
                                    <span>Promotions</span>
                            </li>
                            <li class="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
                                <img src="path/to/ticket-icon.png" alt="Toto" class="w-6 h-6">
                                    <span>Toto</span>
                            </li>
                            <li class="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
                                <img src="path/to/cricket-icon.png" alt="Cricket" class="w-6 h-6">
                                    <span>Cricket</span>
                            </li>
                            <li class="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
                                <img src="path/to/kabaddi-icon.png" alt="Kabaddi" class="w-6 h-6">
                                    <span>Kabaddi</span>
                            </li>
                            <li class="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
                                <img src="path/to/football-icon.png" alt="Football" class="w-6 h-6">
                                    <span>Football</span>
                            </li>
                            <li class="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
                                <img src="path/to/basketball-icon.png" alt="Basketball" class="w-6 h-6">
                                    <span>Basketball</span>
                            </li>
                            <li class="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
                                <img src="path/to/tennis-icon.png" alt="Tennis" class="w-6 h-6">
                                    <span>Tennis</span>
                            </li>
                            <li class="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded">
                                <img src="path/to/table-tennis-icon.png" alt="Table Tennis" class="w-6 h-6">
                                    <span>Table Tennis</span>
                            </li>
                        </ul>
                    </aside> */}
                    <div className='px-[20px] bg-gray-100"'>
                        <div className="my-8 bg-transparent">
                            <Carousel
                                responsive={responsive}
                                // autoPlay={true}
                                autoPlaySpeed={3000}
                                infinite={true}
                                className="shadow-lg"
                            >
                                <img src={Proto1} alt="Proto1" className="h-70 mb-[10px] w-[95%] object-cover rounded-lg" />
                                <img src={Proto2} alt="Proto2" className="h-70 mb-[10px] w-[95%] object-cover rounded-lg" />
                                <img src={Proto1} alt="Proto1" className="h-70 mb-[10px] w-[95%] object-cover rounded-lg" />
                                <img src={Proto2} alt="Proto1" className="h-70 mb-[10px] w-[95%] object-cover rounded-lg" />
                            </Carousel>
                        </div>

                        <div>
                            <Carousel
                                responsive={responsive}
                                // autoPlay={true}
                                autoPlaySpeed={3000}
                                infinite={true}
                            >

                                <img src={Proto3} alt="Proto3" className="h-50 w-[95%] object-cover rounded-lg" />
                                <img src={Proto4} alt="Proto4" className="h-50 w-[95%] object-cover rounded-lg" />
                                <img src={Proto5} alt="Proto5" className="h-50 w-[95%] object-cover rounded-lg" />
                            </Carousel>
                        </div>

                        <div className="bg-gray-100 py-8">
                            <div className="max-w-screen-xl mx-auto px-4">
                                {/* <h2 className="text-2xl font-bold mb-4">Featured GIFs</h2> */}
                                <Carousel
                                    responsive={responsive}
                                    // autoPlay={true}
                                    autoPlaySpeed={3000}
                                    infinite={true}
                                    containerClass="carousel-container"
                                    itemClass="carousel-item"
                                >
                                    {/* <img src={ImageGif1} alt="Carousel Gif 1" className="mx-auto max-w-full h-auto" /> */}
                                    <img src={ImageGif2} alt="Carousel Gif 2" className="mx-auto max-w-full h-auto" />
                                    <img src={ImageGif3} alt="Carousel Gif 3" className="mx-auto max-w-full h-auto" />
                                    <img src={ImageGif4} alt="Carousel Gif 4" className="mx-auto max-w-full h-auto" />
                                </Carousel>
                            </div>
                        </div>

                        <div>
                            <Carousel
                                responsive={responsive}
                                // autoPlay={true}
                                autoPlaySpeed={3000}
                                infinite={true}
                            >
                                <img src={Proto6} alt="Proto6" className="h-50 w-[95%] object-cover rounded-lg" />
                                <img src={Proto7} alt="Proto7" className="h-50 w-[95%] object-cover rounded-lg" />
                                <img src={Proto8} alt="Proto8" className="h-50 w-[95%] object-cover rounded-lg" />
                                <img src={Proto9} alt="Proto9" className="h-50 w-[95%] object-cover rounded-lg" />
                            </Carousel>
                        </div>



                        <div className='mt-[20px] mb-[30px]'>
                            <div className='flex justify-between'>
                                <p className='font-bold'>
                                    Australian football</p>
                                <div>
                                    <p className='font-bold'>UpComming Events 	&gt; </p>
                                </div>
                            </div>
                            <Carousel
                                responsive={responsive}
                                // autoPlay={true}
                                autoPlaySpeed={3000}
                                infinite={true}
                            >



                                <div className="max-w-sm mb-[10px] mx-auto p-4 bg-white rounded-lg shadow-md">
                                    <div className="text-xs text-gray-500 font-semibold">SRI LANKA. PREMIER LEAGUE T20</div>
                                    <div className="mt-2 text-center">
                                        <div className="text-red-500 font-bold">INNINGS 1</div>
                                        <div className="text-2xl font-bold">111:187</div>
                                        <div className="text-sm text-gray-500">111/2 (12.1): 187/9</div>
                                    </div>
                                    <div className="mt-4 flex justify-between items-center">
                                        <div className="text-center">
                                            {/* <img src="galle-marvels-logo.png" alt="Galle Marvels" className="h-12 w-12 mx-auto" /> */}
                                            <div className="mt-2 text-lg font-semibold">Galle Marvels</div>
                                        </div>
                                        <div className="text-center">
                                            {/* <img src="kandy-falcons-logo.png" alt="Kandy Falcons" className="h-12 w-12 mx-auto" /> */}
                                            <div className="mt-2 text-lg font-semibold">Kandy Falcons</div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div className="text-center">
                                            <div className="text-green-500 text-xl font-bold">1.38</div>
                                            <div className="text-sm text-gray-500">1</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-red-500 text-xl font-bold">2.84</div>
                                            <div className="text-sm text-gray-500">2</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="max-w-sm mb-[10px] mx-auto p-4 bg-white rounded-lg shadow-md">
                                    <div className="text-xs text-gray-500 font-semibold">SRI LANKA. PREMIER LEAGUE T20</div>
                                    <div className="mt-2 text-center">
                                        <div className="text-red-500 font-bold">INNINGS 1</div>
                                        <div className="text-2xl font-bold">111:187</div>
                                        <div className="text-sm text-gray-500">111/2 (12.1): 187/9</div>
                                    </div>
                                    <div className="mt-4 flex justify-between items-center">
                                        <div className="text-center">
                                            {/* <img src="galle-marvels-logo.png" alt="Galle Marvels" className="h-12 w-12 mx-auto" /> */}
                                            <div className="mt-2 text-lg font-semibold">Galle Marvels</div>
                                        </div>
                                        <div className="text-center">
                                            {/* <img src="kandy-falcons-logo.png" alt="Kandy Falcons" className="h-12 w-12 mx-auto" /> */}
                                            <div className="mt-2 text-lg font-semibold">Kandy Falcons</div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div className="text-center">
                                            <div className="text-green-500 text-xl font-bold">1.38</div>
                                            <div className="text-sm text-gray-500">1</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-red-500 text-xl font-bold">2.84</div>
                                            <div className="text-sm text-gray-500">2</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="max-w-sm mb-[10px] mx-auto p-4 bg-white rounded-lg shadow-md">
                                    <div className="text-xs text-gray-500 font-semibold">SRI LANKA. PREMIER LEAGUE T20</div>
                                    <div className="mt-2 text-center">
                                        <div className="text-red-500 font-bold">INNINGS 1</div>
                                        <div className="text-2xl font-bold">111:187</div>
                                        <div className="text-sm text-gray-500">111/2 (12.1): 187/9</div>
                                    </div>
                                    <div className="mt-4 flex justify-between items-center">
                                        <div className="text-center">
                                            {/* <img src="galle-marvels-logo.png" alt="Galle Marvels" className="h-12 w-12 mx-auto" /> */}
                                            <div className="mt-2 text-lg font-semibold">Galle Marvels</div>
                                        </div>
                                        <div className="text-center">
                                            {/* <img src="kandy-falcons-logo.png" alt="Kandy Falcons" className="h-12 w-12 mx-auto" /> */}
                                            <div className="mt-2 text-lg font-semibold">Kandy Falcons</div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div className="text-center">
                                            <div className="text-green-500 text-xl font-bold">1.38</div>
                                            <div className="text-sm text-gray-500">1</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-red-500 text-xl font-bold">2.84</div>
                                            <div className="text-sm text-gray-500">2</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="max-w-sm mb-[10px] mx-auto p-4 bg-white rounded-lg shadow-md">
                                    <div className="text-xs text-gray-500 font-semibold">SRI LANKA. PREMIER LEAGUE T20</div>
                                    <div className="mt-2 text-center">
                                        <div className="text-red-500 font-bold">INNINGS 1</div>
                                        <div className="text-2xl font-bold">111:187</div>
                                        <div className="text-sm text-gray-500">111/2 (12.1): 187/9</div>
                                    </div>
                                    <div className="mt-4 flex justify-between items-center">
                                        <div className="text-center">
                                            {/* <img src="galle-marvels-logo.png" alt="Galle Marvels" className="h-12 w-12 mx-auto" /> */}
                                            <div className="mt-2 text-lg font-semibold">Galle Marvels</div>
                                        </div>
                                        <div className="text-center">
                                            {/* <img src="kandy-falcons-logo.png" alt="Kandy Falcons" className="h-12 w-12 mx-auto" /> */}
                                            <div className="mt-2 text-lg font-semibold">Kandy Falcons</div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div className="text-center">
                                            <div className="text-green-500 text-xl font-bold">1.38</div>
                                            <div className="text-sm text-gray-500">1</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-red-500 text-xl font-bold">2.84</div>
                                            <div className="text-sm text-gray-500">2</div>
                                        </div>
                                    </div>
                                </div>


                            </Carousel>
                        </div>

                        {/* <div>
                    <Carousel
                        responsive={responsive}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        infinite={true}
                    >


                        <div>Carousel 6 - Item 1</div>
                        <div>Carousel 6 - Item 2</div>
                        <div>Carousel 6 - Item 3</div>
                    </Carousel>
                </div> */}

                        <div className='mt-[20px] mb-[30px]'>
                            <div className='flex justify-between'>
                                <p className='font-bold'>MMA</p>
                                <div>
                                    <p className='font-bold'>UpComming Events 	&gt; </p>
                                </div>
                            </div>
                            <Carousel
                                responsive={responsive}
                                // autoPlay={true}
                                autoPlaySpeed={3000}
                                infinite={true}
                            >



                                <div className="max-w-sm mb-[10px] mx-auto p-4 bg-white rounded-lg shadow-md">
                                    <div className="text-xs text-gray-500 font-semibold">SRI LANKA. PREMIER LEAGUE T20</div>
                                    <div className="mt-2 text-center">
                                        <div className="text-red-500 font-bold">INNINGS 1</div>
                                        <div className="text-2xl font-bold">111:187</div>
                                        <div className="text-sm text-gray-500">111/2 (12.1): 187/9</div>
                                    </div>
                                    <div className="mt-4 flex justify-between items-center">
                                        <div className="text-center">
                                            {/* <img src="galle-marvels-logo.png" alt="Galle Marvels" className="h-12 w-12 mx-auto" /> */}
                                            <div className="mt-2 text-lg font-semibold">Galle Marvels</div>
                                        </div>
                                        <div className="text-center">
                                            {/* <img src="kandy-falcons-logo.png" alt="Kandy Falcons" className="h-12 w-12 mx-auto" /> */}
                                            <div className="mt-2 text-lg font-semibold">Kandy Falcons</div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div className="text-center">
                                            <div className="text-green-500 text-xl font-bold">1.38</div>
                                            <div className="text-sm text-gray-500">1</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-red-500 text-xl font-bold">2.84</div>
                                            <div className="text-sm text-gray-500">2</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="max-w-sm mb-[10px] mx-auto p-4 bg-white rounded-lg shadow-md">
                                    <div className="text-xs text-gray-500 font-semibold">SRI LANKA. PREMIER LEAGUE T20</div>
                                    <div className="mt-2 text-center">
                                        <div className="text-red-500 font-bold">INNINGS 1</div>
                                        <div className="text-2xl font-bold">111:187</div>
                                        <div className="text-sm text-gray-500">111/2 (12.1): 187/9</div>
                                    </div>
                                    <div className="mt-4 flex justify-between items-center">
                                        <div className="text-center">
                                            {/* <img src="galle-marvels-logo.png" alt="Galle Marvels" className="h-12 w-12 mx-auto" /> */}
                                            <div className="mt-2 text-lg font-semibold">Galle Marvels</div>
                                        </div>
                                        <div className="text-center">
                                            {/* <img src="kandy-falcons-logo.png" alt="Kandy Falcons" className="h-12 w-12 mx-auto" /> */}
                                            <div className="mt-2 text-lg font-semibold">Kandy Falcons</div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div className="text-center">
                                            <div className="text-green-500 text-xl font-bold">1.38</div>
                                            <div className="text-sm text-gray-500">1</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-red-500 text-xl font-bold">2.84</div>
                                            <div className="text-sm text-gray-500">2</div>
                                        </div>
                                    </div>
                                </div>



                                <div className="max-w-sm mb-[10px] mx-auto p-4 bg-white rounded-lg shadow-md">
                                    <div className="text-xs text-gray-500 font-semibold">SRI LANKA. PREMIER LEAGUE T20</div>
                                    <div className="mt-2 text-center">
                                        <div className="text-red-500 font-bold">INNINGS 1</div>
                                        <div className="text-2xl font-bold">111:187</div>
                                        <div className="text-sm text-gray-500">111/2 (12.1): 187/9</div>
                                    </div>
                                    <div className="mt-4 flex justify-between items-center">
                                        <div className="text-center">
                                            {/* <img src="galle-marvels-logo.png" alt="Galle Marvels" className="h-12 w-12 mx-auto" /> */}
                                            <div className="mt-2 text-lg font-semibold">Galle Marvels</div>
                                        </div>
                                        <div className="text-center">
                                            {/* <img src="kandy-falcons-logo.png" alt="Kandy Falcons" className="h-12 w-12 mx-auto" /> */}
                                            <div className="mt-2 text-lg font-semibold">Kandy Falcons</div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div className="text-center">
                                            <div className="text-green-500 text-xl font-bold">1.38</div>
                                            <div className="text-sm text-gray-500">1</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-red-500 text-xl font-bold">2.84</div>
                                            <div className="text-sm text-gray-500">2</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="max-w-sm mb-[10px] mx-auto p-4 bg-white rounded-lg shadow-md">
                                    <div className="text-xs text-gray-500 font-semibold">SRI LANKA. PREMIER LEAGUE T20</div>
                                    <div className="mt-2 text-center">
                                        <div className="text-red-500 font-bold">INNINGS 1</div>
                                        <div className="text-2xl font-bold">111:187</div>
                                        <div className="text-sm text-gray-500">111/2 (12.1): 187/9</div>
                                    </div>
                                    <div className="mt-4 flex justify-between items-center">
                                        <div className="text-center">
                                            {/* <img src="galle-marvels-logo.png" alt="Galle Marvels" className="h-12 w-12 mx-auto" /> */}
                                            <div className="mt-2 text-lg font-semibold">Galle Marvels</div>
                                        </div>
                                        <div className="text-center">
                                            {/* <img src="kandy-falcons-logo.png" alt="Kandy Falcons" className="h-12 w-12 mx-auto" /> */}
                                            <div className="mt-2 text-lg font-semibold">Kandy Falcons</div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div className="text-center">
                                            <div className="text-green-500 text-xl font-bold">1.38</div>
                                            <div className="text-sm text-gray-500">1</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-red-500 text-xl font-bold">2.84</div>
                                            <div className="text-sm text-gray-500">2</div>
                                        </div>
                                    </div>
                                </div>


                            </Carousel>
                        </div>


                        <img className='pl-[50px]' src={Proto6} />
                        <div className='mt-[20px] mb-[30px]'>
                            <div className='flex justify-between'>
                                <p className='font-bold'>Cricket</p>
                                <div>
                                    <p className='font-bold'>UpComming Events 	&gt; </p>
                                </div>
                            </div>
                            <Carousel
                                responsive={responsive}
                                // autoPlay={true}
                                autoPlaySpeed={3000}
                                infinite={true}
                            >



                                <div className="max-w-sm mb-[10px] mx-auto p-4 bg-white rounded-lg shadow-md">
                                    <div className="text-xs text-gray-500 font-semibold">SRI LANKA. PREMIER LEAGUE T20</div>
                                    <div className="mt-2 text-center">
                                        <div className="text-red-500 font-bold">INNINGS 1</div>
                                        <div className="text-2xl font-bold">111:187</div>
                                        <div className="text-sm text-gray-500">111/2 (12.1): 187/9</div>
                                    </div>
                                    <div className="mt-4 flex justify-between items-center">
                                        <div className="text-center">
                                            {/* <img src="galle-marvels-logo.png" alt="Galle Marvels" className="h-12 w-12 mx-auto" /> */}
                                            <div className="mt-2 text-lg font-semibold">Galle Marvels</div>
                                        </div>
                                        <div className="text-center">
                                            {/* <img src="kandy-falcons-logo.png" alt="Kandy Falcons" className="h-12 w-12 mx-auto" /> */}
                                            <div className="mt-2 text-lg font-semibold">Kandy Falcons</div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div className="text-center">
                                            <div className="text-green-500 text-xl font-bold">1.38</div>
                                            <div className="text-sm text-gray-500">1</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-red-500 text-xl font-bold">2.84</div>
                                            <div className="text-sm text-gray-500">2</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="max-w-sm mb-[10px] mx-auto p-4 bg-white rounded-lg shadow-md">
                                    <div className="text-xs text-gray-500 font-semibold">SRI LANKA. PREMIER LEAGUE T20</div>
                                    <div className="mt-2 text-center">
                                        <div className="text-red-500 font-bold">INNINGS 1</div>
                                        <div className="text-2xl font-bold">111:187</div>
                                        <div className="text-sm text-gray-500">111/2 (12.1): 187/9</div>
                                    </div>
                                    <div className="mt-4 flex justify-between items-center">
                                        <div className="text-center">
                                            {/* <img src="galle-marvels-logo.png" alt="Galle Marvels" className="h-12 w-12 mx-auto" /> */}
                                            <div className="mt-2 text-lg font-semibold">Galle Marvels</div>
                                        </div>
                                        <div className="text-center">
                                            {/* <img src="kandy-falcons-logo.png" alt="Kandy Falcons" className="h-12 w-12 mx-auto" /> */}
                                            <div className="mt-2 text-lg font-semibold">Kandy Falcons</div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div className="text-center">
                                            <div className="text-green-500 text-xl font-bold">1.38</div>
                                            <div className="text-sm text-gray-500">1</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-red-500 text-xl font-bold">2.84</div>
                                            <div className="text-sm text-gray-500">2</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="max-w-sm mb-[10px] mx-auto p-4 bg-white rounded-lg shadow-md">
                                    <div className="text-xs text-gray-500 font-semibold">SRI LANKA. PREMIER LEAGUE T20</div>
                                    <div className="mt-2 text-center">
                                        <div className="text-red-500 font-bold">INNINGS 1</div>
                                        <div className="text-2xl font-bold">111:187</div>
                                        <div className="text-sm text-gray-500">111/2 (12.1): 187/9</div>
                                    </div>
                                    <div className="mt-4 flex justify-between items-center">
                                        <div className="text-center">
                                            {/* <img src="galle-marvels-logo.png" alt="Galle Marvels" className="h-12 w-12 mx-auto" /> */}
                                            <div className="mt-2 text-lg font-semibold">Galle Marvels</div>
                                        </div>
                                        <div className="text-center">
                                            {/* <img src="kandy-falcons-logo.png" alt="Kandy Falcons" className="h-12 w-12 mx-auto" /> */}
                                            <div className="mt-2 text-lg font-semibold">Kandy Falcons</div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div className="text-center">
                                            <div className="text-green-500 text-xl font-bold">1.38</div>
                                            <div className="text-sm text-gray-500">1</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-red-500 text-xl font-bold">2.84</div>
                                            <div className="text-sm text-gray-500">2</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="max-w-sm mx-auto p-4 bg-white rounded-lg shadow-md">
                                    <div className="text-xs text-gray-500 font-semibold">SRI LANKA. PREMIER LEAGUE T20</div>
                                    <div className="mt-2 text-center">
                                        <div className="text-red-500 font-bold">INNINGS 1</div>
                                        <div className="text-2xl font-bold">111:187</div>
                                        <div className="text-sm text-gray-500">111/2 (12.1): 187/9</div>
                                    </div>
                                    <div className="mt-4 flex justify-between items-center">
                                        <div className="text-center">
                                            {/* <img src="galle-marvels-logo.png" alt="Galle Marvels" className="h-12 w-12 mx-auto" /> */}
                                            <div className="mt-2 text-lg font-semibold">Galle Marvels</div>
                                        </div>
                                        <div className="text-center">
                                            {/* <img src="kandy-falcons-logo.png" alt="Kandy Falcons" className="h-12 w-12 mx-auto" /> */}
                                            <div className="mt-2 text-lg font-semibold">Kandy Falcons</div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div className="text-center">
                                            <div className="text-green-500 text-xl font-bold">1.38</div>
                                            <div className="text-sm text-gray-500">1</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-red-500 text-xl font-bold">2.84</div>
                                            <div className="text-sm text-gray-500">2</div>
                                        </div>
                                    </div>
                                </div>


                            </Carousel>
                        </div>
                        {/* <div>
                    <Carousel
                        responsive={responsive}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        infinite={true}
                    >
                        <div>Carousel 9 - Item 1</div>
                        <div>Carousel 9 - Item 2</div>
                        <div>Carousel 9 - Item 3</div>
                        <div>Carousel 9 - Item 4</div>
                    </Carousel>
                </div> */}

                        <div className="bg-gray-100">
                            {/* <!-- Main container --> */}
                            <div class="max-w-full mx-auto p-4">

                                {/* <!-- Top section with collapsible links --> */}
                                <div class="space-y-2">
                                    <div class="bg-white p-4 rounded shadow">
                                        <button class="w-full text-left font-semibold">Kabaddi Live Score, Betting & Odds</button>
                                    </div>
                                    <div class="bg-white p-4 rounded shadow">
                                        <button class="w-full text-left font-semibold">Kabaddi Live Betting FAQ</button>
                                    </div>
                                </div>

                                {/* <!-- Popular events and tournaments section --> */}
                                <div class="bg-white mt-4 p-4 rounded shadow">
                                    <h2 class="text-xl font-semibold mb-4">Popular events and tournaments</h2>
                                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">

                                        {/* <!-- Help section --> */}
                                        <div>
                                            <h3 class="font-semibold mb-2">Help</h3>
                                            <ul class="space-y-1">
                                                <li><a href="#" class="text-gray-700 hover:underline">Game Rules</a></li>
                                                <li><a href="#" class="text-gray-700 hover:underline">Deposit</a></li>
                                                <li><a href="#" class="text-gray-700 hover:underline">Withdrawal</a></li>
                                                <li><a href="#" class="text-gray-700 hover:underline">Support</a></li>
                                            </ul>
                                        </div>

                                        {/* <!-- Parimatch section --> */}
                                        <div>
                                            <h3 class="font-semibold mb-2">Parimatch</h3>
                                            <ul class="space-y-1">
                                                <li><a href="#" class="text-gray-700 hover:underline">Terms and Conditions</a></li>
                                                <li><a href="#" class="text-gray-700 hover:underline">Privacy Policy</a></li>
                                                <li><a href="#" class="text-gray-700 hover:underline">Public Offers</a></li>
                                                <li><a href="#" class="text-gray-700 hover:underline">AML/KYC Policy</a></li>
                                                <li><a href="#" class="text-gray-700 hover:underline">For partners</a></li>
                                            </ul>
                                        </div>

                                        {/* <!-- Info section --> */}
                                        <div>
                                            <h3 class="font-semibold mb-2">Info</h3>
                                            <ul class="space-y-1">
                                                <li><a href="#" class="text-gray-700 hover:underline">Responsible gambling</a></li>
                                                <li><a href="#" class="text-gray-700 hover:underline">Self-exclusion</a></li>
                                                <li><a href="#" class="text-gray-700 hover:underline">Dispute resolution</a></li>
                                                <li><a href="#" class="text-gray-700 hover:underline">Privacy & Management of Personal Data</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>




                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
