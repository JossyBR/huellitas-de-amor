const { Mascota, Especie } = require("../db");
const { Op } = require("sequelize");

const postPetById = async ({
  nombre,
  edad,
  sexo,
  descripcion,
  foto,
  tamano,
  raza,
  peso,
  casaid,
  especie,
}) => {
  try {
    if (
      !nombre ||
      !edad ||
      !sexo ||
      !descripcion ||
      !foto ||
      !tamano ||
      !raza ||
      !peso ||
      !especie
    ) {
      return { status: 401, message: "Faltan datos" };
    }

    const createPet = await Mascota.create({
      nombre,
      edad,
      sexo,
      descripcion,
      foto,
      tamano,
      raza,
      peso,
    });

    //const mascEsp = await Especie.findAll({where: {especie: {[Op.in]:especie}}});

    let mascEsp = await Especie.findOne({ where: { especie } }); // Buscar la especie
    // await createPet.setEspecie(mascEsp);

    if (!mascEsp) {
      mascEsp = await Especie.create({ especie }); // Crear la especie si no existe
    }

    await createPet.setEspecie(mascEsp);
    await createPet.setCasaDeAdopcion(casaid);
    return createPet;

    //Llaves foraneas
    /* await createPet.setGenres(genres);
    await createPet.setPlatforms(platforms); */
    return createPet;
  } catch (error) {
    throw { error: error?.status, message: error?.message };
  }
};
module.exports = postPetById;
