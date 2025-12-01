import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedBarbers = ({ speciality, barberId }) => {
  const { barbers } = useContext(AppContext);
  const navigate = useNavigate();

  const [relBarbers, setRelBarbers] = useState([]);

  useEffect(() => {
    if (barbers.length > 0) {
      let sameSpec = barbers.filter(
        (barber) => barber.speciality === speciality && barber._id !== barberId
      );

      if (sameSpec.length < 5) {
        const others = barbers.filter(
          (barber) =>
            barber._id !== barberId &&
            barber.speciality !== speciality &&
            !sameSpec.some((b) => b._id === barber._id)
        );

        sameSpec = [...sameSpec, ...others].slice(0, 5);
      }

      setRelBarbers(sameSpec);
    }
  }, [barbers, speciality, barberId]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Outros Barbeiros</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Navegue pela nossa extensa lista de barbeiros confiáveis.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {relBarbers.slice(0, 5).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="border border-yellow-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
          >
            <img className="bg-yellow-50" src={item.image} alt="" />
            <div className="p-4">
              <div
                className={`flex items-center gap-2 text-sm text-center ${
                  item.available ? "text-green-500" : "text-gray-500"
                }`}
              >
                <p
                  className={`w-2 h-2 ${
                    item.available ? "bg-green-500" : "bg-gray-500"
                  } rounded-full`}
                ></p>
                <p>{item.available ? "Disponível" : "Indisponível"}</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm ">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/barbers");
          scrollTo(0, 0);
        }}
        className="bg-yellow-50 text-gray-600 px-12 py-3 rounded-full mt-10"
      >
        Ver mais
      </button>
    </div>
  );
};

export default RelatedBarbers;
