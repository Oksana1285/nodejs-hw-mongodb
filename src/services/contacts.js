import { ContactCollection } from '../db/models/Contact.js';
import { PAGINATION_DEFAULT_DATA, SORT_LIST } from '../constants/constans.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllContacts = async (
  {
    page = PAGINATION_DEFAULT_DATA.PAGE,
    perPage = PAGINATION_DEFAULT_DATA.PER_PAGE,
    sortOrder = SORT_LIST.ASC,
    sortBy = '_id',
    filter = {},
  },
  userId,
) => {
  const limit = perPage;
  const skip = page > 0 ? (page - 1) * perPage : 0;

  const queryFilter = ContactCollection.find({ userId });
  if (filter.type) {
    queryFilter.where('contactType').equals(filter.type);
  }
  if (typeof filter.isFavourite !== 'undefined') {
    queryFilter.where('isFavorite').equals(filter.isFavorite);
  }
  const [contactsCount, contacts] = await Promise.all([
    ContactCollection.find().merge(queryFilter).countDocuments(),
    queryFilter
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);

  const paginationData = calculatePaginationData(contactsCount, page, perPage);
  return { data: contacts, ...paginationData };
};

export const getContactById = async (contactId, userId) => {
  const contact = await ContactCollection.findOne({
    _id: contactId,
    userId: userId,
  });
  return contact;
};

export const createContact = async (payload) => {
  const contact = await ContactCollection.create(payload);
  return contact;
};

export const updateContact = async (
  contactId,
  userId,
  payload,
  options = {},
) => {
  const result = await ContactCollection.findOneAndUpdate(
    { _id: contactId, userId },
    payload,
    { new: true, includeResultMetadata: true, ...options },
  );

  if (!result || !result.value) return null;

  return {
    data: result.value,
    isNew: Boolean(result?.lastErrorObject?.upserted),
  };
};

export const deleteContact = async (contactId, userId) => {
  const contact = await ContactCollection.findOneAndDelete({
    _id: contactId,
    userId,
  });

  return contact;
};
