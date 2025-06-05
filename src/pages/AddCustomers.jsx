import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";
import { RiFolderTransferLine } from "react-icons/ri";

const AddCustomers = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    const formDataObj = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formDataObj.append(key, value);
    });

    console.log("Form Data Submitted:", data);
    for (let pair of formDataObj.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      alert("Customer added successfully! Check console for data.");
      reset();
    } catch (error) {
      console.error("Error adding customer:", error);
      alert("Failed to add customer.");
    }
  };

  const handleTransferClick = () => {
    const [name, email, primary_address, secondary_address, country, postcode] =
      getValues([
        "name",
        "email",
        "primary_address",
        "secondary_address",
        "country",
        "postcode",
      ]);

    setValue("shippingName", name);
    setValue("shippingEmail", email);
    setValue("shippingPrimaryAddress", primary_address);
    setValue("shippingSecondaryAddress", secondary_address);
    setValue("shippingCountry", country);
    setValue("shippingPostcode", postcode);
  };

  return (
    <section className="flex-1 p-5">
      <div className="pb-2 flex items-center justify-between border-b-2 mb-4 border-gray-200">
        <PageTitle pageTitle={"Add Customer"} />
        <BreadCrumbs pageName={"customer-list"} />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex lg:flex-row flex-col gap-5"
      >
        <div className="bg-white border border-gray-200 rounded shadow relative w-full">
          <div className="flex p-5 items-center border-b-2 border-gray-200 justify-between">
            <h3 className="text-xl font-semibold">Customer Information</h3>
            <RiFolderTransferLine
              className="text-2xl text-gray-900 cursor-pointer"
              onClick={handleTransferClick}
            />
          </div>

          <div className="p-6 space-y-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", {
                    required: true,
                    pattern: /^[a-zA-Z\s]*$/,
                  })}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  placeholder="Enter Name"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  {...register("email")}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Primary Address
                </label>
                <input
                  type="text"
                  name="primary_address"
                  {...register("primary_address")}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  placeholder="Enter Address"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Secondary Address
                </label>
                <input
                  type="text"
                  name="secondary_address"
                  {...register("secondary_address")}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  placeholder="Enter Address"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Town / City
                </label>
                <input
                  type="text"
                  name="city"
                  {...register("city")}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  placeholder="Enter Town / City"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  {...register("country")}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  placeholder="Enter Country"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Postcode
                </label>
                <input
                  type="text"
                  name="postcode"
                  {...register("postcode")}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  placeholder="Enter Postcode"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  {...register("phoneNumber", {
                    pattern: /^\d+$/,
                  })}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  placeholder="Enter Number"
                />
              </div>
              <div className="col-span-6">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  GST Number
                </label>
                <input
                  type="text"
                  name="gstNumber"
                  {...register("gstNumber", {
                    pattern: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
                  })}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  placeholder="Enter GST Number"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded shadow relative w-full">
          <div className="flex p-5 items-start border-b-2 border-gray-200 justify-between">
            <h3 className="text-xl font-semibold">Shipping Information</h3>
          </div>

          <div className="p-6 space-y-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="shippingName"
                  {...register("shippingName", {
                    pattern: /^[a-zA-Z\s]*$/,
                  })}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  placeholder="Enter Name"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Email
                </label>
                <input
                  type="text"
                  name="shippingEmail"
                  {...register("shippingEmail")}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Primary Address
                </label>
                <input
                  type="text"
                  name="shippingPrimaryAddress"
                  {...register("shippingPrimaryAddress")}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  placeholder="Enter Address"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Secondary Address
                </label>
                <input
                  type="text"
                  name="shippingSecondaryAddress"
                  {...register("shippingSecondaryAddress")}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  placeholder="Enter Address"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Country
                </label>
                <input
                  type="text"
                  name="shippingCountry"
                  {...register("shippingCountry")}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  placeholder="Enter Country"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Postcode
                </label>
                <input
                  type="text"
                  name="shippingPostcode"
                  {...register("shippingPostcode")}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  placeholder="Enter Postcode"
                  required
                />
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
