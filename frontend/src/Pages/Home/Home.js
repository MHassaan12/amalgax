import "./Home.css";
import { GiBookStorm } from "react-icons/gi";
// import UserAction from "../../Components/UserAction";
import bank from "../../assets/bank.jpg";
import bank2 from "../../assets/bank6.jpg";
import Info from "../../Components/Info";
import { FaHandSparkles, FaPaperPlane } from "react-icons/fa";
import { TbWritingSign } from "react-icons/tb";
import SubInfo from "../../Components/SubInfo";
import refer from "../../assets/refer.svg";
import gift from "../../assets/heroimg2.webp";
import Refer from "../../Components/Refer";
import premimum from "../../assets/premimum.svg";
import Footer from "../../Components/Footer";
import hero from "../../assets/hero.svg";
import PaymentCard from "../../Components/PaymentCard";
import money from "../../assets/money1.svg";
import bg from "../../assets/money1.svg";
import earn from "../../assets/earn.webp";
import { Link } from "react-router-dom";
import Card from "../../Components/Card";

// ____________________________________
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
// ____________________________________

const Home = () => {
  return (
    <div className="gradient text-white">
      {/* Hero Section */}
      <div className="mt-6">
        {/* <p className=" absolute left-[41%] border-b border-custom-secondary font-semibold italic">
          Welcome
        </p> */}
        {/* images */}
        {/* <div className="flex">
          <div className="absolute z-50 min-h-[19rem] w-full bg-slate-400 opacity-10"></div>

          <div className="mr-10">
            <img
              className="h-[15rem] w-[300px] rounded-r-full"
              src={bank}
              alt="Not found"
            />
          </div>
          <div>
            <img
              className="h-full w-[300px]  rounded-l-full"
              src={bank2}
              alt="Not found"
            />
          </div>
        </div> */}

        <div className="mx-[8%] items-center text-lg  font-semibold md:flex lg:flex">
          {/* Hero Image */}
          <div className="flex flex-1 md:mr-5">
            <img src={bg} alt="Not Found" className="my-10  lg:h-[80%]" />
          </div>
          {/* Hero content */}
          <div className="flex-1 ">
            <p className="text-red-400 md:text-2xl lg:text-3xl">
              Ready To make Money ?
            </p>
            <p className="text-xs pb-4 font-light text-left leading-7 tracking-widest md:mt-3 lg:text-sm lg:leading-7">
              AmalgaX is an investment trading company. Our highly qualified and
              most experienced traders invest and trade in
              <b className="text-custom-secondary">
                {" "}
                STOCKS, COMPANY SHARES, FOREX, COMMODITIES and CRYPTO
              </b>{" "}
              pairs with the help of Technical and Fundamental Analysis. We keep
              an eye on every opportunity and grab with the help of trading
              pool. Trading pool is amount of money; you invested with us to
              trade for return on investment. Return on investment is a fixed
              amount investor will get on his investment on monthly bases. Your
              invested amount and return on investment will be one click away to
              be refunded or withdrawn respectively. We believe in Spot Trading;
              it keeps the investment safe, empowers to hold for long period and
              minimizes the risk of loss with unrealized profit and loss.
            </p>
            {/* <p className="text-xs font-light text-left leading-7 tracking-widest md:mt-3 lg:text-sm lg:leading-7">
              You can choose any of the below mentioned package and invest the said amount with AmalgaX to earn monthly 3% fixed return on your investment. The ROI will be deposited in your wallet, on same date of investment every month. Very First Time AmalgaX vested investors, the right to withdraw the invested amount any time by clicking Refund button in dashboard.
            </p> */}
            <Link
              to="/register"
              className="mt-10 w-[100%] cursor-pointer rounded-sm bg-custom-secondary px-5 py-1 font-normal text-black outline-none lg:mt-[70px]"
            >
              Join Us
            </Link>
          </div>
        </div>
        <div className="mt-20">
          <div className="flex flex-col">
            <p className="mt-8 text-center text-sm font-medium md:text-2xl">
              How We Can Help You ?
            </p>
            <div className="mt-2 flex justify-center">
              <input
                className="mr-1 rounded-sm bg-custom-main py-1 pl-2 pr-7 text-left outline-none md:w-[50%] md:py-3 md:pl-5"
                type="text"
                placeholder="Search here ....."
              />
              <button className="cursor-pointer rounded-sm bg-custom-secondary px-5 font-normal text-black outline-none md:w-32">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-[2%] mt-16 lg:mt-24">
        <p className="text-center text-base md:text-[22px]">
          Invest And
          <span className="text-2xl text-red-400 md:text-3xl"> Earn !</span>
        </p>
        <div className="flex flex-col lg:flex-row-reverse ">
          <img
            className="sm:mx-auto sm:w-[80%] md:w-[70%] lg:mt-0 lg:w-[80%]"
            src={earn}
            alt="Not found"
          />
          <div>
            <p className="text-xs mx-5 lg:mx-0 font-light mt-5 text-left leading-7 lg:mt-16 tracking-widest md:mt-10 lg:text-sm lg:leading-7">
              You can choose any of the below mentioned package and invest the
              said amount with AmalgaX to earn monthly 3% fixed return on your
              investment. The ROI will be deposited in your wallet, on same date
              of investment every month. Very First Time AmalgaX vested
              investors, the right to withdraw the invested amount any time by
              clicking Refund button in dashboard.
            </p>
          </div>
        </div>
      </div>

      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 30 },
          480: { slidesPerView: 1, spaceBetween: 30 },
          768: { slidesPerView: 1, spaceBetween: 30 },
          1024: { slidesPerView: 2, spaceBetween: 30 },
          1280: { slidesPerView: 3, spaceBetween: 30 },
        }}
        slidesPerGroup={3}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide">
          <Card
            level="Starter"
            title="Best option for personal use & for your next project."
            ammount="25"
            Team="1"
            duration="5"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            level="Company"
            title="Relevant for multiple users, extended & premium support."
            ammount="1000"
            Team="10"
            duration="10"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            level="Enterprise"
            title="Relevant for multiple users, extended & premium support."
            ammount="2000"
            Team="60"
            duration="12"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            level="Starter"
            title="Best option for personal use & for your next project."
            ammount="3000"
            Team="1"
            duration="5"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            level="Company"
            title="Relevant for multiple users, extended & premium support."
            ammount="4000"
            Team="10"
            duration="10"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            level="Enterprise"
            title="Relevant for multiple users, extended & premium support."
            ammount="5000"
            Team="60"
            duration="12"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            level="Enterprise"
            title="Relevant for multiple users, extended & premium support."
            ammount="6000"
            Team="60"
            duration="12"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            level="Enterprise"
            title="Relevant for multiple users, extended & premium support."
            ammount="7000"
            Team="60"
            duration="12"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            level="Enterprise"
            title="Relevant for multiple users, extended & premium support."
            ammount="8000"
            Team="60"
            duration="12"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            level="Enterprise"
            title="Relevant for multiple users, extended & premium support."
            ammount="9000"
            Team="60"
            duration="12"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            level="Enterprise"
            title="Relevant for multiple users, extended & premium support."
            ammount="10000"
            Team="60"
            duration="12"
          />
        </SwiperSlide>
      </Swiper>

      {/* Refer friend */}
      <div className="mx-[5%] mt-28  font-semibold ">
        <div>
          {/* <Refer
            img={refer}
            title="Refer a friend, and start"
            bigTitle="Earning"
            class="flex-row-reverse"
          />
          <Refer
            img={gift}
            title="Refer 3 friends, and get a"
            bigTitle="Gift"
            class="flex-row"
          />
          <Refer
            img={premimum}
            title="Make more connection, and become premimum"
            bigTitle="Member"
            class1="flex-row-reverse"
          /> */}

          {/* Refer */}
          {/* __________________________________________________________ */}
          <div className="mx-[2%] mt-16 lg:mt-24">
            <p className="text-center text-base md:text-[22px]">
              Once You Invest You Become Company Business Developer and Can
              <span className="text-2xl text-red-400 md:text-3xl"> Earn !</span>
            </p>
            <div className="flex flex-col lg:flex-row ">
              <img
                className="sm:mx-auto sm:w-[80%] md:w-[70%] lg:mt-7 lg:w-[50%]"
                src={refer}
                alt="Not found"
              />
              <div>
                <p className="text-[16px] text-custom-secondary font-medium lg:mt-12 lg:leading-8">
                  Direct Referral Bonus:
                </p>
                <ul className="text-[16px] ml-5 list-disc font-medium lg:leading-8">
                  <li className="mb-5 list-disc ml-10 font-light">
                    5% on Package selected by direct referral.
                  </li>
                </ul>
                <p className="text-[16px] text-custom-secondary font-medium lg:mt-12 lg:leading-8">
                  InDirect Referral Bonus:
                </p>
                <ul className="mt-5 ml-20 text-[14px] font-light">
                  <li className="mb-5 list-disc">
                    Level 1 Indirect Referral Bonus: 1% on Package selected by
                    indirect referral.
                  </li>
                  <li className="mb-5 list-disc text-[14px] font-light">
                    Level 2 Indirect Referral Bonus: 1% on Package selected by
                    indirect referral.
                  </li>
                  <li className="mb-5 list-disc text-[14px] font-light">
                    Level 3 Indirect Referral Bonus: 1% on Package selected by
                    indirect referral.
                  </li>
                  <li className="mb-5 list-disc text-[14px] font-light">
                    Level 4 Indirect Referral Bonus: 1% on Package selected by
                    indirect referral.
                  </li>
                  <li className="mb-5 list-disc text-[14px] font-light">
                    Level 5 Indirect Referral Bonus: 1% on Package selected by
                    indirect referral.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mx-[2%] mt-16 lg:mt-24">
            <p className="text-center text-base md:text-[22px]">
              <span className="text-2xl text-red-400 md:text-3xl">
                {" "}
                Hurray!
              </span>{" "}
              You can earn direct and indirect referral bonus without investing
              by just becoming Business Developer of Company in 25$ only.
            </p>
            <div className="flex flex-col lg:flex-row-reverse ">
              <img
                className="sm:mx-auto my-14 sm:w-[80%] md:w-[70%] lg:mt-7 lg:w-[62%]"
                src={gift}
                alt="Not found"
              />
              <div>
                <p className="text-[16px] text-custom-secondary font-medium lg:mt-12 lg:leading-8">
                  Rank-Up and Earn:
                  <span className="block">
                    Business Developer:{" "}
                    <span className="text-white font-light">
                      0% of Total Direct Referrals Invested Amount
                    </span>
                  </span>
                </p>
                <ul className="mt-8 ml-20">
                  <li className="mb-5 list-disc text-[14px] font-light">
                    AFO: 0.25% of Total Direct Referrals Invested Amount
                  </li>
                  <li className="mb-5 list-disc text-[14px] font-light">
                    DFO: 0.50% of Total Direct Referrals Invested Amount
                  </li>
                  <li className="mb-5 list-disc text-[14px] font-light">
                    ADFO: 0.75% of Total Direct Referrals Invested Amount
                  </li>
                  <li className="mb-5 list-disc text-[14px] font-light">
                    CFO: 1% of Total Direct Referrals Invested Amount
                  </li>
                </ul>
                <p className="text-[16px] text-custom-secondary font-medium lg:mt-12 lg:leading-8">
                  <p className="text-[16px] text-custom-secondary font-medium lg:mt-12 lg:leading-8">
                    On Achieving:
                  </p>
                </p>
                <ul className="mt-8 ml-20">
                  <li className="mb-5 list-disc text-[14px] font-light">
                    AFO: 15 Direct Referral Team or 250 (Direct + Indirect)
                    Referral Team
                  </li>
                  <li className="mb-5 list-disc text-[14px] font-light">
                    DFO: 30 Direct Referral Team or 500 (Direct + Indirect)
                    Referral Team
                  </li>
                  <li className="mb-5 list-disc text-[14px] font-light">
                    ADFO: 45 Direct Referral Team or 750 (Direct + Indirect)
                    Referral Team
                  </li>
                  <li className="mb-5 list-disc text-[14px] font-light">
                    CFO: 60 Direct Referral Team or 1,000 (Direct + Indirect)
                    Referral Team
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="mx-[2%] mt-16 lg:mt-24">
            <p className="text-center text-base md:text-lg">
            Make more connection, and become premimum              <span className="text-2xl text-red-400 md:text-3xl">
                {" "}
                Member !
              </span>
            </p>
            <div className="flex flex-col lg:flex-row-reverse ">
              <img
                className="sm:mx-auto sm:w-[80%] md:w-[70%] lg:mt-7 lg:w-[50%]"
                src={premimum}
                alt="Not found"
              />
              <div>
                <p className="text-sm font-light lg:mt-12 lg:leading-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis laboriosam ratione unde aspernatur culpa maiores eaque
                  quibusdam eum illum, nihil dolore cum doloribus quam voluptas
                  voluptatem soluta alias? Unde, aspernatur. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Atque, nemo!Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Debitis
                  laboriosam ratione unde aspernatur culpa maiores eaque
                  quibusdam eum illum, nihil dolore cum doloribus quam voluptas
                  voluptatem soluta alias? Unde, aspernatur. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Atque, nemo!
                </p>
                <ul className="mt-10 ml-20">
                  <li className="mb-5 list-disc">
                    Lorem ipsum dolor sit elit. Tempore?
                  </li>
                  <li className="mb-5 list-disc">
                    Lorem ipsum dolor sit elit. Tempore?
                  </li>
                  <li className="mb-5 list-disc">
                    Lorem ipsum dolor sit elit. Tempore?
                  </li>
                  <li className="mb-5 list-disc">
                    Lorem ipsum dolor sit elit. Tempore?
                  </li>
                  <li className="mb-5 list-disc">
                    Lorem ipsum dolor sit elit. Tempore?
                  </li>
                </ul>
              </div>
            </div>
          </div> */}

          {/* __________________________________________________________ */}
        </div>
      </div>

      {/* Info */}
      <div>
        {/* top box 1 */}
        <div>
          <div className="mx-[6%] my-10 lg:my-36 mt-[90px] flex flex-wrap justify-center">
            <Info icon={<FaHandSparkles />} text="Frequently Asked Question" />
            <Info icon={<FaPaperPlane />} text="Send Request To Support" />
            <Info icon={<TbWritingSign />} text="Step By Step Instructions" />
          </div>
        </div>
        {/* bottom box 1 */}
        {/* <div className="mx-[6%] mt-10 pb-32">
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
            <SubInfo text="Swap - Exchange" />
            <SubInfo text="Swap - Exchange" />
            <SubInfo text="Swap - Exchange" />
            <SubInfo text="Swap - Exchange" />
            <SubInfo text="Swap - Exchange" />
            <SubInfo text="Swap - Exchange" />
            <SubInfo text="Swap - Exchange" />
            <SubInfo text="Swap - Exchange" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
