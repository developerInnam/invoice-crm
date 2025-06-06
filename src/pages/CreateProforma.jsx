import React from "react";
import PageTitle from "../components/PageTitle";
import BreadCrumbs from "../components/BreadCrumbs";
import TextEditor from "../components/TextEditor";
import ProformaForm from "../forms/ProformaForm";
import { useForm, FormProvider } from "react-hook-form";

const CreateProforma = () => {
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
    <section className="flex-1 p-5">
      <div className="pb-2 flex items-center justify-between border-b-2 mb-4 border-gray-200">
        <PageTitle pageTitle={"Create New Proforma Invoice"} />
        <BreadCrumbs pageName={"proforma-list"} />
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <ProformaForm />
          <TextEditor />
        </form>
      </FormProvider>
    </section>
  );
};

export default CreateProforma;
