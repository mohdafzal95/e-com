import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context";
import { deliveryDate, today } from "../utils";
import { Layout } from "../components";
import { ChevronLeftIcon, StarIcon } from "@heroicons/react/24/solid";
import { GoToTop } from "../utils";
import { NavBar } from "../components";

export const DetailProduct = () => {
  const context = useContext(Context);

  const {setSelectedProduct}= useContext(Context)
  GoToTop();

  const navigate = useNavigate();
  const onNavigateBack = () => {
    navigate(-1);
  };

  //Image Exchange
  const [imagen, setImagen] = useState(context.showProductDetail.images[0]);
  const cambiarImagen = (element) => {
    setImagen(element);
  };
  useEffect(() => {}, [setImagen]);

  

  return (
    <>
      <NavBar></NavBar>
      <Layout>
        <div className="w-full max-w-screen-lg">
          <button
            className="flex flex-grow items-center font-light"
            onClick={onNavigateBack}
          >
            <ChevronLeftIcon className="h-4 w-4 text-black "></ChevronLeftIcon>{" "}
            Return
          </button>

          <div className="flex md:flex-row flex-col w-full my-5 md:my-10 justify-center ">
            <figure className="md:w-4/12 md:px-0 px-4">
              {imagen !== undefined ? (
                <img
                  className="w-full h-60 object-contain"
                  src={imagen}
                  alt={`Image ${context.showProductDetail.title}`}
                />
              ) : (
                <img
                  className="w-full h-60 object-contain"
                  src={context.showProductDetail.images[0]}
                  alt={`Image ${context.showProductDetail.title}`}
                />
              )}
              <div className="flex flex-row justify-between w-4/12 mt-2">
                <img
                  className="border  mb-2 object-contain h-20 mr-2"
                  src={context.showProductDetail.images[0]}
                  alt={`Image ${context.showProductDetail.title}`}
                  onClick={() =>
                    cambiarImagen(context.showProductDetail.images[0])
                  }
                />
                <img
                  className="border  mb-2 object-contain h-20 mr-2"
                  src={context.showProductDetail.images[1]}
                  alt={`Image ${context.showProductDetail.title}`}
                  onClick={() =>
                    cambiarImagen(context.showProductDetail.images[1])
                  }
                />
                <img
                  className="border mb-2 object-cover h-20"
                  src={context.showProductDetail.images[2]}
                  alt={`Image ${context.showProductDetail.title}`}
                  onClick={() =>
                    cambiarImagen(context.showProductDetail.images[2])
                  }
                />
              </div>
            </figure>

            <div className="md:w-3/6 md:px-8 px-4">
              <h1 className="text-black mb-5 font-bold text-4xl">
                {context.showProductDetail.title}
              </h1>
              <div className="flex flex-row mb-5">
                <p
                  className={
                    context.showProductDetail.rate >= 1 ? "good" : "bad"
                  }
                >
                  <StarIcon />
                </p>
                <p
                  className={
                    context.showProductDetail.rate >= 2 ? "good" : "bad"
                  }
                >
                  <StarIcon />
                </p>
                <p
                  className={
                    context.showProductDetail.rate >= 3 ? "good" : "bad"
                  }
                >
                  <StarIcon />
                </p>
                <p
                  className={
                    context.showProductDetail.rate >= 4 ? "good" : "bad"
                  }
                >
                  <StarIcon />
                </p>
                <p
                  className={
                    context.showProductDetail.rate >= 5 ? "good" : "bad"
                  }
                >
                  <StarIcon />
                </p>
              </div>
              <div className="flex flex-row justify-between">
                <div>
                  <p>
                    Brand:{" "}
                    <span className="font-semibold">
                      {context.showProductDetail.brand}
                    </span>
                  </p>
                  {/* <p>
                    Stock available:{" "}
                    <span className="font-semibold">
                      {context.showProductDetail.quantity}
                    </span>
                  </p> */}
                </div>
                <span className="font-light">
                  {context.showProductDetail.category}
                </span>
              </div>
              <p className="font-bold mt-4 flex flex-row justify-end">
                Price:{" "}
                <span className="text-red-800 text-2xl ml-4">
                  ${context.showProductDetail.price}
                </span>
              </p>

              <p className="font-bold mt-4">About this article</p>
              <p>{context.showProductDetail.description}</p>
            </div>

            <div className="md:w-1/6 px-4">
              <span className="text-red-800 text-2xl">
                ${context.showProductDetail.price}
              </span>
              <p>Free shipping!</p>
              <p className="text-xs mb-4">
                Arrives between{" "}
                <span className="font-bold">
                  {deliveryDate(today, "dd/mm/yy", 5)} and el{" "}
                  {deliveryDate(today, "dd/mm/yy", 10)}
                </span>
              </p>

              <button
                type="button"
                className="flex flex-row items-center bg-orange-200 font-bold border-3 py-1 px-6 rounded-lg"
                onClick={() => navigate("/payment")}
              >
                Buy
              </button>
              <button type="button"></button>
            </div>
          </div>
          <figure className="px-4">
            <img
              src={context.showProductDetail.banner}
              alt={`Banner ${context.showProductDetail.title}`}
              className="w-screen rounded-lg"
            />
          </figure>
        </div>
      </Layout>
    </>
  );
};
