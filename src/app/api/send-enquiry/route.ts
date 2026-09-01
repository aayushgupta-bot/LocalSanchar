import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      businessName,
      businessCategory,
      preferredPackage,
      phone,
      email,
      message,
    } = body;

    // Validate required fields
    if (!name || !businessName || !phone) {
      return NextResponse.json(
        { error: "Name, Business Name, and Phone Number are required." },
        { status: 400 }
      );
    }

    const recipient = "sancharlocal@gmail.com";

    // Clean data representation
    const formattedEmail = email && email.trim() ? email.trim() : "Not provided";
    const formattedMessage = message && message.trim() ? message.trim() : "No additional notes provided";
    const formattedCategory = businessCategory || "Not specified";
    const formattedPackage = preferredPackage || "Not specified";

    const { data, error } = await resend.emails.send({
      from: "Local Sanchar <onboarding@resend.dev>",
      to: [recipient],
      replyTo: email && email.includes("@") ? email : undefined,
      subject: `🚨 New Campaign Inquiry: ${businessName} (${name})`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #051326; color: #ffffff; padding: 24px; margin: 0; }
              .container { max-width: 600px; margin: 0 auto; background: #0B213F; border-radius: 16px; border: 1px solid #C9A44C; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
              .header { background: linear-gradient(135deg, #071A33 0%, #123B6D 100%); padding: 24px; text-align: center; border-bottom: 2px solid #C9A44C; }
              .header h1 { margin: 0; color: #F5E5A4; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; }
              .header p { margin: 6px 0 0 0; color: #94a3b8; font-size: 13px; }
              .content { padding: 28px; }
              .badge { display: inline-block; background-color: rgba(201, 164, 76, 0.15); color: #E2C76B; border: 1px solid rgba(201, 164, 76, 0.4); padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 20px; }
              .field-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
              .field-table tr { border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
              .field-label { padding: 12px 8px 12px 0; color: #94a3b8; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; width: 40%; vertical-align: top; }
              .field-value { padding: 12px 0 12px 8px; color: #ffffff; font-size: 14px; font-weight: 500; }
              .highlight { color: #F5E5A4; font-weight: 700; font-size: 15px; }
              .notes-box { margin-top: 20px; background-color: #07162c; border-left: 3px solid #C9A44C; padding: 14px 18px; border-radius: 0 8px 8px 0; }
              .notes-title { font-size: 12px; font-weight: 700; color: #C9A44C; text-transform: uppercase; margin-bottom: 6px; }
              .notes-content { font-size: 14px; color: #e2e8f0; line-height: 1.5; white-space: pre-wrap; }
              .action-bar { margin-top: 28px; text-align: center; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.1); }
              .action-btn { display: inline-block; background: #25D366; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; font-size: 14px; margin: 4px; }
              .call-btn { display: inline-block; background: #C9A44C; color: #071A33; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; font-size: 14px; margin: 4px; }
              .footer { background: #051326; padding: 16px; text-align: center; font-size: 12px; color: #64748b; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Local Sanchar</h1>
                <p>New Campaign Lead Generated from Website</p>
              </div>
              <div class="content">
                <span class="badge">New Lead Alert</span>
                <table class="field-table">
                  <tr>
                    <td class="field-label">YOUR NAME:</td>
                    <td class="field-value highlight">${name}</td>
                  </tr>
                  <tr>
                    <td class="field-label">BUSINESS NAME:</td>
                    <td class="field-value highlight">${businessName}</td>
                  </tr>
                  <tr>
                    <td class="field-label">CATEGORY:</td>
                    <td class="field-value">${formattedCategory}</td>
                  </tr>
                  <tr>
                    <td class="field-label">PACKAGE:</td>
                    <td class="field-value"><strong style="color: #4ade80;">${formattedPackage}</strong></td>
                  </tr>
                  <tr>
                    <td class="field-label">PHONE NUMBER:</td>
                    <td class="field-value"><a href="tel:${phone}" style="color: #38bdf8; text-decoration: none; font-weight: 700;">${phone}</a></td>
                  </tr>
                  <tr>
                    <td class="field-label">EMAIL ADDRESS:</td>
                    <td class="field-value">${formattedEmail !== "Not provided" ? `<a href="mailto:${formattedEmail}" style="color: #38bdf8; text-decoration: none;">${formattedEmail}</a>` : '<span style="color: #64748b;">Not provided</span>'}</td>
                  </tr>
                </table>

                <div class="notes-box">
                  <div class="notes-title">OFFER / CAMPAIGN NOTES:</div>
                  <div class="notes-content">${formattedMessage}</div>
                </div>

                <div class="action-bar">
                  <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(name)},%20thank%20you%20for%20contacting%20Local%20Sanchar%20regarding%20${encodeURIComponent(businessName)}!" class="action-btn">💬 Chat on WhatsApp</a>
                  <a href="tel:${phone}" class="call-btn">📞 Call Lead</a>
                </div>
              </div>
              <div class="footer">
                Received via Local Sanchar Website Form • ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Campaign Inquiry Received!

YOUR NAME: ${name}
BUSINESS NAME: ${businessName}
CATEGORY: ${formattedCategory}
PACKAGE: ${formattedPackage}
PHONE NUMBER: ${phone}
EMAIL ADDRESS: ${formattedEmail}

OFFER / CAMPAIGN NOTES:
${formattedMessage}

Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err: any) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to process enquiry." },
      { status: 500 }
    );
  }
}
