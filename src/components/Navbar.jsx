import { motion, useScroll, useTransform } from "framer-motion";

export default function SideNav() {
  const { scrollY } = useScroll();

  const navOpacity = useTransform(scrollY, [0, 600], [0, 1]);

  const translateX = useTransform(scrollY, [0, 400], [-20, 0]);

  const menuItems = ["Contact", "Skills", "Projects"];

  return (
    <motion.nav
      style={{ opacity: navOpacity, x: translateX }}
      className="hidden lg:flex fixed left-0 top-0 h-screen w-32 flex flex-col ml-4 justify-start pt-32 items-center z-50 border-r border-gray-100 bg-white/50 backdrop-blur-sm"
    >
      <ul className="flex flex-col gap-12">
        {menuItems.map((item, idx) => (
          <li key={item} className="relative group cursor-pointer">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 group-hover:text-blue-600 transition-colors vertical-text">
              {item}
            </span>

            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
