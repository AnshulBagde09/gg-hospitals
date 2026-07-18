import { motion } from "framer-motion";

function StatCard({
  title,
  value,
  color,
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-md p-6"
    >

      <p className="text-gray-500">
        {title}
      </p>

      <h2 className={`text-4xl font-bold mt-4 ${color}`}>
        {value}
      </h2>

    </motion.div>
  );
}

export default StatCard;