import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../index.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const adaptationAutomationContext = require.context('../assets/images/AdaptationAutomation', false, /\.(jpg)$/);
const adaptationAutomationImages = adaptationAutomationContext.keys().map(adaptationAutomationContext);

const DNAModelContext = require.context('../assets/images/DNAModel', false, /\.(jpg)$/);
const DNAModelImages = DNAModelContext.keys().map(DNAModelContext);

const MakingConnectionsContext = require.context('../assets/images/MakingConnections', false, /\.(jpg)$/);
const MakingConnectionsImages = MakingConnectionsContext.keys().map(MakingConnectionsContext);

const MidlifeMayhemContext = require.context('../assets/images/MidlifeMayhem', false, /\.(jpg)$/);
const MidlifeMayhemImages = MidlifeMayhemContext.keys().map(MidlifeMayhemContext);

//UX/UI

const NationalEnquirerContext = require.context('../assets/images/NationalEnquirer', false, /\.(jpg)$/);
const NationalEnquirerImages = NationalEnquirerContext.keys().map(NationalEnquirerContext);

const TradelyContext = require.context('../assets/images/Tradely', false, /\.(jpg)$/);
const TradelyImages = TradelyContext.keys().map(TradelyContext);

//WEB DEV
const BIOContext = require.context('../assets/images/BIO', false, /\.(jpg)$/);
const BIOImages = BIOContext.keys().map(BIOContext);

const SCIContext = require.context('../assets/images/SCI', false, /\.(jpg)$/);
const SCIImages = SCIContext.keys().map(SCIContext);

const IPCContext = require.context('../assets/images/IPC', false, /\.(jpg)$/);
const IPCImages = IPCContext.keys().map(IPCContext);

const TRCContext = require.context('../assets/images/TRC', false, /\.(jpg)$/);
const TRCImages = TRCContext.keys().map(TRCContext);

const imageMap = {
    'Game Dev': {
        'Adaptation Automation': adaptationAutomationImages,
        'DNA Model': DNAModelImages,
        'Making Connections': MakingConnectionsImages,
        'Mid-Life Mayhem': MidlifeMayhemImages,
    },
    'UX/UI': {
        'National Enquirer Redesign': NationalEnquirerImages,
        'Tradely': TradelyImages,
    },
    'Web Dev': {
        'Integrated Physics and Chemistry': IPCImages,
        'Biology 2nd Edition': BIOImages,
        '5th Grade Science 2nd Edition': SCIImages,
        'The Retail Chronicle': TRCImages,
    },

};

const Swipers = ({ activeCategory, title }) => {
    console.log(imageMap[activeCategory][title]);

    const getImageSources = () => {
        if (imageMap[activeCategory] && imageMap[activeCategory][title]) {
            return imageMap[activeCategory][title];
        }
    };

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Swiper
                spaceBetween={20}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        height: 240,
                    },
                    // when window width is >= 768px
                    768: {
                        height: 768,
                    },
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
            >
                <div className='relative'>
                    {getImageSources().map((imageSource, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative">
                                <img
                                    src={imageSource}
                                    alt={`Slider Image ${index + 1}`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                            </div>
                        </SwiperSlide>
                    ))}
                </div>

            </Swiper>
        </div>
    );
}

export default Swipers;
