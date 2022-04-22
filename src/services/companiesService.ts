import companiesModel from "../models/companiesModel";

const getCompanies = async () => {
  const companies = await companiesModel.getCompanies();
  return companies;
};

const createCompany = async ({ razaoSocial, cnpj, endereco, telefone }) => {
  const company = await companiesModel.createCompany({ razaoSocial, cnpj, endereco, telefone });
  return company;
}

export default {
  getCompanies,
  createCompany,
}