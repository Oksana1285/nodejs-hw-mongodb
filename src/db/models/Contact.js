import { Schema, model } from 'mongoose';

const phoneExp = /^\(\d{3}\) \d{3}-\d{4}$/;

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    match: [phoneExp, 'Invalid phone number format. Use (XXX) XXX-XXXX'],
    required: true,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

const ContactCollection = model('contact', contactSchema);

export default ContactCollection;
