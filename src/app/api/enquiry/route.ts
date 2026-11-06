import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      company,
      organization,
      productSlug,
      productName,
      sampleType,
      applicationType,
      timeline,
      notes,
      requirement,
    } = body;

    if (!name || (!email && !phone)) {
      return NextResponse.json(
        { error: "Please provide your name and at least an email or phone number." },
        { status: 400 }
      );
    }

    const referenceId = `ORB-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;

    const submissionData = {
      referenceId,
      timestamp: new Date().toISOString(),
      name,
      email: email || "Not provided",
      phone: phone || "Not provided",
      company: company || organization || "Not specified",
      productName: productName || productSlug || "General Instrument Inquiry",
      productSlug: productSlug || "",
      application: sampleType || applicationType || requirement || notes || "",
      timeline: timeline || "Immediate",
    };

    console.log("[API/ENQUIRY] Received RFQ Submission:", submissionData);

    const whatsappMessage = encodeURIComponent(
      `Hello Orbit Technologies, I submitted quotation request #${referenceId} for ${submissionData.productName}. Please share official pricing and technical details.`
    );
    const whatsappUrl = `https://wa.me/918143885547?text=${whatsappMessage}`;

    return NextResponse.json({
      success: true,
      referenceId,
      referenceCode: referenceId,
      message: "Quotation request successfully received by Orbit Technologies.",
      whatsappUrl,
      submission: submissionData,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Failed to process quotation request.";
    console.error("[API/ENQUIRY] Error processing submission:", errorMsg);
    return NextResponse.json(
      { error: "Failed to process quotation request. Please call +91 40 6721 6354." },
      { status: 500 }
    );
  }
}
