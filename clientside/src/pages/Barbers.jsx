import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Barbers = () => {
  const { speciality } = useParams();
  const [filterBarber, setFilterBarber] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const navigate = useNavigate();

  const { barbers } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterBarber(barbers.filter((barber) => barber.speciality === speciality));
    } else {
      setFilterBarber(barbers);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [barbers, speciality]);

  return (
    <div>
      <p className="text-gray-600">Explore nossa lista de profissionais qualificados.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilter ? "bg-[#EFBF04] text-white" : ""
          }`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filters
        </button>
        <div
          className={`flex-col gap-4 text-sm text-gray-600 ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          <p
            onClick={() =>
              speciality === "Corte"
                ? navigate("/barbers")
                : navigate("/barbers/Corte")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Corte"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Corte
          </p>
          <p
            onClick={() =>
              speciality === "Barba"
                ? navigate("/barbers")
                : navigate("/barbers/Barba")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Barba" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Barba
          </p>
          <p
            onClick={() =>
              speciality === "Sobrancelha"
                ? navigate("/barbers")
                : navigate("/barbers/Sobrancelha")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Sobrancelha" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Sobrancelha
          </p>
          <p
            onClick={() =>
              speciality === "Infantil"
                ? navigate("/barbers")
                : navigate("/barbers/Infantil")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Infantil" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Infantil
          </p>
          <p
            onClick={() =>
              speciality === "Coloração"
                ? navigate("/barbers")
                : navigate("/barbers/Coloração")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Coloração" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Coloração
          </p>
          <p
            onClick={() =>
              speciality === "Hidratação"
                ? navigate("/barbers")
                : navigate("/barbers/Hidratação")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Hidratação"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Hidratação
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterBarber.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
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
      </div>
    </div>
  );
};

export default Barbers;
