import companiesModel from "../models/companiesModel";

const getCompanies = async () => {
  const companies = await companiesModel.getCompanies();
  return companies;
};

const createCompany = async ({ razaoSocial, cnpj, endereco, telefone }) => {
  const company = await companiesModel.createCompany({ razaoSocial, cnpj, endereco, telefone });
  return company;
};

const updateCompany = async ({ razaoSocial, cnpj, endereco, telefone }, id) => {
  const company = await companiesModel.updateCompany({ razaoSocial, cnpj, endereco, telefone }, id);
  return company;
};

const deleteCompany = async (id) => {
  const company = await companiesModel.deleteCompany(id);
  return company;
};

export default {
  getCompanies,
  createCompany,
  updateCompany,
  deleteCompany,
}