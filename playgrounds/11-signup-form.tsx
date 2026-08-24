"use client";

import { FormEvent, useState } from "react";

interface SignupValues {
  name: string;
  email: string;
  password: string;
}

type SignupErrors = Partial<Record<keyof SignupValues, string>>;

const emptyValues: SignupValues = {
  name: "",
  email: "",
  password: "",
};

export default function SignupForm() {
  const [values, setValues] = useState<SignupValues>(emptyValues);
  const [errors, setErrors] = useState<SignupErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof SignupValues, value: string) {
    // TODO: Update only the changed form field.
    // TODO: Clear the error for that field as the user edits it.
    setValues({ ...values, [field]: value });
    setErrors({ ...errors, [field]: "" });
    setSubmitted(false);
  }

  function validate(): SignupErrors {
    // TODO: Return errors when a field is blank.
    // TODO: Require an email containing "@".
    // TODO: Require a password with at least 8 characters.
    const errors: SignupErrors = {};

    if (values.name === "") {
      errors.name = "Name is required";
    }

    if (values.email === "") {
      errors.email = "Email is required";
    } else if (!values.email.includes("@")) {
      errors.email = "Email must contain @";
    }

    if (values.password === "") {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    return errors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // TODO: Call validate(), save the result in errors,
    // and only set submitted to true when there are no errors.
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <main>
      <h1>Signup form</h1>
      <p className="walkthrough">
        Walkthrough: I use one typed state object for form values, validate on
        submit, and show errors close to the fields they belong to.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={values.name}
          onChange={(event) => handleChange("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" role="alert">
            {errors.name}
          </p>
        )}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={(event) => handleChange("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" role="alert">
            {errors.email}
          </p>
        )}

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={values.password}
          onChange={(event) => handleChange("password", event.target.value)}
          aria-invalid={Boolean(errors.password)}
          aria-describedby={errors.password ? "password-error" : undefined}
        />
        {errors.password && (
          <p id="password-error" role="alert">
            {errors.password}
          </p>
        )}

        <button type="submit">Create account</button>
      </form>

      {submitted && <p role="status">Account created for {values.name}.</p>}
    </main>
  );
}
