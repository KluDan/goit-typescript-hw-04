import React, { useState, ChangeEvent } from "react";

type FormProps = {
  initialValue: string;
};

export function FormComponent({ initialValue }: FormProps) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}
