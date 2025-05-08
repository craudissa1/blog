# Mergulhe nas Funcionalidades que Tornam o StayFocus seu Aliado na Produtividade

O StayFocus se destaca no mercado de aplicações de produtividade não apenas por sua abrangência, mas principalmente pela forma como suas funcionalidades foram cuidadosamente projetadas para trabalhar em harmonia. Neste post, vamos explorar em detalhes as funcionalidades centrais que formam a espinha dorsal da plataforma.

## Dashboard Intuitivo: Seu Dia em uma Única Tela

![Dashboard do StayFocus](https://api.placeholder.com/800/400)

O dashboard do StayFocus representa uma nova abordagem para a visualização e gerenciamento do seu dia. Vamos analisar seus componentes principais:

### Painel do Dia: Blocos de Tempo Visuais

Diferente de calendários tradicionais, o Painel do Dia organiza seu tempo em blocos interativos que podem ser facilmente:
- Adicionados com apenas dois cliques
- Categorizados por cores para identificação visual rápida
- Editados ou reposicionados com arrastar e soltar
- Ajustados conforme seu dia se desenvolve

Este sistema visual proporciona uma compreensão imediata de como seu tempo está distribuído, permitindo identificar períodos subutilizados ou sobrecarregados.

### Lista de Prioridades: O Poder da Limitação

A ciência da produtividade comprova que estabelecer muitas prioridades é o mesmo que não ter nenhuma. Por isso, o StayFocus deliberadamente limita suas prioridades diárias a apenas três itens:

1. As prioridades podem ser gerais ou específicas para concursos
2. Cada item pode ser marcado como concluído, editado ou reprogramado
3. Um histórico de prioridades anteriores permite analisar padrões e progressos

Esta abordagem minimalista força a reflexão sobre o que realmente importa, eliminando a paralisia por análise que frequentemente acompanha listas extensas de tarefas.

### Elementos de Contexto do Dashboard

Complementando as ferramentas principais, o dashboard incorpora elementos contextuais que enriquecem sua experiência:

- **ChecklistMedicamentos**: Agrupa automaticamente medicamentos diários em categorias relevantes (Anfetaminas, Antidepressivos, Suplementos, Outros) baseando-se em seu nome ou observações
- **LembretePausas**: Implementa o método Pomodoro com ciclos padrão de 25/5 minutos, com notificações visuais e sonoras
- **ProximaProvaCard**: Para concurseiros, exibe uma contagem regressiva para provas cadastradas, criando um senso de urgência produtiva

A integração destes componentes em uma única tela elimina a necessidade de alternar entre múltiplos aplicativos, reduzindo a fricção cognitiva e facilitando a manutenção do foco.

## Gerenciamento de Perfil e Preferências: Personalização Avançada

![Perfil do StayFocus](https://api.placeholder.com/800/400)

O StayFocus reconhece que a produtividade é profundamente pessoal. Nossas ferramentas de personalização permitem adaptar a plataforma às suas necessidades específicas:

### Metas Diárias: Defina Seus Parâmetros de Sucesso

Estabeleça parâmetros quantificáveis para avaliar seu dia:
- **Horas de sono**: Defina sua meta de descanso para manter a saúde cognitiva
- **Tarefas prioritárias**: Ajuste o número de prioridades que deseja gerenciar diariamente
- **Copos de água**: Mantenha-se hidratado com lembretes personalizados
- **Pausas programadas**: Configure a frequência ideal de pausas para seu estilo de trabalho

Estas metas são integradas ao dashboard e aos relatórios de progresso, permitindo ajustes baseados em dados reais sobre seus hábitos.

### Preferências Visuais: Acessibilidade em Primeiro Lugar

O StayFocus foi projetado pensando em acessibilidade e conforto visual:

- **Alto contraste**: Aumenta significativamente o contraste entre elementos, auxiliando pessoas com deficiências visuais
- **Redução de estímulos**: Minimiza animações e elementos visuais secundários, ideal para quem se distrai facilmente ou possui sensibilidade a estímulos visuais
- **Texto grande**: Amplia todos os textos da interface para maior legibilidade
- **Controles de notificação**: Personalize quais notificações receber e como elas serão exibidas

Estas configurações modificam diretamente as classes CSS no elemento HTML raiz, garantindo uma experiência consistente em toda a aplicação.

### Persistência de Preferências: Seu StayFocus em Qualquer Lugar

Todas as suas configurações são automaticamente sincronizadas com o Supabase, nosso backend em nuvem, garantindo que:
- Suas preferências estejam disponíveis em qualquer dispositivo
- As configurações sejam restauradas instantaneamente ao fazer login
- Você possa resetar para os valores padrão com um único clique, se necessário

## Autenticação Simplificada: Segurança Sem Complicações

A experiência do StayFocus começa com um sistema de autenticação intuitivo e seguro:

### Múltiplas Opções de Login

Oferecemos flexibilidade na forma como você acessa sua conta:
- Login tradicional com email e senha
- Autenticação via Google OAuth para entrada com um clique
- Rotas de callback seguras para processar autenticação OAuth
- Fluxos de registro simples para novos usuários

### Contexto de Autenticação Global

Nossa arquitetura utiliza o React Context (`AuthContext`) para:
- Fornecer informações sobre o estado da sessão para toda a aplicação
- Gerenciar transições suaves entre estados autenticados e não autenticados
- Controlar redirecionamentos baseados no estado de autenticação
- Garantir que seus dados permaneçam privados e seguros

## Interface Adaptável: Design Pensado no Usuário

![Temas do StayFocus](https://api.placeholder.com/800/400)

A interface do StayFocus foi meticulosamente projetada para se adaptar às suas necessidades e ao seu ambiente:

### Sistema de Temas Completo

Nosso `ThemeProvider` oferece:
- Tema claro para uso diurno e ambientes iluminados
- Tema escuro para uso noturno e economia de bateria
- Opção "sistema" que se adapta automaticamente às preferências do seu dispositivo
- Persistência da escolha no localStorage para consistência entre sessões
- Transições suaves entre temas, com opção de desabilitá-las se preferir

### Biblioteca de Componentes UI Consistente

Construímos uma biblioteca de componentes reutilizáveis que garante:
- Consistência visual em toda a aplicação
- Suporte completo a acessibilidade via Headless UI
- Variantes de estilo para diferentes contextos e estados
- Responsividade em dispositivos de qualquer tamanho

Esta biblioteca inclui botões, cards, inputs, modais, badges, checkboxes e muitos outros componentes essenciais, todos estilizados com Tailwind CSS para performance e flexibilidade.

## Gerenciamento de Estado com Zustand: Performance e Escalabilidade

Por trás da experiência fluida do StayFocus está um sofisticado sistema de gerenciamento de estado usando Zustand:

### Stores Modulares

Nossa arquitetura de estado é organizada em stores específicas:
- `perfilStore`: Gerencia dados de perfil, metas e preferências
- `prioridadesStore`: Controla as prioridades diárias e seu histórico
- Store principal (`app/store/index.ts`): Gerencia entidades como blocos de tempo, refeições, medicamentos e humor

Esta abordagem modular facilita a manutenção do código e garante que apenas os componentes necessários sejam re-renderizados quando o estado muda.

### Integração Perfeita com Backend

Cada store encapsula a lógica de interação com o Supabase:
- Operações CRUD completas para cada entidade
- Carregamento inicial de dados otimizado
- Tratamento de erros e atualizações de estado
- Sincronização automática entre dispositivos

## Conclusão: A Fundação para sua Produtividade

As funcionalidades centrais do StayFocus formam uma base sólida sobre a qual construímos módulos especializados como o Estudos, Concursos e Hiperfocos. Esta arquitetura cuidadosamente planejada garante que:

1. A curva de aprendizado seja suave, permitindo começar com as funcionalidades básicas
2. A plataforma permaneça responsiva e rápida, independentemente da quantidade de dados
3. Novas funcionalidades possam ser adicionadas sem comprometer a experiência existente
4. Sua experiência seja consistente e previsível em todos os aspectos da aplicação

No próximo post, exploraremos em detalhes o módulo de Concursos e como ele revoluciona a preparação para concursos públicos.

---

*Você tem sugestões para melhorias ou novas funcionalidades para o StayFocus? Compartilhe nos comentários abaixo ou entre em contato diretamente com nossa equipe!*