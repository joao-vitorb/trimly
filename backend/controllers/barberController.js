import barberModel from "../models/barberModel.js";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointmentModel.js";

const changeAvailability = async (req, res) => {
  try {
    const { barberId } = req.body;
    const barberData = await barberModel.findById(barberId);
    await barberModel.findByIdAndUpdate(barberId, {
      available: !barberData.available,
    });
    res.json({ success: true, message: "Disponibilidade alterada" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const barberList = async (req, res) => {
  try {
    const barbers = await barberModel.find({}).select(["-password", "-email"]);

    res.json({ success: true, barbers });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const loginBarber = async (req, res) => {
  try {
    const { email, password } = req.body;
    const barber = await barberModel.findOne({ email });

    if (!barber) {
      return res.json({ success: false, message: "Credenciais inválidas" });
    }

    const isMatch = await bycrypt.compare(password, barber.password);
    if (isMatch) {
      const token = jwt.sign({ id: barber._id }, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Credenciais inválidas" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const appointmentsBarber = async (req, res) => {
  try {
    const { barberId } = req.body;
    const appointments = await appointmentModel.find({ barberId });

    res.json({ success: true, appointments });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const appointmentComplete = async (req, res) => {
  try {
    const { barberId, appointmentId } = req.body;
    const appointmentData = await appointmentModel.findById(appointmentId);

    if (appointmentData && appointmentData.barberId === barberId) {
      await appointmentModel.findByIdAndUpdate(appointmentId, {
        isCompleted: true,
      });
      return res.json({ success: true, message: "Agendamento Concluído" });
    } else {
      return res.json({ success: false, message: "Erro ao Agendar" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const appointmentCancel = async (req, res) => {
  try {
    const { barberId, appointmentId } = req.body;
    const appointmentData = await appointmentModel.findById(appointmentId);

    if (appointmentData && appointmentData.barberId === barberId) {
      await appointmentModel.findByIdAndUpdate(appointmentId, {
        cancelled: true,
      });
      return res.json({ success: true, message: "Agendamento Cancelado" });
    } else {
      return res.json({ success: false, message: "Erro no Cancelamento" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const barberDashboard = async (req, res) => {
  try {
    const { barberId } = req.body;
    const appointments = await appointmentModel.find({ barberId });

    let earnings = 0;

    appointments.map((item) => {
      if (item.isCompleted || item.payment) {
        earnings += item.amount;
      }
    });

    let patients = [];

    appointments.map((item) => {
      if (!patients.includes(item.userId)) {
        patients.push(item.userId);
      }
    });

    const dashData = {
      earnings,
      appointments: appointments.length,
      patients: patients.length,
      latestAppointments: appointments.reverse().slice(0, 5),
    };

    res.json({ success: true, dashData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const barberProfile = async (req, res) => {
  try {
    const { barberId } = req.body;
    const profileData = await barberModel.findById(barberId).select("-password");

    res.json({ success: true, profileData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const updateBarberProfile = async (req, res) => {
  try {
    const { barberId } = req.body;

    const {
      name,
      about,
      degree,
      speciality,
      fees,
      address,
      available,
      experience,
    } = req.body;

    const updateData = {};

    if (name !== undefined) updateData.name = name;
    if (about !== undefined) updateData.about = about;
    if (degree !== undefined) updateData.degree = degree;
    if (speciality !== undefined) updateData.speciality = speciality;
    if (fees !== undefined) updateData.fees = fees;
    if (address !== undefined) updateData.address = address;
    if (available !== undefined) updateData.available = available;
    if (experience !== undefined) updateData.experience = experience;

    await barberModel.findByIdAndUpdate(barberId, updateData);

    res.json({ success: true, message: "Perfil Atualizado" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  changeAvailability,
  barberList,
  loginBarber,
  appointmentsBarber,
  appointmentCancel,
  appointmentComplete,
  barberDashboard,
  barberProfile,
  updateBarberProfile,
};
