import { Form, FormikContextType, FormikProvider } from 'formik';
import React from 'react';

type FormProviderProps = {
  children: React.ReactNode;
  onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  value: FormikContextType<any>;
};

export default function FormProvider({
  children,
  onSubmit,
  value,
}: FormProviderProps) {
  return (
    <FormikProvider value={value}>
      <Form onSubmit={onSubmit}>{children}</Form>
    </FormikProvider>
  );
}
