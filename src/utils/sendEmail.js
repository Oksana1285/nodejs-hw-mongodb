import nodemailer from 'nodemailer';
import { ENV_VARIANT } from '../constants/constans.js';
import { getEnvVar } from './getEnvVar.js';

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = ENV_VARIANT.BREVO;

const transporter = nodemailer.createTransport({
  host: getEnvVar(SMTP_HOST),
  port: Number(getEnvVar(SMTP_PORT)),
  auth: {
    user: getEnvVar(SMTP_USER),
    pass: getEnvVar(SMTP_PASSWORD),
  },
});

export const sendEmail = async (options) => {
  try {
    return await transporter.sendMail(options);
  } catch (error) {
    console.error('❌ Email send failed:', error);
    throw error;
  }
};
