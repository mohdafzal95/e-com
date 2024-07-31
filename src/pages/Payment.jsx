import { useContext, useState } from "react";
import { NavBar } from "../components";
import { addUserToFirestore } from "../db/firestore";
import { Context } from "../context";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  const { selectedProduct, setSelectedProduct } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [postal, setPostal] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  const [paymentModal, setPaymentModal] = useState(false);

  const AddUserHandler = () => {
    const user = {
      FirstName: firstName,
      LastName: lastName,
      cardNumber: cardNumber,
      expirationDate: expirationDate,
      cardCvv: cardCvv,
      email: email,
      phoneNumber: phoneNumber,
      country: country,
      province: province,
      postal: postal,
      address: address,
      city: city,
      productId: selectedProduct?.id,
    };

    addUserToFirestore(user);
    setCardNumber("");
    setExpirationDate("");
    setCardCvv("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setCountry("");
    setProvince("");
    setPostal("");
    setAddress("");
    setCity("");
    setSelectedProduct(null);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const CancelHandler = () => {
    setCardNumber("");
    setExpirationDate("");
    setCardCvv("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setCountry("");
    setProvince("");
    setPostal("");
    setAddress("");
    setCity("");
  };

  return (
    <div className="">
      <div>
        <NavBar></NavBar>
      </div>
      <div className="w-full p1-20  px-4">
        {/* <div className="max-w-2xl mx-auto p-6 mt-20 bg-white rounded-md shadow-md">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold mb-4">Payment info</h2>
            <div className="flex space-x-2">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  height={30}
                  className=""
                >
                  <path d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2 .3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4 .2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2 .2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2 .1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={30}
                  viewBox="0 0 576 512"
                >
                  <path d="M482.9 410.3c0 6.8-4.6 11.7-11.2 11.7-6.8 0-11.2-5.2-11.2-11.7 0-6.5 4.4-11.7 11.2-11.7 6.6 0 11.2 5.2 11.2 11.7zm-310.8-11.7c-7.1 0-11.2 5.2-11.2 11.7 0 6.5 4.1 11.7 11.2 11.7 6.5 0 10.9-4.9 10.9-11.7-.1-6.5-4.4-11.7-10.9-11.7zm117.5-.3c-5.4 0-8.7 3.5-9.5 8.7h19.1c-.9-5.7-4.4-8.7-9.6-8.7zm107.8 .3c-6.8 0-10.9 5.2-10.9 11.7 0 6.5 4.1 11.7 10.9 11.7 6.8 0 11.2-4.9 11.2-11.7 0-6.5-4.4-11.7-11.2-11.7zm105.9 26.1c0 .3 .3 .5 .3 1.1 0 .3-.3 .5-.3 1.1-.3 .3-.3 .5-.5 .8-.3 .3-.5 .5-1.1 .5-.3 .3-.5 .3-1.1 .3-.3 0-.5 0-1.1-.3-.3 0-.5-.3-.8-.5-.3-.3-.5-.5-.5-.8-.3-.5-.3-.8-.3-1.1 0-.5 0-.8 .3-1.1 0-.5 .3-.8 .5-1.1 .3-.3 .5-.3 .8-.5 .5-.3 .8-.3 1.1-.3 .5 0 .8 0 1.1 .3 .5 .3 .8 .3 1.1 .5s.2 .6 .5 1.1zm-2.2 1.4c.5 0 .5-.3 .8-.3 .3-.3 .3-.5 .3-.8 0-.3 0-.5-.3-.8-.3 0-.5-.3-1.1-.3h-1.6v3.5h.8V426h.3l1.1 1.4h.8l-1.1-1.3zM576 81v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V81c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM64 220.6c0 76.5 62.1 138.5 138.5 138.5 27.2 0 53.9-8.2 76.5-23.1-72.9-59.3-72.4-171.2 0-230.5-22.6-15-49.3-23.1-76.5-23.1-76.4-.1-138.5 62-138.5 138.2zm224 108.8c70.5-55 70.2-162.2 0-217.5-70.2 55.3-70.5 162.6 0 217.5zm-142.3 76.3c0-8.7-5.7-14.4-14.7-14.7-4.6 0-9.5 1.4-12.8 6.5-2.4-4.1-6.5-6.5-12.2-6.5-3.8 0-7.6 1.4-10.6 5.4V392h-8.2v36.7h8.2c0-18.9-2.5-30.2 9-30.2 10.2 0 8.2 10.2 8.2 30.2h7.9c0-18.3-2.5-30.2 9-30.2 10.2 0 8.2 10 8.2 30.2h8.2v-23zm44.9-13.7h-7.9v4.4c-2.7-3.3-6.5-5.4-11.7-5.4-10.3 0-18.2 8.2-18.2 19.3 0 11.2 7.9 19.3 18.2 19.3 5.2 0 9-1.9 11.7-5.4v4.6h7.9V392zm40.5 25.6c0-15-22.9-8.2-22.9-15.2 0-5.7 11.9-4.8 18.5-1.1l3.3-6.5c-9.4-6.1-30.2-6-30.2 8.2 0 14.3 22.9 8.3 22.9 15 0 6.3-13.5 5.8-20.7 .8l-3.5 6.3c11.2 7.6 32.6 6 32.6-7.5zm35.4 9.3l-2.2-6.8c-3.8 2.1-12.2 4.4-12.2-4.1v-16.6h13.1V392h-13.1v-11.2h-8.2V392h-7.6v7.3h7.6V416c0 17.6 17.3 14.4 22.6 10.9zm13.3-13.4h27.5c0-16.2-7.4-22.6-17.4-22.6-10.6 0-18.2 7.9-18.2 19.3 0 20.5 22.6 23.9 33.8 14.2l-3.8-6c-7.8 6.4-19.6 5.8-21.9-4.9zm59.1-21.5c-4.6-2-11.6-1.8-15.2 4.4V392h-8.2v36.7h8.2V408c0-11.6 9.5-10.1 12.8-8.4l2.4-7.6zm10.6 18.3c0-11.4 11.6-15.1 20.7-8.4l3.8-6.5c-11.6-9.1-32.7-4.1-32.7 15 0 19.8 22.4 23.8 32.7 15l-3.8-6.5c-9.2 6.5-20.7 2.6-20.7-8.6zm66.7-18.3H408v4.4c-8.3-11-29.9-4.8-29.9 13.9 0 19.2 22.4 24.7 29.9 13.9v4.6h8.2V392zm33.7 0c-2.4-1.2-11-2.9-15.2 4.4V392h-7.9v36.7h7.9V408c0-11 9-10.3 12.8-8.4l2.4-7.6zm40.3-14.9h-7.9v19.3c-8.2-10.9-29.9-5.1-29.9 13.9 0 19.4 22.5 24.6 29.9 13.9v4.6h7.9v-51.7zm7.6-75.1v4.6h.8V302h1.9v-.8h-4.6v.8h1.9zm6.6 123.8c0-.5 0-1.1-.3-1.6-.3-.3-.5-.8-.8-1.1-.3-.3-.8-.5-1.1-.8-.5 0-1.1-.3-1.6-.3-.3 0-.8 .3-1.4 .3-.5 .3-.8 .5-1.1 .8-.5 .3-.8 .8-.8 1.1-.3 .5-.3 1.1-.3 1.6 0 .3 0 .8 .3 1.4 0 .3 .3 .8 .8 1.1 .3 .3 .5 .5 1.1 .8 .5 .3 1.1 .3 1.4 .3 .5 0 1.1 0 1.6-.3 .3-.3 .8-.5 1.1-.8 .3-.3 .5-.8 .8-1.1 .3-.6 .3-1.1 .3-1.4zm3.2-124.7h-1.4l-1.6 3.5-1.6-3.5h-1.4v5.4h.8v-4.1l1.6 3.5h1.1l1.4-3.5v4.1h1.1v-5.4zm4.4-80.5c0-76.2-62.1-138.3-138.5-138.3-27.2 0-53.9 8.2-76.5 23.1 72.1 59.3 73.2 171.5 0 230.5 22.6 15 49.5 23.1 76.5 23.1 76.4 .1 138.5-61.9 138.5-138.4z" />
                </svg>
              </div>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              PaymentInfoHandler();
            }}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium">First name</label>
                <input
                  required
                  type="text"
                  value={paymentFirstName}
                  onChange={(e) => {
                    setPaymentFirstName(e.target.value);
                  }}
                  placeholder="Enter your first name"
                  className="px-1 mt-1 block w-full border-2 rounded-md border-gray-300 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Last name</label>
                <input
                  required
                  type="text"
                  value={paymentLastName}
                  onChange={(e) => {
                    setPaymentLastName(e.target.value);
                  }}
                  placeholder="Enter your last name"
                  className="px-1 mt-1 block w-full border-2 rounded-md border-gray-300 shadow-sm"
                />
              </div>
              
            </div>
            <div className="flex justify-end mt-6 gap-4 ">
              <button
                type="button"
                className="py-1 px-4 bg-white border-2 hover:bg-white rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={() => {
                  if (step + 1 == 2) {
                    AddUserHandler();
                  } else {
                    setStep(step + 1);
                  }
                }}
                className="py-1 px-4 bg-black text-white hover:bg-black rounded-md"
              >
                Add
              </button>
            </div>
          </form>
        </div> */}
        <div className="max-w-2xl mx-auto p-6 mt-20 bg-slate-50 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Billing address</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setPaymentModal(true);
            }}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium">First name</label>
                <input
                  required
                  type="text"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  placeholder="Enter your first name"
                  className="mt-1 px-1 block w-full border-2 rounded-md border-gray-300 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Last name</label>
                <input
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  placeholder="Enter your last name"
                  className="mt-1 px-1 block w-full border-2 rounded-md border-gray-300 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Email address
                </label>
                <input
                  required
                  type="email"
                  placeholder="abc@gmail.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="mt-1 px-1 block w-full border-2 rounded-md border-gray-300 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Phone number
                </label>
                <input
                  required
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  placeholder="+91-123445677"
                  className="px-1 mt-1 block w-full border-2 rounded-md border-gray-300 shadow-sm"
                />
              </div>
              <div className="sm:col-span-1 flex gap-2">
                <div className="flex-grow">
                  <label className="block text-sm font-medium">
                    Card number
                  </label>
                  <input
                    required
                    type="text"
                    value={cardNumber}
                    onChange={(e) => {
                      setCardNumber(e.target.value);
                    }}
                    placeholder="XXXX-XXXX-XXXX"
                    className="px-1 mt-1 block w-full border-2 rounded-md border-gray-300 shadow-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-1 flex gap-2">
                <div className="flex-grow">
                  <label className="block text-sm font-medium">
                    Expiration{" "}
                  </label>
                  <input
                    type="text"
                    value={expirationDate}
                    onChange={(e) => {
                      setExpirationDate(e.target.value);
                    }}
                    required
                    placeholder="01/23"
                    className="px-1 mt-1 block w-full border-2 rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="flex-grow">
                  <label className="block text-sm font-medium">CVV/CVC</label>
                  <input
                    value={cardCvv}
                    required
                    onChange={(e) => {
                      setCardCvv(e.target.value);
                    }}
                    placeholder="123"
                    type="text"
                    className="px-1 mt-1 block w-full border-2 rounded-md border-gray-300 shadow-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-2 flex gap-4 items-center">
                <div className="w-1/3">
                  <label className="block text-sm font-medium">Country</label>
                  <select
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                    className="mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                  </select>
                </div>

                <div className="w-1/3">
                  <label className="block text-sm font-medium">
                    State/Province
                  </label>
                  <input
                    type="text"
                    value={province}
                    onChange={(e) => {
                      setProvince(e.target.value);
                    }}
                    placeholder="Ohio"
                    className="px-1 mt-1 block w-full border-2 rounded-md border-gray-300 shadow-sm"
                  />
                </div>

                <div className="w-1/3">
                  <label className="block text-sm font-medium">
                    Postal code
                  </label>
                  <input
                    type="text"
                    value={postal}
                    onChange={(e) => {
                      setPostal(e.target.value);
                    }}
                    placeholder="24011"
                    className="px-1 mt-1 block w-full border-2 rounded-md border-gray-300 shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium">Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  placeholder="Enter your address"
                  className="px-1 mt-1 block w-full border-2  rounded-md border-gray-300 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">City</label>
                <input
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  type="text"
                  className="px-1 mt-1 block w-full border-2 rounded-md border-gray-300 shadow-sm"
                  placeholder="Enter your city"
                />
              </div>
            </div>
            

            <div className="flex justify-center sm:justify-end gap-4 mt-6">
              <button
                type="button"
                onClick={CancelHandler}
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Cancel
              </button>
              <button
                type=""
             
                className="py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-black dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>

      {paymentModal && (
        <div className="px-4 fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="relative p-4 w-full max-w-md mx-auto bg-white rounded-lg shadow-lg">
            <button
              type="button"
              className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => {
                setPaymentModal(false);
              }}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
            <div className="p-4 md:p-5 text-center">
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you want to continue this Payment?
              </h3>
              <div className="flex justify-center gap-3">
                <button
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={AddUserHandler}
                  className="py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-black dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
