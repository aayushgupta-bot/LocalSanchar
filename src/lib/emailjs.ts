import emailjs from "@emailjs/browser";

export const EMAILJS_CONFIG = {
  serviceId: "service_h84z27s",
  templateId: "template_16tmw1b",
  publicKey: "sgaN_-2lXoST_SGR3",
};

export interface EnquiryPayload {
  name: string;
  businessName: string;
  businessCategory: string;
  preferredPackage: string;
  phone: string;
  email?: string;
  message?: string;
}

export async function sendEnquiryEmail(payload: EnquiryPayload) {
  const templateParams = {
    // Exact requested fields & standard variations
    name: payload.name,
    from_name: payload.name,
    user_name: payload.name,

    business_name: payload.businessName,
    businessName: payload.businessName,

    category: payload.businessCategory,
    businessCategory: payload.businessCategory,

    package: payload.preferredPackage,
    preferredPackage: payload.preferredPackage,

    phone: payload.phone,
    phone_number: payload.phone,
    phoneNumber: payload.phone,

    email: payload.email || "Not provided",
    user_email: payload.email || "Not provided",
    reply_to: payload.email || "",

    message: payload.message || "Not provided",
    notes: payload.message || "Not provided",
    offer_notes: payload.message || "Not provided",
    campaign_notes: payload.message || "Not provided",
  };

  return emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    templateParams,
    EMAILJS_CONFIG.publicKey
  );
}
