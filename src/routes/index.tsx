import { createFileRoute } from "@tanstack/react-router";
import { FleetPage } from '@/features/operator/fleet';
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: 'Todas as máquinas — OPERATOR INTELLIGENCE' },
    { name: 'description', content: 'Acompanhe a frota florestal, identifique desvios e consulte o desempenho de cada máquina.' },
    { property: 'og:title', content: 'Todas as máquinas — OPERATOR INTELLIGENCE' },
    { property: 'og:description', content: 'Clareza para o gestor. Inteligência para cada etapa da operação.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: FleetPage,
});
