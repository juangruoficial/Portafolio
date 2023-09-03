import { lists } from "../shared/constMenu";
import { motion } from "framer-motion";
const Menu = () => {
  return (
    <ul className="anchor_nav">
      {Object.keys(lists).map((list, index) => {
        return (
          <li key={index}>
            <a href={lists[list].link}>{lists[list].name}</a>
          </li>
        );
      })}

      <li className="download_cv">
        <motion.a
          whileHover={{
            scale: 1.09,
            background: "linear-gradient(135deg, #FF6B6B 0%, #FFB72B 100%)",
          }}
          whileTap={{ scale: 0.7 }}
          transition={{ duration: 0.3 }}
          href="https://resume.io/r/DhhA0Yt90"
          target="_blank"
        >
          Watch CV
        </motion.a>
      </li>
    </ul>
  );
};
export default Menu;
