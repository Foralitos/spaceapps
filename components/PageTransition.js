"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PageTransition = ({ children, href }) => {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = () => {
    setIsTransitioning(true);

    // Espera a que termine la animación antes de navegar
    setTimeout(() => {
      router.push(href);
    }, 1200);
  };

  return (
    <>
      <div onClick={handleClick}>
        {children}
      </div>

      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1]
            }}
            style={{
              originY: 0,
            }}
            className="fixed inset-0 bg-gradient-to-b from-black via-gray-900 to-black z-50 flex items-center justify-center"
          >
            {/* Contenido de la transición */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
              }}
              className="text-center"
            >
              {/* Loader animado */}
              <motion.div
                className="w-20 h-20 mx-auto mb-6 border-4 border-white/20 border-t-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-2xl text-white font-semibold"
              >
                Preparando tu viaje espacial...
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-gray-400 mt-2"
              >
                ✨ Cargando universo
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PageTransition;
