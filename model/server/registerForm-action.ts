"use server";

import { z } from "zod";
import { registerFormSchema } from "../schemas/RegisterFormSchema";
import { actionClient } from "./safeAction";

export const RegisterFormAction = actionClient
  .schema(registerFormSchema.merge(z.object({ event: z.string() })))
  .action(
    async ({
      parsedInput: {
        name,
        email,
        field,
        position,
        phone,
        message,
        companyAddress,
        companyName,
        companyNumber,
        city,
        state,
        zipNumber,
        event,
      },
    }) => {
      const formData = {
        name,
        email,
        field,
        position,
        phone,
        event,
        message: message || undefined,
        companyAddress: companyAddress || undefined,
        companyName: companyName || undefined,
        companyNumber: companyNumber || undefined,
        city: city || undefined,
        state: state || undefined,
        zipNumber: zipNumber || undefined,
      };

      //   try {
      //     const response = await fetch(
      //       "https://api.airtable.com/v0/appLQVR0GJRJ2TsIk/tblup9wTLqSBUnkhj",
      //       {
      //         method: "POST",
      //         headers: {
      //           Authorization: `Bearer pat6DuvRIUNcB4646.08c37577d6d1647c2e9659a95873e8455251159f311084900b9c554d067227ee`,
      //           "Content-Type": "application/json",
      //         },
      //         body: JSON.stringify({
      //           fields: formData,
      //         }),
      //       }
      //     );

      //     console.log(
      //       JSON.stringify({
      //         fields: formData,
      //       })
      //     );

      //     if (response.ok) {
      //       const result = await response.json();
      //       console.log("Form submitted successfully:", result);
      //       return result;
      //     } else {
      //       console.error(
      //         "Failed to submit form:",
      //         response.status,
      //         response.statusText
      //       );
      //     }
      //   } catch (error) {
      //     console.error("Error submitting form:", error);
      //   }

      const googleFormURL =
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfYmTCSHV4UHIujUpWtgkseVyiTrc66_pyZ4IwgV4fy7PH3Lw/formResponse";

      const data = new URLSearchParams();
      data.append("entry.1539383212", formData.name);
      data.append("entry.658989285", formData.email);
      data.append("entry.2111026739", formData.field);
      data.append("entry.946341543", formData.event);
      data.append("entry.1838197003", formData.position);
      formData.message && data.append("entry.243001806", formData.message);
      formData.companyName &&
        data.append("entry.1878647483", formData.companyName);
      formData.companyAddress &&
        data.append("entry.1799203651", formData.companyAddress);
      formData.companyNumber &&
        data.append("entry.218983033", formData.companyNumber);
      formData.city && data.append("entry.107832991", formData.city);
      formData.state && data.append("entry.1746452995", formData.state);
      formData.zipNumber && data.append("entry.2106148230", formData.zipNumber);

      try {
        const response = await fetch(googleFormURL, {
          method: "POST",
          mode: "no-cors",
          body: data,
        });

        if (response.ok) {
          console.log("Form data submitted successfully!");
        } else {
          console.log("Form submission failed:", response.statusText);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  );
