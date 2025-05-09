import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">
              Transforme seu <span className="text-blue-600">tempo</span> em <span className="text-purple-600">resultados</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              StayFocus é uma plataforma completa que reúne as melhores técnicas e ferramentas de produtividade, gestão de tempo e estudos em uma interface intuitiva e personalizada.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/register" legacyBehavior>
                <a className="btn-primary rounded-full px-8 py-3 font-medium text-white">Experimente Grátis</a>
              </Link>
              <Link href="/about" legacyBehavior>
                <a className="bg-white text-gray-800 rounded-full px-8 py-3 font-medium border border-gray-300 hover:border-gray-400 transition">Saiba Mais</a>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Idealmente, usar next/image para otimização, mas o placeholder do protótipo é uma URL externa.
                Para este exemplo, usaremos um placeholder local ou um componente Image se a imagem estiver em /public */}
            <Image
              src="https://via.placeholder.com/600x400.png?text=placeholder-hero.jpg" // Substituir por uma imagem real em public/images
              alt="StayFocus Dashboard"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
              priority // Marcar como priority se for LCP (Largest Contentful Paint)
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;