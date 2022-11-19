import React from "react";
import Card from "../../Components/Card";
import Footer from "../../Components/Footer";

const Packages = () => {
  return (
    <div className="gradient">
      <h1 className="pt-5 text-center text-xl font-semibold text-white md:text-2xl">
        Packages Plans
      </h1>
      <h1 className="pt-5 text-center text-xl font-semibold  text-custom-btn md:text-lg">
        Select The Best, You Want
      </h1>
      {/* <p className="mx-[2%] text-center text-sm text-custom-grey">
        We care yours, having good deals. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Temporibus recusandae saepe culpa, dolore
        est commodi similique. Illum id repellat commodi!We care yours, having
        good deals. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Temporibus recusandae saepe culpa, dolore est commodi similique. Illum
        id repellat commodi!We care yours, having good deals. Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Temporibus recusandae saepe
        culpa, dolore est commodi similique. Illum id repellat commodi!
      </p> */}
      <div className="mx-[5%] py-10 md:flex md:flex-wrap">
        <Card
          level="Starter"
          title="Best option for personal use & for your next project."
          ammount="25"
          Team="1"
          duration="5"
        />

        <Card
          level="Company"
          title="Relevant for multiple users, extended & premium support."
          ammount="1000"
          Team="10"
          duration="10"
        />

        <Card
          level="Enterprise"
          title="Relevant for multiple users, extended & premium support."
          ammount="2000"
          Team="60"
          duration="12"
        />
        <Card
          level="Starter"
          title="Best option for personal use & for your next project."
          ammount="3000"
          Team="1"
          duration="5"
        />

        <Card
          level="Company"
          title="Relevant for multiple users, extended & premium support."
          ammount="4000"
          Team="10"
          duration="10"
        />

        <Card
          level="Enterprise"
          title="Relevant for multiple users, extended & premium support."
          ammount="5000"
          Team="60"
          duration="12"
        />
        <Card
          level="Enterprise"
          title="Relevant for multiple users, extended & premium support."
          ammount="6000"
          Team="60"
          duration="12"
        />
        <Card
          level="Enterprise"
          title="Relevant for multiple users, extended & premium support."
          ammount="7000"
          Team="60"
          duration="12"
        />
        <Card
          level="Enterprise"
          title="Relevant for multiple users, extended & premium support."
          ammount="8000"
          Team="60"
          duration="12"
        />
        <Card
          level="Enterprise"
          title="Relevant for multiple users, extended & premium support."
          ammount="9000"
          Team="60"
          duration="12"
        />
        <Card
          level="Enterprise"
          title="Relevant for multiple users, extended & premium support."
          ammount="10000"
          Team="60"
          duration="12"
        />
      </div>
    </div>
  );
};

export default Packages;
