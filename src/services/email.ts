import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_ewg1aam';
const EMAILJS_TEMPLATE_ID = 'template_olvh0so';
const EMAILJS_PUBLIC_KEY = 'OIC5-oVQBmTxGdcpR';

export const sendEmail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_name: 'Rishabh Gupta',
      },
      EMAILJS_PUBLIC_KEY
    );
    return response;
  } catch (error) {
    throw error;
  }
};