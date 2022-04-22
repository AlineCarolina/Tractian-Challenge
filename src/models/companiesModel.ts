import mongoose from 'mongoose';
import { CompaniesInterface } from '../interfaces/companiesInterface';
import companiesSchema from '../schemas/companiesSchema';

const Companies = mongoose.model<CompaniesInterface>('Company', companiesSchema.companiesSchema);

async function getCompanies() {
  const company = await Companies.find();
  return company;
}

async function createCompany({ razaoSocial, cnpj, endereco, telefone }){
  const company = await Companies.create({ razaoSocial, cnpj, endereco, telefone });
  return company;
}

async function updateCompany({ razaoSocial, cnpj, endereco, telefone }, id){
  const company = await Companies.findByIdAndUpdate(id, { razaoSocial, cnpj, endereco, telefone });
  return company;
}

async function deleteCompany(id){
  const company = await Companies.findOneAndDelete({ _id: id });
  return company;
}

export default {
  getCompanies,
  createCompany,
  updateCompany,
  deleteCompany,
};
