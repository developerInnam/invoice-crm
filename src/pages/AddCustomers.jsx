import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";
import { RiFolderTransferLine } from "react-icons/ri";

const AddCustomers = () => {
  const { register, handleSubmit, reset, getValues, setValue } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      alert("Customer added successfully! Check console for data.");
      reset();
    } catch (error) {
      console.error("Error adding customer:", error);
      alert("Failed to add customer.");
    }
  };

  const handleTransferClick = () => {
    const [
      name,
      email,
      door_number,
      area,
      country,
      pincode,
      state,
    ] = getValues([
      "name",
      "email",
      "door_number",
      "area",
      "country",
      "pincode",
      "state",
    ]);

    setValue("ship_name", name);
    setValue("ship_email", email);
    setValue("door_number", door_number);
    setValue("ship_area", area);
    setValue("ship_country", country);
    setValue("ship_pincode", pincode);
    setValue("ship_state", state);
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
                  {...register("name")}
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
                  Door No
                </label>
                <input
                  type="text"
                  name="door_number"
                  {...register("door_number")}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  placeholder="Enter Door Number"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Area
                </label>
                <input
                  type="text"
                  name="area"
                  {...register("area")}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  placeholder="Enter Area"
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
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  {...register("state")}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  placeholder="Enter State"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Pincode
                </label>
                <input
                  type="text"
                  name="pincode"
                  {...register("pincode")}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  placeholder="Enter Pincode"
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
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  {...register("phone")}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  placeholder="Enter Number"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  GST Number
                </label>
                <input
                  type="text"
                  name="gst"
                  {...register("gst")}
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
                  name="ship_name"
                  {...register("ship_name")}
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
                  name="ship_email"
                  {...register("ship_email")}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Door No
                </label>
                <input
                  type="text"
                  name="door_number"
                  {...register("door_number")}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  placeholder="Enter Door Number"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Area
                </label>
                <input
                  type="text"
                  name="ship_area"
                  {...register("ship_area")}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  placeholder="Enter Area"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Pincode
                </label>
                <input
                  type="text"
                  name="ship_pincode"
                  {...register("ship_pincode")}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  placeholder="Enter Pincode"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Country
                </label>
                <input
                  type="text"
                  name="ship_country"
                  {...register("ship_country")}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  placeholder="Enter Country"
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
