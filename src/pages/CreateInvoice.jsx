import React from "react";
import PageTitle from "../components/PageTitle";
import BreadCrumbs from "../components/BreadCrumbs";
import TextEditor from "../components/TextEditor";
import InvoiceForm from "../forms/InvoiceForm";
import { useForm, FormProvider } from "react-hook-form";

const CreateInvoice = () => {
  const methods = useForm({
    defaultValues: {
      contentBoxes: [
        {
          value: "",
          price: 0,
          discount: 0,
          subTotal: 0,
          total: 0,
          cgstSgst: 0,
        },
      ],
    },
  });

  const onSubmit = (data) => {
    console.log("Data Submitted:", data);
    methods.reset();
  };
  return (
    <section className="p-5">
      <div className="pb-2 flex items-center justify-between border-b-2 mb-4 border-gray-200">
        <PageTitle pageTitle={"Create Invoice"} />
        <BreadCrumbs pageName={"invoice-list"} />
      </div>
      <div>{/* <h4>Select Type</h4> */}</div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <InvoiceForm />
          <TextEditor />
        </form>
      </FormProvider>
    </section>
  );
};

export default CreateInvoice;
