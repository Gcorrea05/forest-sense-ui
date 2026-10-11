# OPERATOR INTELLIGENCE — prévia independente

## Direção e fluxo
Superfícies neutras, verde florestal contido, tipografia Manrope/DM Sans e hierarquia operacional. Os temas claro e grafite escuro preservam âmbar e vermelho semânticos. A marca é própria; as imagens de máquinas são ilustrativas, geradas e sem logotipos oficiais.

A prévia abre em Todas as máquinas. Busca, família, situação, fonte e ordem formam a consulta; lista e blocos compartilham seleção e filtros. Ver dados abre o histórico contextual sem navegação. Abrir OnePager leva diretamente à máquina. Ranking compara a mesma família/fonte e as mesmas etapas válidas. Metas e métricas mantém aplicada/proposta separadas e exige 100% para salvar. O OnePager acompanha volume, combustível, ranking e percurso com dois indicadores principais.

## Onde editar
- `src/styles.css`: tokens OKLCH, temas e layout; as cores de alerta são independentes do destaque.
- `model.ts`: 14 máquinas, fixtures determinísticas, observações, eventos e referências demonstrativas. Referências não representam parâmetros mecânicos reais.
- `store.tsx`: estado compartilhado, relógio automático e sincronização entre abas.
- `service.ts`: interface `OperatorDataService` e adaptador local.
- `fleet.tsx`, `criteria.tsx`, `onepager.tsx`, `shared.tsx`, `visualizations.tsx`: apresentação.

## Simulação e restauração
Cada operação tem seis etapas: normal, atenção, crítico, recuperação, leitura ausente e encerramento. Intervalo de 10 segundos; encerra ao apresentar a etapa seis em 50 segundos. Não usa horas fictícias. Os dados históricos são de 10/10/2026 e nunca avançam automaticamente. As operações em andamento retomam o relógio local. Reiniciar preserva o histórico anterior; Ciente preserva o desvio e registra apenas ciência. Alterar pesos não modifica eventos.

Preferências e dados demonstrativos ficam na chave `operator-intelligence-demo-v1` do armazenamento local do navegador. Em Sobre esta prévia → Restaurar cenário inicial, confirme a restauração. Isso remove consultas e critérios demonstrativos, restaura os temas e inicia novamente o cenário inicial. Alternativamente, remova somente essa chave no navegador.

## Adaptar ao backend existente
Implemente `OperatorDataService` em um novo adaptador REST, fornecendo leitura, gravação, assinatura de alterações e restauração **apenas quando apropriada ao domínio real**. Troque o adaptador usado no provider. O contrato de URLs FastAPI deve ser definido a partir da API existente; nenhum endpoint, autenticação ou segredo foi presumido nesta entrega. Na integração, a API FastAPI/MySQL é a fonte de verdade para critérios, eventos e pontuações. Reaproveite tipos de apresentação ou mapeie respostas documentadas para eles. Use configuração pública somente para a URL da API e nunca inclua credenciais privadas no frontend. Relógio, fixtures e reset demonstrativos devem permanecer exclusivos do modo de prévia.

Não houve criação ou integração de backend, banco, Cloud, IA ou serviço pago. Não há autenticação simulada.

## Validação
`bunx vitest run src/features/operator/model.test.ts src/test/app-routing.test.tsx`
Os testes cobrem exemplos de pesos 96/84 e 84/96, referências mínimas/máximas, soma 100%, ausência de leitura, famílias/fontes isoladas, etapas comuns, ciência sem resolução, histórico intacto e sequência determinística.
