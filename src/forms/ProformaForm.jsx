import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { RiFolderTransferLine } from "react-icons/ri";
import CustomerDataPopup from "../modalPopup/CustomerDataPopup";

const ProformaForm = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const { register, getValues, setValue } = useFormContext();

  const handleTransferClick = () => {
    const [name, email, door_number, area, country, pincode, state] = getValues(
      ["name", "email", "door_number", "area", "country", "pincode", "state"]
    );

    setValue("ship_name", name);
    setValue("ship_email", email);
    setValue("ship_door_number", door_number);
    setValue("ship_area", area);
    setValue("ship_country", country);
    setValue("ship_pincode", pincode);
    setValue("ship_state", state);
  };
  return (
    <section>
      {openPopup && (
        <CustomerDataPopup openPopup={openPopup} setOpenPopup={setOpenPopup} />
      )}
      <div className="bg-white border border-gray-200 rounded shadow relative w-full">
        <div className="p-6 space-y-6">
          <form>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Select Type
                </label>
                <select
                  disabled
                  className="bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm w-full p-2.5"
                >
                  <option value="Proforma Invoice">Proforma Invoice</option>
                </select>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Invoice Date
                </label>
                <input
                  type="date"
                  name="invoice_date"
                  {...register("invoice_date")}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Due Date
                </label>
                <input
                  type="date"
                  name="due_date"
                  {...register("due_date")}
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  #PI
                </label>
                <input
                  type="number"
                  name="number"
                  id="number"
                  className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded block w-full p-2.5"
                  placeholder="1234"
                  disabled
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-5 mt-10">
        <div className="bg-white border border-gray-200 rounded shadow relative w-full">
          <div className="flex p-5 items-center border-b-2 border-gray-200 justify-between">
            <h3 className="text-xl font-semibold">Customer Information</h3>
            <button
              className="text-blue-700 cursor-pointer font-semibold"
              onClick={() => setOpenPopup(true)}
            >
              (OR) Select Existing Customer
            </button>
          </div>
          <div className="p-6 space-y-6">
            <form>
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
                    required
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
            </form>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded shadow relative w-full">
          <div className="flex p-5 items-center border-b-2 border-gray-200 justify-between">
            <h3 className="text-xl font-semibold">Shipping Information</h3>
            <RiFolderTransferLine
              className="text-2xl text-gray-900 cursor-pointer"
              onClick={handleTransferClick}
            />
          </div>
          <div className="p-6 space-y-6">
            <form>
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
                    name="ship_door_number"
                    {...register("ship_door_number")}
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProformaForm;
