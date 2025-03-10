import React from "react";
// import Paginated from "../Paginated/Paginated";
import { useState } from "react";
import { getMascotas } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PetCard from "../PetCard/PetCard";

export default function Home() {
  const mascotas = useSelector((state) => state.mascotas);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  //Guardame el estado guardame cuantas Mascotas guardo por pagina, en este caso 8.
  const [petsPerPage, setPetsPerPage] = useState(8);
  //El índice de la ultima Mascota por página.
  const indexOfLastPet = currentPage * petsPerPage;
  //El índice de la primera Mascota por página
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  //Se va guardando las mascotas por pagina
  /* const currentPet = Array.isArray(allPets) 
 ? allPets.slice(indexOfFirstPets, indexOfLastPets) 
 :[allPets];*/

  useEffect(() => {
    dispatch(getMascotas());
  }, []);

  return (
    <div className="flex h-screen flex-col ">
      {console.log(mascotas)}
      <header className="m-0 h-[10%] w-screen bg-white p-0">
        {/* <NavBar /> */}
      </header>
      <div className="m-0 h-full w-screen  flex  bg-white p-0">
        {/* <section className="m-0 h-[100%] w-[20%] bg-gray-300 p-0">
          Ordenamiento
        </section> */}
        <section className="m-0 h-[100%]  w-screen bg-white p-0 flex flex-grow items-center justify-center">
          {/* Cards */}
          {/* {pets.map((pet) => ( */}
          <div className="bg-white w-[90%] h-[90%] ">
            <div className="flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-20">
                {mascotas.map((mascota) => {
                  return (
                    <div>
                      <PetCard
                        key={mascota.id}
                        nombre={mascota.nombre}
                        edad={mascota.edad}
                        sexo={mascota.sexo}
                        descripcion={mascota.descripcion}
                        foto={mascota.foto}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="pt-[20px] flex justify-center">
                {/* <Pagination total={10} initialPage={1} /> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    /*<div className="w-screen h-screen flex flex-row">
      {console.log(mascotas)}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-20">
        {mascotas.map((m) => {
        <div>
          <PetCard
            key={m.id}
            nombre={m.nombre}
            edad={m.edad}
            sexo={m.sexo}
            descripcion={m.descripcion}
            foto={m.foto}
          />
          ;
        </div>;
      })}
        <PetCard
          key={mascotas.id}
          nombre={mascotas.nombre}
          edad={mascotas.edad}
          sexo={mascotas.sexo}
          descripcion={mascotas.descripcion}
          foto={mascotas.foto}
        />
      </div>
      <section className="h-screen w-screen">
        <h1>Hola este es mi HOME</h1>
      </section>
    </div>*/
  );
}
