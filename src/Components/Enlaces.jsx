import { motion } from "framer-motion";

const CardGeneral = ({ color, imagen, titulo, texto }) => {
  return (
    <>
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 1 }}
      className="flex flex-col text-center py-5 w-[350px]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`fill-current ${color} m-auto`}
        height="60"
        viewBox="0 96 960 960"
        width="60"
      >
        <path d={`${imagen}`} />
      </svg>
      <h3 className="text-3xl font-bold">{titulo}</h3>
      <p className="text-xl font-extralight">{texto}</p>
      <a href="#" className="waves-effect waves-light btn mx-auto mt-4">Saber mas...</a>       
    </motion.div>
    </>
  );
};
export default CardGeneral;
