// Swiper core components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// CSS
import "./DevicesSection.css";

// Images
import staticImg from "../assets/static-soundbox.png";
import dynamicImg from "../assets/dynamic-soundbox.png";

export default function DevicesSection() {
    return (
        <section className="devices-wrapper">

            <div className="devices-badge">OUR DEVICES</div>
            <div className="heading">
                <h2 className="devices-heading">
                    Smart Devices That Power Your Payments
                </h2>

                <p className="devices-subheading">
                    Multiple device options built to support every merchant payment scenario
                </p>
            </div>
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                className="devices-swiper"
            >
                {/* SLIDE 1 */}
                <SwiperSlide>
                    <div className="cards-row">

                        <DeviceCard
                            title="VG Static Payment Soundbox"
                            desc="A reliable static soundbox that delivers instant voice alerts for every successful payment."
                            image={staticImg}
                            leftList={[
                                "QR Code Payments",
                                "Volume Adjustable",
                                "Real-Time Broadcast",
                                "Compact Size",
                            ]}
                            rightList={[
                                "Dining Rooms",
                                "Restaurants",
                                "Convenience Stores",
                                "Toll Stations",
                            ]}
                        />

                        <DeviceCard
                            title="VG Dynamic Payment Soundbox"
                            desc="A dynamic soundbox that announces real-time payment confirmation with smart, flexible connectivity."
                            image={dynamicImg}
                            leftList={[
                                "Volume Adjustable",
                                "Real-Time Broadcast",
                                "QR Code + NFC Card Payments",
                                "Amount Display & Input",
                            ]}
                            rightList={[
                                "Restaurants",
                                "Convenience Stores",
                                "Supermarkets",
                                "Shopping Malls",
                                "Hotels",
                                "Toll Stations",
                            ]}
                        />

                    </div>
                </SwiperSlide>

                {/* SLIDE 2 (future) */}
                <SwiperSlide>
                    <div className="cards-row" />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

/* -------------------------------------
   DEVICE CARD
------------------------------------- */
function DeviceCard({ title, desc, image, leftList, rightList }) {
    return (
        <div className="device-card">

            {/* TOP ROW */}
            <div className="device-top">
                <div className="device-text">
                    <h3 className="device-title">{title}</h3>
                    <p className="device-desc">{desc}</p>
                </div>

                <div className="device-image">
                    <img src={image} alt={title} />
                </div>
            </div>

            {/* BOTTOM ROW */}
            <div className="device-bottom">
                <div className="list-block">
                    <p className="list-title">KEY FUNCTIONS</p>
                    <ul className="bullet-points"> 
                        {leftList.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="list-divider" />

                <div className="list-block">
                    <p className="list-title">APPLICABLE SCENARIOS</p>
                    <ul  className="bullet-points1">
                        {rightList.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
}
