import { EmailTemplate } from "@/components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const requestData = await request.json();

    if (!requestData.to) {
      return NextResponse.json(
        { error: "Recipient email(s) are required and must be an array" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Acme <chenterphai61@sender.rocketter.net>",
      to: [requestData.to],
      subject: "Hi Kemleap, You have successfully tested email sender!",
      react: await EmailTemplate({
        firstName: requestData.name || "John",
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
