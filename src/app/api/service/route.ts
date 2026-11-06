import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      contactPerson,
      name,
      email,
      phone,
      company,
      instrumentModel,
      serialNumber,
      serviceType,
      city,
      issueDescription,
      urgency,
    } = body;

    const personName = contactPerson || name;

    if (!personName || (!email && !phone)) {
      return NextResponse.json(
        { error: "Please provide a contact person name and phone number or email." },
        { status: 400 }
      );
    }

    const ticketNumber = `ORB-SRV-${Math.floor(100000 + Math.random() * 900000)}`;

    const serviceTicket = {
      ticketNumber,
      timestamp: new Date().toISOString(),
      contactPerson: personName,
      email: email || "Not provided",
      phone: phone || "Not provided",
      company: company || "Not specified",
      city: city || "Not specified",
      instrumentModel: instrumentModel || "Not specified",
      serialNumber: serialNumber || "Not specified",
      serviceType: serviceType || "Preventive Maintenance / Repair",
      issueDescription: issueDescription || "General service booking",
      urgency: urgency || "Standard",
    };

    console.log("[API/SERVICE] Logged Service Ticket:", serviceTicket);

    const whatsappMessage = encodeURIComponent(
      `Hello Orbit Service Desk, I have lodged Service Ticket #${ticketNumber} for model ${serviceTicket.instrumentModel} (Serial: ${serviceTicket.serialNumber}). Urgent support required.`
    );
    const whatsappUrl = `https://wa.me/918143885547?text=${whatsappMessage}`;

    return NextResponse.json({
      success: true,
      ticketNumber,
      message: "Service request registered successfully with Orbit Service Care.",
      whatsappUrl,
      ticket: serviceTicket,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Failed to process service complaint.";
    console.error("[API/SERVICE] Error processing service complaint:", errorMsg);
    return NextResponse.json(
      { error: "Failed to submit service ticket. Please call +91 81438 85547 directly." },
      { status: 500 }
    );
  }
}
