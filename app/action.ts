'use server';

import EmailTemplate from "@app/_components/EmailTemplate";
import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  if(!process.env.FEATURE_SEND_EMAIL) return;

  const firstname = formData.get('firstname') as string;
  const lastname = formData.get('lastname') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;

  try {
    const { data, error } = await resend.emails.send({
      from: `${firstname} ${lastname} <info@charlene-voyages.com>`,
      to: ['info@charlene-voyages.com'],
      subject: `Demande de contact - ${firstname} ${lastname}`,
      react: EmailTemplate({firstname, lastname, email, phone, message }),
    });

    if(error) {
      console.error("Resend response error: ", error);
      return error;
    }

    return data;
  } catch (e) {
    console.error("Resend API call failed: ", e);
  }
}