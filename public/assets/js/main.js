import { initLoading } from './modules/loading.js';
import { initNavigation } from './modules/navigation.js';
import { initParticles } from './modules/particles.js';
import { initCountdown } from './modules/countdown.js';
import { initProgramTabs } from './modules/program-tabs.js';
import { initReveal } from './modules/reveal.js';
import { initMemories } from './modules/memories.js';

initLoading();
initNavigation();
initParticles();
initCountdown('2026-06-17T18:00:00-03:00');
initProgramTabs();
initReveal();
initMemories();
