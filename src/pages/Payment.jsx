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
        <div className="max-w-2xl mx-auto p-6 mt-20 bg-slate-50 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold mb-4">Billing address</h2>
            <div className="flex space-x-2">
              <div>
              <svg className="h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2 .3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4 .2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2 .2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2 .1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z"/></svg>
              </div>
              <div>
                <svg className="h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M325.1 167.8c0-16.4-14.1-18.4-27.4-18.4l-39.1-.3v69.3H275v-25.1h18c18.4 0 14.5 10.3 14.8 25.1h16.6v-13.5c0-9.2-1.5-15.1-11-18.4 7.4-3 11.8-10.7 11.7-18.7zm-29.4 11.3H275v-15.3h21c5.1 0 10.7 1 10.7 7.4 0 6.6-5.3 7.9-11 7.9zM279 268.6h-52.7l-21 22.8-20.5-22.8h-66.5l-.1 69.3h65.4l21.3-23 20.4 23h32.2l.1-23.3c18.9 0 49.3 4.6 49.3-23.3 0-17.3-12.3-22.7-27.9-22.7zm-103.8 54.7h-40.6v-13.8h36.3v-14.1h-36.3v-12.5h41.7l17.9 20.2zm65.8 8.2l-25.3-28.1L241 276zm37.8-31h-21.2v-17.6h21.5c5.6 0 10.2 2.3 10.2 8.4 0 6.4-4.6 9.2-10.5 9.2zm-31.6-136.7v-14.6h-55.5v69.3h55.5v-14.3h-38.9v-13.8h37.8v-14.1h-37.8v-12.5zM576 255.4h-.2zm-194.6 31.9c0-16.4-14.1-18.7-27.1-18.7h-39.4l-.1 69.3h16.6l.1-25.3h17.6c11 0 14.8 2 14.8 13.8l-.1 11.5h16.6l.1-13.8c0-8.9-1.8-15.1-11-18.4 7.7-3.1 11.8-10.8 11.9-18.4zm-29.2 11.2h-20.7v-15.6h21c5.1 0 10.7 1 10.7 7.4 0 6.9-5.4 8.2-11 8.2zm-172.8-80v-69.3h-27.6l-19.7 47-21.7-47H83.3v65.7l-28.1-65.7H30.7L1 218.5h17.9l6.4-15.3h34.5l6.4 15.3H100v-54.2l24 54.2h14.6l24-54.2v54.2zM31.2 188.8l11.2-27.6 11.5 27.6zm477.4 158.9v-4.5c-10.8 5.6-3.9 4.5-156.7 4.5 0-25.2 .1-23.9 0-25.2-1.7-.1-3.2-.1-9.4-.1 0 17.9-.1 6.8-.1 25.3h-39.6c0-12.1 .1-15.3 .1-29.2-10 6-22.8 6.4-34.3 6.2 0 14.7-.1 8.3-.1 23h-48.9c-5.1-5.7-2.7-3.1-15.4-17.4-3.2 3.5-12.8 13.9-16.1 17.4h-82v-92.3h83.1c5 5.6 2.8 3.1 15.5 17.2 3.2-3.5 12.2-13.4 15.7-17.2h58c9.8 0 18 1.9 24.3 5.6v-5.6c54.3 0 64.3-1.4 75.7 5.1v-5.1h78.2v5.2c11.4-6.9 19.6-5.2 64.9-5.2v5c10.3-5.9 16.6-5.2 54.3-5V80c0-26.5-21.5-48-48-48h-480c-26.5 0-48 21.5-48 48v109.8c9.4-21.9 19.7-46 23.1-53.9h39.7c4.3 10.1 1.6 3.7 9 21.1v-21.1h46c2.9 6.2 11.1 24 13.9 30 5.8-13.6 10.1-23.9 12.6-30h103c0-.1 11.5 0 11.6 0 43.7 .2 53.6-.8 64.4 5.3v-5.3H363v9.3c7.6-6.1 17.9-9.3 30.7-9.3h27.6c0 .5 1.9 .3 2.3 .3H456c4.2 9.8 2.6 6 8.8 20.6v-20.6h43.3c4.9 8-1-1.8 11.2 18.4v-18.4h39.9v92h-41.6c-5.4-9-1.4-2.2-13.2-21.9v21.9h-52.8c-6.4-14.8-.1-.3-6.6-15.3h-19c-4.2 10-2.2 5.2-6.4 15.3h-26.8c-12.3 0-22.3-3-29.7-8.9v8.9h-66.5c-.3-13.9-.1-24.8-.1-24.8-1.8-.3-3.4-.2-9.8-.2v25.1H151.2v-11.4c-2.5 5.6-2.7 5.9-5.1 11.4h-29.5c-4-8.9-2.9-6.4-5.1-11.4v11.4H58.6c-4.2-10.1-2.2-5.3-6.4-15.3H33c-4.2 10-2.2 5.2-6.4 15.3H0V432c0 26.5 21.5 48 48 48h480.1c26.5 0 48-21.5 48-48v-90.4c-12.7 8.3-32.7 6.1-67.5 6.1zm36.3-64.5H575v-14.6h-32.9c-12.8 0-23.8 6.6-23.8 20.7 0 33 42.7 12.8 42.7 27.4 0 5.1-4.3 6.4-8.4 6.4h-32l-.1 14.8h32c8.4 0 17.6-1.8 22.5-8.9v-25.8c-10.5-13.8-39.3-1.3-39.3-13.5 0-5.8 4.6-6.5 9.2-6.5zm-57 39.8h-32.2l-.1 14.8h32.2c14.8 0 26.2-5.6 26.2-22 0-33.2-42.9-11.2-42.9-26.3 0-5.6 4.9-6.4 9.2-6.4h30.4v-14.6h-33.2c-12.8 0-23.5 6.6-23.5 20.7 0 33 42.7 12.5 42.7 27.4-.1 5.4-4.7 6.4-8.8 6.4zm-42.2-40.1v-14.3h-55.2l-.1 69.3h55.2l.1-14.3-38.6-.3v-13.8H445v-14.1h-37.8v-12.5zm-56.3-108.1c-.3 .2-1.4 2.2-1.4 7.6 0 6 .9 7.7 1.1 7.9 .2 .1 1.1 .5 3.4 .5l7.3-16.9c-1.1 0-2.1-.1-3.1-.1-5.6 0-7 .7-7.3 1zm20.4-10.5h-.1zm-16.2-15.2c-23.5 0-34 12-34 35.3 0 22.2 10.2 34 33 34h19.2l6.4-15.3h34.3l6.6 15.3h33.7v-51.9l31.2 51.9h23.6v-69h-16.9v48.1l-29.1-48.1h-25.3v65.4l-27.9-65.4h-24.8l-23.5 54.5h-7.4c-13.3 0-16.1-8.1-16.1-19.9 0-23.8 15.7-20 33.1-19.7v-15.2zm42.1 12.1l11.2 27.6h-22.8zm-101.1-12v69.3h16.9v-69.3z"/></svg>
              </div>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setPaymentModal(true);
            }}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-md font-normal">First name</label>
                <input
                  required
                  type="text"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  placeholder="Enter your first name"
                  className="mt-1 p-1 block w-full border-2 rounded-md border-gray-300 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-md font-normal">Last name</label>
                <input
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  placeholder="Enter your last name"
                  className="mt-1 p-1 block w-full border-2 rounded-md border-gray-300 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-md font-normal">
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
                  className="mt-1 p-1 block w-full border-2 rounded-md border-gray-300 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-md font-normal">
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
                  className="p-1 mt-1 block w-full border-2 rounded-md border-gray-300 shadow-sm"
                />
              </div>
              <div className="sm:col-span-1 flex gap-2">
                <div className="flex-grow">
                  <label className="block text-md font-normal">
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
                    className="p-1 mt-1 block w-full border-2 rounded-md border-gray-300 shadow-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-1 flex gap-2">
                <div className="flex-grow">
                  <label className="block text-md font-normal">
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
                    className="p-1 mt-1 block w-full border-2 rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="flex-grow">
                  <label className="block text-md font-normal">CVV/CVC</label>
                  <input
                    value={cardCvv}
                    required
                    onChange={(e) => {
                      setCardCvv(e.target.value);
                    }}
                    placeholder="123"
                    type="text"
                    className="p-1 mt-1 block w-full border-2 rounded-md border-gray-300 shadow-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-2 flex gap-4 items-center">
                <div className="w-1/3">
                  <label className="block text-md font-normal">Country</label>
                  <select
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                    className="mt-1 p-1 block w-full rounded-md border-2 border-gray-300 shadow-sm"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                  </select>
                </div>

                <div className="w-1/3">
                  <label className="block text-md font-normal">
                    State/Province
                  </label>
                  <input
                    type="text"
                    value={province}
                    onChange={(e) => {
                      setProvince(e.target.value);
                    }}
                    placeholder="Ohio"
                    className="p-1 mt-1 block w-full border-2 rounded-md border-gray-300 shadow-sm"
                  />
                </div>

                <div className="w-1/3">
                  <label className="block text-md font-normal">
                    Postal code
                  </label>
                  <input
                    type="text"
                    value={postal}
                    onChange={(e) => {
                      setPostal(e.target.value);
                    }}
                    placeholder="24011"
                    className="p-1 mt-1 block w-full border-2 rounded-md border-gray-300 shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-md font-normal">Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  placeholder="Enter your address"
                  className="p-1 mt-1 block w-full border-2  rounded-md border-gray-300 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-md font-normal">City</label>
                <input
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  type="text"
                  className="p-1 mt-1 block  w-full border-2 rounded-md border-gray-300 shadow-sm"
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
