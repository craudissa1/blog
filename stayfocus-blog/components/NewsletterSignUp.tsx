'use client'; // Adicionar 'use client' se houver interatividade no futuro (ex: estado para o input)

import React, { useState } from 'react';

const NewsletterSignUp = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de submissão do formulário (pode ser implementada posteriormente)
    console.log('Email submetido:', email);
    alert(`Obrigado por se inscrever com o email: ${email}! (Funcionalidade em desenvolvimento)`);
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Fique por dentro das novidades</h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Assine nossa newsletter e receba dicas exclusivas de produtividade, atualizações do StayFocus e conteúdos especiais.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow px-4 py-3 rounded-l-lg sm:rounded-r-none mb-2 sm:mb-0 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            type="submit"
            className="bg-white text-blue-600 font-medium px-6 py-3 rounded-r-lg sm:rounded-l-none hover:bg-gray-100 transition duration-300"
          >
            Assinar
          </button>
        </form>
        <p className="text-sm opacity-75 mt-4">
          Prometemos não enviar spam. Você pode cancelar a inscrição a qualquer momento.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignUp;