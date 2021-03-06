import companiesService from "../services/companiesService";

const getCompanies =  async (_req, res): Promise<any> => {
  try {
    const company = await companiesService.getCompanies();

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }
    return res.status(200).json(company);
  } catch (error) {
    return console.log(error.message);
  }
}

const createCompany = async (req, res): Promise<any> => {
  const { razaoSocial, cnpj, endereco, telefone } = req.body;

  try {
    const company = await companiesService.createCompany({ razaoSocial, cnpj, endereco, telefone });
    return res.status(200).json(company);
  } catch (error) {
    return console.log(error.message);
  }
};

const updateCompany = async (req, res): Promise<any> => {
  const { razaoSocial, cnpj, endereco, telefone } = req.body;
  const { id } = req.params;

  try {
    const company = await companiesService.updateCompany({ razaoSocial, cnpj, endereco, telefone }, id);
    return res.status(200).json(company);
  } catch (error) {
    return console.log(error.message);
  }
};

const deleteCompany = async (req, res): Promise<any> => {
  const { id } = req.params;

  try {
    const company = await companiesService.deleteCompany(id);
    return res.status(200).json(company);
  } catch (error) {
    return console.log(error.message);
  }
};


export default {
  createCompany,
  getCompanies,
  updateCompany,
  deleteCompany,
};
