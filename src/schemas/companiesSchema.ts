import { Schema } from 'mongoose';
import { CompaniesInterface } from '../interfaces/companiesInterface';

const companiesSchema = new Schema<CompaniesInterface>({
  razaoSocial: String,
  cnpj: String,
  endereco: String,
  telefone: String,
});

export default {
  companiesSchema,
};
