import Companies from '../schemas/companiesSchema';

const createCompany = async (req, res): Promise<any> => {
  const { name, users, units } = req.body;

  try {
    const company = await Companies.create({
      companies: {
        name,
        users,
        units,
      },
    });
    return res.status(200).json(company);
  } catch (error) {
    return console.log(error.message);
  }
};

const getCompanies =  async (req, res): Promise<any> => {
  try {
    const company = await Companies.find();
    return res.status(200).json(company);
  } catch (error) {
    return console.log(error.message);
  }
}

export default {
  createCompany,
  getCompanies,
};
