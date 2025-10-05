"use client";
import { useConversation } from '@elevenlabs/react';
import { useCallback } from 'react';

export default function TourPage() {
  const conversation = useConversation({
    onConnect: () => console.log('Conectado'),
    onDisconnect: () => console.log('Desconectado'),
    onMessage: (message) => console.log('Mensaje:', message),
    onError: (error) => console.error('Error:', error),
  });

  const startConversation = useCallback(async () => {
    try {
      // Solicitar permisos de micrófono
      await navigator.mediaDevices.getUserMedia({ audio: true });

      // Iniciar sesión con el agente
      await conversation.startSession({
        agentId: process.env.NEXT_PUBLIC_AGENT_ID,
      });
    } catch (error) {
      console.error('Error al iniciar conversación:', error);
    }
  }, [conversation]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center justify-center gap-8 px-8">
      {/* Título */}
      <h1 className="text-5xl md:text-6xl text-white font-bold text-center">
        Tour Virtual del Universo 🚀
      </h1>

      {/* Botones de control */}
      <div className="flex gap-4">
        <button
          onClick={startConversation}
          disabled={conversation.status === 'connected'}
          className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Iniciar Conversación
        </button>
        <button
          onClick={stopConversation}
          disabled={conversation.status !== 'connected'}
          className="px-8 py-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors duration-200 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Terminar Conversación
        </button>
      </div>

      {/* Estado */}
      <div className="text-center">
        <p className="text-xl text-white">
          Estado: <span className="font-bold">{conversation.status === 'connected' ? 'Conectado ✅' : 'Desconectado ❌'}</span>
        </p>
        {conversation.isSpeaking && (
          <p className="text-lg text-blue-400 mt-2 animate-pulse">
            🗣️ El agente está hablando...
          </p>
        )}
      </div>
    </div>
  );
}
