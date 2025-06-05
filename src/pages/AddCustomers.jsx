import React, { useEffect, useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import PageTitle from "../components/PageTitle";
import axios from "axios";
// import { API_BASE_URL } from "../components/Api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Z\s]*$/, "Please enter a valid name")
    .required("Please enter the name"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter the email"),
  primary_address: yup.string().required("Please enter the primary address"),
  secondary_address: yup
    .string()
    .required("Please enter the secondary address"),
  city: yup.string().required("Please enter the city name"),
  country: yup.string().required("Please enter the country name"),
  postcode: yup.string().required("Please enter the postcode"),
  phoneNumber: yup
    .string()
    .matches(/^\d+$/, "Please enter a valid phone number")
    .required("Please enter the phone number"),
  gstNumber: yup
    .string()
    .matches(
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
      "Please enter a valid GST number"
    )
    .required("Please enter the GST number"),
  shippingName: yup
    .string()
    .matches(/^[a-zA-Z\s]*$/, "Please enter a valid name")
    .required("Please enter the name"),
  shippingEmail: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter the email"),
  shippingPrimaryAddress: yup
    .string()
    .required("Please enter the primary address"),
  shippingSecondaryAddress: yup
    .string()
    .required("Please enter the secondary address"),
  shippingCountry: yup.string().required("Please enter the country"),
  shippingPostcode: yup.string().required("Please enter the postcode"),
});

const AddCustomers = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const fetchCustomerData = () => {
  //   axios
  //     .get(`${API_BASE_URL}store_customers`)
  //     .then((res) => {
  //       console.log("Fetched customer data:", res.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching customer data:", error);
  //     });
  // };

  // useEffect(() => {
  //   fetchCustomerData();
  // }, []);

  const onSubmit = async (data) => {
    console.log("Form Data Submitted:", data);
    const formDataObj = new FormData();

    for (const key in data) {
      formDataObj.append(key, data[key]);
    }

    try {
      // axios.post(`${API_BASE_URL}store_customers`, formDataObj);
      // console.log(formDataObj)
      alert("Customer added successfully! Check console for data.");
      reset(); // Reset form after successful submission
    } catch (error) {
      console.error("Error adding customer:", error);
      alert("Failed to add customer.");
    }
  };

  return (
    <section className="flex-1 p-5">
      <div className="pb-2 flex items-center justify-between border-b-2 mb-4 border-gray-300">
        <PageTitle pageTitle={"Add Customer"} />
        <BreadCrumbs pageName={"customer-list"} />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex lg:flex-row flex-col gap-5"
      >
        <div className="bg-white border-2 border-gray-300 rounded shadow relative w-full">
          <div className="flex p-5 items-start border-b-2 border-gray-300 justify-between">
            <h3 className="text-xl font-semibold">Customer Information</h3>
          </div>

          <div className="p-6 space-y-6">
            <div>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...register("name")}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    {...register("email")}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Primary Address
                  </label>
                  <input
                    type="text"
                    name="primary_address"
                    {...register("primary_address")}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Address"
                  />
                  {errors.primary_address && (
                    <p className="text-red-500 text-sm">
                      {errors.primary_address.message}
                    </p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Secondary Address
                  </label>
                  <input
                    type="text"
                    name="secondary_address"
                    {...register("secondary_address")}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Address"
                  />
                  {errors.secondary_address && (
                    <p className="text-red-500 text-sm">
                      {errors.secondary_address.message}
                    </p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Town / City
                  </label>
                  <input
                    type="text"
                    name="city"
                    {...register("city")}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Town / City"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm">
                      {errors.city.message}
                    </p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    {...register("country")}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Country"
                  />
                  {errors.country && (
                    <p className="text-red-500 text-sm">
                      {errors.country.message}
                    </p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Postcode
                  </label>
                  <input
                    type="text"
                    name="postcode"
                    {...register("postcode")}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Postcode"
                  />
                  {errors.postcode && (
                    <p className="text-red-500 text-sm">
                      {errors.postcode.message}
                    </p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text" // Changed to text to handle non-numeric input gracefully with regex
                    name="phoneNumber"
                    {...register("phoneNumber")}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Number"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
                <div className="col-span-6">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    GST Number
                  </label>
                  <input
                    type="text" // Changed to text to handle non-numeric input gracefully with regex
                    name="gstNumber"
                    {...register("gstNumber")}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter GST Number"
                  />
                  {errors.gstNumber && (
                    <p className="text-red-500 text-sm">
                      {errors.gstNumber.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border-2 border-gray-300 rounded shadow relative w-full">
          <div className="flex p-5 items-start border-b-2 border-gray-300 justify-between">
            <h3 className="text-xl font-semibold">Shipping Information</h3>
          </div>

          <div className="p-6 space-y-6">
            <div>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="shippingName"
                    {...register("shippingName")}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Name"
                  />
                  {errors.shippingName && (
                    <p className="text-red-500 text-sm">
                      {errors.shippingName.message}
                    </p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Email
                  </label>
                  <input
                    type="text"
                    name="shippingEmail"
                    {...register("shippingEmail")}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Email"
                  />
                  {errors.shippingEmail && (
                    <p className="text-red-500 text-sm">
                      {errors.shippingEmail.message}
                    </p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Primary Address
                  </label>
                  <input
                    type="text"
                    name="shippingPrimaryAddress"
                    {...register("shippingPrimaryAddress")}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Address"
                  />
                  {errors.shippingPrimaryAddress && (
                    <p className="text-red-500 text-sm">
                      {errors.shippingPrimaryAddress.message}
                    </p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Secondary Address
                  </label>
                  <input
                    type="text"
                    name="shippingSecondaryAddress"
                    {...register("shippingSecondaryAddress")}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Address"
                  />
                  {errors.shippingSecondaryAddress && (
                    <p className="text-red-500 text-sm">
                      {errors.shippingSecondaryAddress.message}
                    </p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    name="shippingCountry"
                    {...register("shippingCountry")}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Country"
                  />
                  {errors.shippingCountry && (
                    <p className="text-red-500 text-sm">
                      {errors.shippingCountry.message}
                    </p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Postcode
                  </label>
                  <input
                    type="text"
                    name="shippingPostcode"
                    {...register("shippingPostcode")}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Postcode"
                  />
                  {errors.shippingPostcode && (
                    <p className="text-red-500 text-sm">
                      {errors.shippingPostcode.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 border-t border-gray-200 rounded">
            <button
              className="text-white bg-blue-700 hover:bg-blue-900 cursor-pointer font-medium rounded text-sm px-5 py-2.5 text-center"
              type="submit"
            >
              Create Customer
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddCustomers;
