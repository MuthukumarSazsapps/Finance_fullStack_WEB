import axiosInstance from './axios';
import { APIRoutes } from 'utils';
import { Customer, CustomerFormFieldTypes } from 'utils/types';

const listAllCustomers = async (SubscriberId: string, BranchId: string) => {
  const response = await axiosInstance
    .post(APIRoutes.customerList, { SubscriberId, BranchId })
    .then(result => result.data)
    .catch(err => {
      console.log('List Api error', err);
    });
  return response ?? [];
};

const getCustomer = async (CustomerId: string) => {
  const response = await axiosInstance
    .post(APIRoutes.customerGet, { CustomerId })
    .then(result => result.data)
    .catch(err => {
      console.log('List Api error', err);
    });
  return response ?? [];
};

const createCustomer = async (
  CreatedBy: string,
  SubscriberId: string,
  CustomerData: CustomerFormFieldTypes,
) => {
  const formData = new FormData();
  formData.append('SubscriberId', SubscriberId);
  formData.append('BranchId', CustomerData.BranchId);
  formData.append('CustomerName', CustomerData.CustomerName);
  formData.append('CustomerFatherName', CustomerData.CustomerFatherName);
  formData.append('CustomerDOB', CustomerData.CustomerDOB);
  formData.append('CustomerGender', CustomerData.CustomerGender);
  formData.append('CustomerAddress', CustomerData.CustomerAddress);
  formData.append('CustomerCity', CustomerData.CustomerCity);
  formData.append('CustomerAADHAAR', CustomerData.CustomerAADHAAR);
  formData.append('CustomerDrivingLicenseNo', CustomerData.CustomerDrivingLicenseNo || '');
  formData.append(
    'CustomerDrivingLicenseExpiryDate',
    CustomerData.CustomerDrivingLicenseExpiryDate || '',
  );
  formData.append('CustomerPAN', CustomerData.CustomerPAN || '');
  formData.append('CustomerPhoneNo', CustomerData.CustomerPhoneNo);
  formData.append('CustomerAlternatePhoneNo', CustomerData.CustomerAlternatePhoneNo || '');
  formData.append('CustomerEmail', CustomerData.CustomerEmail || '');
  formData.append('CustomerPhotoURL', CustomerData.CustomerPhotoURL);
  formData.append('CustomerRating', CustomerData.CustomerRating || '');
  formData.append('CustomerIsBlocked', CustomerData.CustomerIsBlocked.toString());
  formData.append('CustomerIsCurrent', CustomerData.CustomerIsCurrent.toString());
  formData.append('GuarantorName', CustomerData.GuarantorName || '');
  formData.append('GuarantorFatherName', CustomerData.GuarantorFatherName || '');
  formData.append('GuarantorGender', CustomerData.GuarantorGender || '');
  formData.append('GuarantorAddress', CustomerData.GuarantorAddress || '');
  formData.append('GuarantorCity', CustomerData.GuarantorCity || '');
  formData.append('GuarantorPhoneNo', CustomerData.GuarantorPhoneNo || '');
  formData.append('CreatedBy', CreatedBy);
  let blob = await fetch(CustomerData.CustomerPhotoURL).then(r => r.blob());
  const myFile = new File([blob], `${Date.now()}.${blob.type.split('/').pop()}`, {
    type: blob.type,
  });
  formData.append('CustomerPhotoURL', myFile);
  const response = await axiosInstance
    .post(APIRoutes.customerCreate, formData)
    .then(result => result.data)
    .catch(err => {
      console.log('Create Api error', err);
      return;
    });
  return response.message;
};

const updateCustomer = async (
  ModifiedBy: string,
  CustomerId: string,
  CustomerData: CustomerFormFieldTypes,
): Promise<Customer> => {
  const formData = new FormData();
  formData.append('BranchId', CustomerData.BranchId);
  formData.append('CustomerName', CustomerData.CustomerName);
  formData.append('CustomerFatherName', CustomerData.CustomerFatherName);
  formData.append('CustomerDOB', CustomerData.CustomerDOB);
  formData.append('CustomerGender', CustomerData.CustomerGender);
  formData.append('CustomerAddress', CustomerData.CustomerAddress);
  formData.append('CustomerCity', CustomerData.CustomerCity);
  formData.append('CustomerAADHAAR', CustomerData.CustomerAADHAAR);
  formData.append('CustomerDrivingLicenseNo', CustomerData.CustomerDrivingLicenseNo || '');
  formData.append(
    'CustomerDrivingLicenseExpiryDate',
    CustomerData.CustomerDrivingLicenseExpiryDate || '',
  );
  formData.append('CustomerPAN', CustomerData.CustomerPAN || '');
  formData.append('CustomerPhoneNo', CustomerData.CustomerPhoneNo);
  formData.append('CustomerAlternatePhoneNo', CustomerData.CustomerAlternatePhoneNo || '');
  formData.append('CustomerEmail', CustomerData.CustomerEmail || '');
  formData.append('CustomerPhotoURL', CustomerData.CustomerPhotoURL);
  formData.append('CustomerRating', CustomerData.CustomerRating || '');
  formData.append('CustomerIsBlocked', CustomerData.CustomerIsBlocked.toString());
  formData.append('CustomerIsCurrent', CustomerData.CustomerIsCurrent.toString());
  formData.append('GuarantorName', CustomerData.GuarantorName || '');
  formData.append('GuarantorFatherName', CustomerData.GuarantorFatherName || '');
  formData.append('GuarantorGender', CustomerData.GuarantorGender || '');
  formData.append('GuarantorAddress', CustomerData.GuarantorAddress || '');
  formData.append('GuarantorCity', CustomerData.GuarantorCity || '');
  formData.append('GuarantorPhoneNo', CustomerData.GuarantorPhoneNo || '');
  formData.append('ModifiedBy', ModifiedBy);
  let blob = await fetch(CustomerData.CustomerPhotoURL).then(r => r.blob());
  const myFile = new File([blob], `${Date.now()}.${blob.type.split('/').pop()}`, {
    type: blob.type,
  });
  formData.append('CustomerPhotoURL', myFile);
  const response = await axiosInstance
    .put(`${APIRoutes.customerUpdate}/${CustomerId}`, formData)
    .then(result => result.data)
    .catch(err => {
      console.log('Update Api error', err);
      return;
    });
  return response?.message;
};

const deleteCustomer = async (CustomerId: string, ModifiedBy: string) => {
  const response = await axiosInstance
    .delete(`${APIRoutes.customerDelete}/${CustomerId}`, {
      data: {
        ModifiedBy: ModifiedBy,
      },
    })
    .then(result => result.data)
    .catch(err => {
      console.log('Delete Api error', err);
      return;
    });
  return response?.message;
};

export default {
  listAllCustomers,
  getCustomer,
  createCustomer,
  deleteCustomer,
  updateCustomer,
};
