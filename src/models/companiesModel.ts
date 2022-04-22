import mongoose from 'mongoose';
import Companies from '../schemas/companiesSchema';

mongoose.connect('mongodb://db:27017/companies');

run();
async function run() {
    try {
        const companies = await Companies.create({
            companies: {
                name: 'Company 1',
                users: 'user1',
                units: {
                    assets: {
                        image: 'image1',
                        name: 'name1',
                        description: 'description1',
                        model: 'model1',
                        owner: 'owner1',
                        status: 'status1',
                        healthLevel: 'healthLevel1',
                    },
                },
            }
        });
        console.log(companies);
    } catch (error) {
        console.log(error.message);
    }
    
}