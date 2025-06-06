import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { AiOutlinePercentage } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Quill from "quill";
import ProductDataPopup from "../modalPopup/ProductDataPopup";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";

const MIN_FONT_SIZE = 18;
const MAX_FONT_SIZE = 25;
const FONT_SIZE_STEP = 1;

const SIZES = [];
for (let i = MIN_FONT_SIZE; i <= MAX_FONT_SIZE; i += FONT_SIZE_STEP) {
  SIZES.push(`${i}px`);
}

const Size = Quill.import("attributors/style/size");
Size.whitelist = SIZES;
Quill.register(Size, true);

const TextEditor = () => {
  // const { register, watch, setValue } = useFormContext();
  const { control, register, setValue, getValues, watch } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "contentBoxes",
  });

  const price = watch("price");
  const discount = watch("discount");
  const taxRate = 0.18;
  const subTotal = price - discount;
  const tax = subTotal * taxRate;
  const total = subTotal + tax;

  useEffect(() => {
    setValue("subTotal", subTotal.toFixed(2));
    setValue("tax", tax.toFixed(2));
    setValue("total", total.toFixed(2));
  }, [price, discount, setValue]);

  const [openPopup, setOpenPopup] = useState(false);
  const [contentBoxes, setContentBoxes] = useState([
    {
      id: Date.now(),
      value: "",
      // price: 0,
      // discount: 0,
      // subTotal: 0,
      // cgstSgst: 0,
      // total: 0,
      // removeGst: false,
      // showIgst: false,
    },
  ]);
  // console.log(contentBoxes);

  const quillRefs = useRef({});
  // Define modules with history for undo/redo
  const getModules = (boxId) => ({
    toolbar: {
      container: [
        [{ font: [] }],
        [{ size: SIZES }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ["link", "image", "video"],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }],
        ["clean"],
      ],
      handlers: {},
    },
    history: {
      delay: 1000,
      maxStack: 100,
      userOnly: false,
    },
    // Optional: Image resize module if you install it
    // imageResize: {
    //   parchment: Quill.import('parchment'),
    //   modules: ['Resize', 'DisplaySize', 'Toolbar']
    // }
  });

  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "align",
    "link",
    "image",
    "video",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "indent",
  ];

  const handleAddContentBox = () => {
    setContentBoxes((prevBoxes) => [
      ...prevBoxes,
      {
        id: Date.now(),
        value: "",
        // price: 0,
        // discount: 0,
        // subTotal: 0,
        // cgstSgst: 0,
        // total: 0,
        // removeGst: false,
        // showIgst: false,
      },
    ]);
  };
  const handleCloseContentBox = (idToClose) => {
    setContentBoxes((prevBoxes) => {
      if (prevBoxes.length === 1 && prevBoxes[0].id === idToClose) {
        return prevBoxes;
      }
      return prevBoxes.filter((box) => box.id !== idToClose);
    });
  };

  const handleQuillChange = (id, newValue) => {
    setContentBoxes((prevBoxes) =>
      prevBoxes.map((box) =>
        box.id === id ? { ...box, value: newValue } : box
      )
    );
  };

  return (
    <div className="container mt-10">
      {openPopup && (
        <ProductDataPopup openPopup={openPopup} setOpenPopup={setOpenPopup} />
      )}
      <h1 className="text-2xl font-semibold text-gray-800">
        Product Information
      </h1>
      {contentBoxes.map((box) => (
        <div
          key={box.id}
          className="mb-4 flex lg:flex-row flex-col gap-5 w-full"
        >
          <div className="w-full">
            <div className="mt-4 flex justify-between mb-3">
              <button
                className="text-white flex gap-1 items-center font-semibold bg-blue-700 py-2 cursor-pointer hover:bg-blue-800 px-3 rounded"
                onClick={() => setOpenPopup(true)}
              >
                <MdAddCircleOutline className="text-2xl" />
                <span className="md:block hidden">Select Product</span>
              </button>
              <div className="flex items-center">
                <button
                  className="text-white font-semibold flex gap-1 items-center bg-red-700 py-2 cursor-pointer hover:bg-red-800 px-3 rounded"
                  onClick={() => handleCloseContentBox(box.id)}
                >
                  <IoMdCloseCircleOutline className="text-2xl" />
                  {/* <span>Content Box</span> */}
                </button>
              </div>
            </div>
            {fields.map((field, index) => (
              <div key={field.id} className="mb-4">
                <Controller
                  control={control}
                  name={`contentBoxes.${index}.value`}
                  render={({ field: quillField }) => (
                    <ReactQuill
                      theme="snow"
                      value={quillField.value}
                      onChange={quillField.onChange}
                      modules={getModules(box.id)}
                      formats={formats}
                      className="border border-gray-300 rounded-md"
                    />
                  )}
                />

                {/* <ReactQuill
              ref={(el) => (quillRefs.current[box.id] = el)}
              theme="snow"
              value={box.value}
              onChange={(newValue) => handleQuillChange(box.id, newValue)}
              modules={getModules(box.id)}
              formats={formats}
              className="border border-gray-300 rounded-md"
            /> */}
              </div>
            ))}
          </div>

          <div className="overflow-x-auto border border-gray-300 dark:border-gray-700 rounded w-full">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 min-w-[160px] md:w-auto text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 min-w-[160px] md:w-auto text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Discount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                <tr>
                  <td className="p-4">
                    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded px-2 py-1.5 bg-white dark:bg-gray-700">
                      <LiaRupeeSignSolid className="text-gray-600 dark:text-gray-400 mr-2" />
                      <input
                        type="number"
                        className="w-full bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-0 border-none p-0"
                        placeholder="0.00"
                        step="0.01"
                        {...register("price")}
                      />
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded px-2 py-1.5 bg-white dark:bg-gray-700">
                      <AiOutlinePercentage className="text-gray-600 dark:text-gray-400 mr-2" />
                      <input
                        type="number"
                        className="w-full bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-0 border-none p-0"
                        placeholder="0"
                        step="0.01"
                        {...register("discount")}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="min-w-full mt-6 divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 min-w-[160px] md:w-auto text-left text-xs whitespace-nowrap font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Sub Total
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                <tr>
                  <td className="p-4">
                    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded px-2 py-1.5 bg-white dark:bg-gray-700">
                      <LiaRupeeSignSolid className="text-gray-600 dark:text-gray-400 mr-2" />
                      <input
                        type="number"
                        className="w-full bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-0 border-none p-0"
                        placeholder="0.00"
                        {...register("subTotal")}
                        readOnly
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="flex flex-wrap justify-between gap-2">
          <button
            className="text-white flex items-center gap-1 bg-blue-700 py-2 cursor-pointer hover:bg-blue-800 px-3 rounded"
            onClick={handleAddContentBox}
          >
            <MdAddCircleOutline className="text-2xl" />
            <span className="font-semibold">Content Box</span>
          </button>
        </div>
      </div>
      <div className="mb-2 lg:mt-0 mt-5 lg:max-w-[485px] w-full float-right border border-gray-200">
        <div>
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 min-w-[160px] md:w-auto text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  CGST & SGST:
                </th>
                <th className="px-6 py-3 min-w-[160px] md:w-auto text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Total:
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              <tr>
                <td className="p-4">
                  <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded px-2 py-1.5 bg-white dark:bg-gray-700">
                    <LiaRupeeSignSolid className="text-gray-600 dark:text-gray-400 mr-2" />
                    <input
                      type="number"
                      className="w-full bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-0 border-none p-0"
                      placeholder="0.00"
                      {...register("tax")}
                    />
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded px-2 py-1.5 bg-white dark:bg-gray-700">
                    <LiaRupeeSignSolid className="text-gray-600 dark:text-gray-400 mr-2" />
                    <input
                      type="number"
                      className="w-full bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-0 border-none p-0"
                      placeholder="0"
                      {...register("total")}
                      readOnly
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-5 flex items-center justify-between mx-4 rounded">
            <div className="flex md:flex-row flex-col md:gap-5 gap-2">
              <div className="flex items-center justify-between font-semibold text-gray-800 gap-3">
                <span className="md:text-[15px] text-[14px]">Remove GST</span>
                <input type="checkbox" className="scale-125" />
              </div>
              <div className="flex items-center justify-between font-semibold text-gray-800 gap-3">
                <span className="md:text-[15px] text-[14px]">Show IGST</span>
                <input type="checkbox" className="scale-125" />
              </div>
            </div>
            <button
              className="text-white bg-blue-700 hover:bg-blue-900 cursor-pointer font-medium rounded text-sm px-5 py-2.5 text-center"
              type="submit"
            >
              Create Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
