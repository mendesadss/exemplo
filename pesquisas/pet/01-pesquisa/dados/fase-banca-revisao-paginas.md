# Fase 8: gabarito de qualidade e banca por página (20/10/2026)

Cinco revisores no fim, todos com zero problema: `revisar.mjs`, `revisar-consistencia.mjs`, `revisar-responsivo.js`, `auditar-anuncios.mjs` e `revisar-telas.mjs` (12 de 12 telas). Um único aviso permanece, esperado: os prompts de imagem de produto estão como "REFERÊNCIA PENDENTE" até existir amostra.

## O que o julgamento achou e corrigiu
1. **Contagem do MilaGift mudou entre duas leituras** (524 ativos e 653 no histórico, depois 393 e 522). A ficha, a central e o benchmark passaram a usar a segunda leitura. Registrado em `auditoria-anuncios.json`.
2. **A promessa "ver o retrato antes de pagar" não é diferencial**: Companion Archive, MilaGift, Turn Me Royal e Doyobest já a anunciam. Os textos da central (G6 e recomendação 3), da estratégia, do plano, do mockup e dos anúncios de lançamento foram reescritos: o preview é obrigação, e o diferencial restante é o refazer de graça dito no anúncio (nenhum dos 870 anúncios lidos o cita) e um prazo cumprido. Aviso: a Companion Archive anuncia entrega "within the week", mais rápida que os 8 a 14 dias do plano.
3. **Faturamento sem preço visível** (Turn Me Royal e Companion Archive) deixou de usar um ticket de $25 inventado: usa só 75% do ticket do setor e sai como "estimado incerto".
4. **Galeria de criativos**: caminho de imagem quebrado e texto com letras faltando (erro de regex) corrigidos.

## Gabarito das 16 perguntas
1. Números iguais em todas as lojas? Não. Nenhum ROAS por loja é mostrado (seria 1 ÷ 8,83% em todas).
2. Origem declarada? Sim: observado, calculado, inferido ou recomendado em cada número.
3. Ordem de grandeza plausível? Doyobest com $258 mil a $816 mil por mês e 2.026 anúncios ativos é plausível; a faixa larga vem do ticket (piso do produto, teto do setor).
4. Algo derivado de alegação da própria loja? Não. "100.000 retratos" e "12.258 reviews" aparecem como alegação não verificada, sem cálculo em cima.
5. Cada loja vende pet? Sim. Doyobest tem catálogo de presentes em geral; o pet é o ângulo dos anúncios, declarado.
6. Veredito incoerente? Não: 2 MODELAR (nível médio, dropship), 3 OBSERVAR.
7. Conclusão apoiada em loja fora do escopo? Não. As três gigantes são só contexto.
7a. Três selos por loja? Sim (modelo, veredito, nível, e defensabilidade). Nenhuma MARCA recebeu MODELAR.
7b. DROPSHIPPING sustentado por sinais? Parcial: plataforma, apps, produto personalizado por pedido e ausência de redes. Estoque próprio não foi verificado em nenhuma loja.
8. Mais de um ângulo de busca? Sim: 12 termos e 8 candidatos; antes, 3 nichos candidatos.
9. País por demografia? Não: por anúncio medido em 6 países.
10. Nome proposto existe em catálogo de concorrente? Não (busca por "Brushed Paws" nos catálogos). Domínio brushedpaws.com não resolveu no DNS; confirmar no registrador.
11. Toda lacuna declarada com tentativa? Sim (Reddit, capa dos vídeos, custo de fornecedor, pixel e reviews, catálogo das lojas fechadas).
12. **Se der errado, qual premissa foi a culpada?** O custo real do fornecedor (estimado, $12 a $18 na manta) e o CPA de uma loja nova (a conta fecha em $15 só com margem de $3,29). Está visível na central e no plano.
13. Defensabilidade veio de dado? Sim: Instagram de 65 mil seguidores e Tranco subindo (Doyobest) contra ausência de redes (as demais).
14. Criativo vencedor por longevidade? Sim: ordenado por dias no ar (1.029 dias o maior).
15. Oportunidade bate com o perfil iniciante? Sim: 1 produto, 1 complemento, 1 país.
16. "As decisões que são suas" existe? Sim, na estratégia e no plano, com a premissa que pesa em cada uma.

## Banca por página
| Página | Resultado |
|---|---|
| 00 Central | aprovada com correção (item 2 acima) |
| 01 Demanda | aprovada; limite do Reddit declarado |
| 02 Mercados | aprovada; razão de NZ marcada como ruído |
| 03 Concorrentes (índice) | aprovada; auditoria de contagem visível |
| 03 MilaGift | aprovada com correção (contagem 393/522; faturamento "estimado incerto" pelo piso de 20K) |
| 03 Doyobest | aprovada; 5% de sobrevivência explicada como teste em volume |
| 03 Turn Me Royal | aprovada com correção (ticket do setor, sem piso inventado) |
| 03 Companion Archive | aprovada com correção (alegação de entrega e preview incluída, fraude de "100 mil" sinalizada) |
| 03 Pet Lovers Custom | aprovada; peso de 20 MB e sobrevivência de 0,8% destacados |
| 04 Criativos | aprovada com correção (imagens e texto); 2 vídeos sem capa declarados |
| 05 Estratégia | aprovada com correção (diferencial reescrito) |
| 06 Plano de ação | aprovada com correção; custo estimado e critério de parada com números |
| 07 Catálogo e oferta | aprovada; produto master pendente declarado |
| 08 Benchmark e blueprint | aprovada; o peso do mockup é piso (sem fotos finais) |
| 09 Identidade e imagens | aprovada; 4 prompts de marca e 34 de produto, todos pendentes de foto real |

Limite geral: o SimilarWeb público devolveu só o piso "20K" para o MilaGift; todas as demais lojas têm visitas medidas.
