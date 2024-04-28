// import { Factory, Seeder } from 'typeorm-seeding';
import { UserEntity } from '../../modules/users/user.entity';

export default class UserSeed implements Seeder {
  public async run(factory: Factory): Promise<any> {
    const tarkhna: UserEntity = new UserEntity();
    tarkhna.id = '5b2d9e22-fd59-49b8-9001-d20670494ed2';
    tarkhna.username = 'tarkhna';
    tarkhna.is_artist = true;
    tarkhna.email = 'tarkhna@gmail.com';
    tarkhna.color = 'blue';
    tarkhna.avatar = null;
    tarkhna.description =
      'I am tarkhna and I am with my 2 churs, Rem and Chizuru';
    tarkhna.created_at = Date.now();
    tarkhna.updated_at = Date.now();

    // const zviad = new UserEntity();
    // zviad.id = 'e31459e4-393b-45c5-a69e-e08177bb1275';
    // zviad.email = 'zviad@lavapi.com';
    // zviad.first_name = 'Zviad';
    // zviad.last_name = 'Gvilava';
    // zviad.created_at = Date.now();
    // zviad.updated_at = Date.now();
    //
    // const beka = new UserEntity();
    // beka.id = 'dc4aab92-85d3-4049-ba8d-cccfd233c098';
    // beka.email = 'beka.gelash@gmail.com';
    // beka.first_name = 'Beka';
    // beka.last_name = 'Gelashvili';
    // beka.created_at = Date.now();
    // beka.updated_at = Date.now();
    //
    // const luka = new UserEntity();
    // luka.id = 'e49e725c-052e-4a9a-9cf8-0fd588cf3085';
    // luka.email = 'luka.jioshvili@lavapi.com';
    // luka.first_name = 'Luka';
    // luka.last_name = 'Jioshvili';
    // luka.created_at = Date.now();
    // luka.updated_at = Date.now();
    //
    // const aleksandre = new UserEntity();
    // aleksandre.id = 'bfa853ea-f60b-4440-bd9d-340ec0b4168f';
    // aleksandre.email = 'aleksandre.ochigava@lavapi.com';
    // aleksandre.first_name = 'Aleksandre';
    // aleksandre.last_name = 'Ochigava';
    // aleksandre.created_at = Date.now();
    // aleksandre.updated_at = Date.now();
    //
    // const giorgi_k = new UserEntity();
    // giorgi_k.id = 'c9e43c4b-236f-43b8-b735-2a4c57242732';
    // giorgi_k.email = 'giorgi.kalatozishvili@lavapi.com';
    // giorgi_k.first_name = 'Giorgi';
    // giorgi_k.last_name = 'Kalatozishvili';
    // giorgi_k.created_at = Date.now();
    // giorgi_k.updated_at = Date.now();
    //
    // const teona = new UserEntity();
    // teona.id = '03e7533e-6a95-4fd7-a69b-caa1a82f520e';
    // teona.email = 'teona@lavapi.com';
    // teona.first_name = 'Teona';
    // teona.last_name = 'Kelly';
    // teona.created_at = Date.now();
    // teona.updated_at = Date.now();

    const users = [tarkhna];

    await Promise.all(
      users.map(async (user) => {
        return await factory(UserEntity)().create(user);
      }),
    );
  }
}
