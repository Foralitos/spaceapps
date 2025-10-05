"use client";
import { motion } from "framer-motion";
import PageTransition from "./PageTransition";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Gradiente radial de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-transparent to-transparent pointer-events-none" />

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center justify-center gap-8 py-20">

        {/* Título principal con animación */}
        <motion.h1
          className="font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-tight max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Explora el universo con un{" "}
          <span className="text-white">Recorrido Virtual</span>
        </motion.h1>

        {/* Subtítulo con animación */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Descubre planetas, estrellas y galaxias. Sin necesidad de telescopio.
        </motion.p>

        {/* Botones con animación */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {/* Botón principal con transición */}
          <PageTransition href="/tour">
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-base cursor-pointer">
              Iniciar recorrido virtual
            </button>
          </PageTransition>

          {/* Botón secundario */}
          <button className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/20 hover:border-white/40 transition-colors duration-200 text-base">
            Ver video
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
