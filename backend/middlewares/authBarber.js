import jwt from "jsonwebtoken";

const authBarber = async (req, res, next) => {
  try {
    const { dtoken } = req.headers;
    if (!dtoken) {
      return res.json({
        success: false,
        message: "Não autorizado",
      });
    }
    const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET);
    req.body.barberId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authBarber;
