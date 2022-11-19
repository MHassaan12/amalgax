import React from "react";

const Refer = (props) => {
  return (
    <div className="mx-[2%] mt-16 lg:mt-24">
      <p className="text-center text-base md:text-lg">
        {props.title}
        <span className="text-2xl text-red-400 md:text-3xl">
          {" "}
          {props.bigTitle} !
        </span>
      </p>
      <div className="flex flex-col lg:flex-row ">
        <img
          className="sm:mx-auto sm:w-[80%] md:w-[70%] lg:mt-7 lg:w-[50%]"
          src={props.img}
          alt="Not found"
        />
        <div>
          <p className="text-sm font-light lg:mt-12 lg:leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            laboriosam ratione unde aspernatur culpa maiores eaque quibusdam eum
            illum, nihil dolore cum doloribus quam voluptas voluptatem soluta
            alias? Unde, aspernatur. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque, nemo!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Debitis laboriosam ratione unde aspernatur culpa
            maiores eaque quibusdam eum illum, nihil dolore cum doloribus quam
            voluptas voluptatem soluta alias? Unde, aspernatur. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Atque, nemo!
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
    </div>
  );
};

export default Refer;
