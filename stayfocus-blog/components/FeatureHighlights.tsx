import Link from 'next/link';

// Definição do tipo para cada item de destaque
interface FeatureItemProps {
  iconClass: string; // Classe do ícone Font Awesome (ex: "fas fa-brain")
  title: string;
  description: string;
  link: string;
  iconBgColor: string; // Cor de fundo do ícone (ex: "bg-blue-100")
  iconTextColor: string; // Cor do texto do ícone (ex: "text-blue-600")
}

const FeatureItem: React.FC<FeatureItemProps> = ({ iconClass, title, description, link, iconBgColor, iconTextColor }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
      <div className={`rounded-full w-12 h-12 flex items-center justify-center mb-4 ${iconBgColor} ${iconTextColor}`}>
        <i className={`${iconClass} text-xl`}></i>
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <Link href={link} legacyBehavior>
        <a className="block mt-4 text-blue-600 font-medium hover:underline text-sm">Saiba mais →</a>
      </Link>
    </div>
  );
};

const features: FeatureItemProps[] = [
  {
    iconClass: "fas fa-brain",
    title: "Dashboard Inteligente",
    description: "Visualize e gerencie seu dia através de blocos de tempo intuitivos, lista de prioridades e lembretes estratégicos.",
    link: "/features/dashboard", // Ajustar o link conforme necessário
    iconBgColor: "bg-blue-100",
    iconTextColor: "text-blue-600",
  },
  {
    iconClass: "fas fa-book-open-reader", // Ícone mais apropriado para concursos
    title: "Módulo de Concursos",
    description: "Gerencie editais, crie bancos de questões inteligentes e realize simulados personalizados para maximizar seu desempenho.",
    link: "/features/concursos", // Ajustar o link
    iconBgColor: "bg-purple-100",
    iconTextColor: "text-purple-600",
  },
  {
    iconClass: "fas fa-bullseye",
    title: "Hiperfocos",
    description: "Transforme interesses em projetos estruturados e mantenha o foco intenso com nosso sistema de alternância de contexto.",
    link: "/features/hiperfocos", // Ajustar o link
    iconBgColor: "bg-green-100",
    iconTextColor: "text-green-600",
  },
];

const FeatureHighlights = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Funcionalidades Principais</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça os módulos que fazem do StayFocus a plataforma definitiva para produtividade e estudos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureItem
              key={feature.title}
              iconClass={feature.iconClass}
              title={feature.title}
              description={feature.description}
              link={feature.link}
              iconBgColor={feature.iconBgColor}
              iconTextColor={feature.iconTextColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;