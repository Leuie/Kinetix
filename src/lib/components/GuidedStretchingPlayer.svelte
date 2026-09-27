<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { Play, Pause, RotateCcw, SkipForward, Award, Shield, Flame, Activity } from 'lucide-svelte';

  interface StretchMovement {
    name: string;
    duration: number; // in seconds
    instructions: string;
    focusArea: string;
  }

  interface StretchRoutine {
    id: string;
    title: string;
    description: string;
    totalMinutes: number;
    movements: StretchMovement[];
  }

  const routines: StretchRoutine[] = [
    {
      id: 'routine-wakeup',
      title: 'Wake Up Energy Alignment',
      description: 'Morning spinal decompression and hip awakening based on Dr Suzanne Martin methodology.',
      totalMinutes: 15,
      movements: [
        { name: 'Cat Cow Breath Flow', duration: 60, instructions: 'Inhale arch spine, exhale round upper back into ceiling.', focusArea: 'Thoracic Spine' },
        { name: 'Downward Dog Heel Pedals', duration: 75, instructions: 'Press hands firmly into floor, pedal calves rhythmically.', focusArea: 'Posterior Chain' },
        { name: 'Deep Low Lunge Hip Opener', duration: 90, instructions: 'Drop back knee softly, extend arms upward to decompress psoas.', focusArea: 'Hip Flexors' },
        { name: 'Seated Spinal Rotation', duration: 75, instructions: 'Sit tall, gentle rotation from thoracic spine rather than lower back.', focusArea: 'Rotational Mobility' },
        { name: 'Standing Side Reach Glide', duration: 60, instructions: 'Ground both feet, lengthen lateral obliques without tilting hips.', focusArea: 'Lateral Line' }
      ]
    },
    {
      id: 'routine-joint-rehab',
      title: 'Deep Squat VMO Glide & Ankle Mobility',
      description: 'Sanitized functional joint restoration, Vastus Medialis Oblique tracking, and deep knee gliding.',
      totalMinutes: 15,
      movements: [
        { name: 'Ankle Dorsiflexion Wall Drive', duration: 90, instructions: 'Drive knee past toes over second toe while keeping heel glued to deck.', focusArea: 'Talocrural Joint' },
        { name: 'Elevated Heel Goblet Hold', duration: 90, instructions: 'Deep squat with upright torso, knees forward over toes, loading VMO quad tissue.', focusArea: 'Patellar Tendon' },
        { name: 'Duck Walk Glide Progression', duration: 60, instructions: 'Low rhythmic glide keeping weight through midfoot with upright chest.', focusArea: 'Knee & Hip Capsule' },
        { name: 'Poliquin Step Down Hold', duration: 90, instructions: 'Single leg controlled heel tap focusing purely on terminal knee extension.', focusArea: 'VMO Activation' },
        { name: 'Tibialis Anterior Raise', duration: 60, instructions: 'Lean back against wall, dorsiflex toes upward toward shins.', focusArea: 'Tibialis Muscle' }
      ]
    },
    {
      id: 'routine-calisthenics',
      title: 'Sanitized Upper & Core Functional Volume',
      description: 'Strict bodyweight capacity benchmark training with zero military nomenclature.',
      totalMinutes: 20,
      movements: [
        { name: 'Strict Upper Body Push Volume', duration: 120, instructions: 'Elbows tucked 45 degrees, chest touches floor, strict lockout on rep completion.', focusArea: 'Anterior Chain & Triceps' },
        { name: 'Core Anterior Flexion Pacing', duration: 120, instructions: 'Smooth controlled cadence, cross arms over chest, steady breathing.', focusArea: 'Rectus Abdominis' },
        { name: 'Core Isometric Stability Hold', duration: 180, instructions: 'Forearm plank, glutes locked, hollow body brace, prevent lumbar sag.', focusArea: 'Deep Core Armor' },
        { name: 'Lower Kinetic Chain Squat Cadence', duration: 120, instructions: 'Thighs parallel to floor, full hip extension at top of every repetition.', focusArea: 'Quads & Glutes' }
      ]
    }
  ];

  let selectedRoutineIndex = 0;
  let currentMovementIndex = 0;
  let isTimerRunning = false;
  let remainingSeconds = 60;
  let timerInterval: any = null;

  $: currentRoutine = routines[selectedRoutineIndex];
  $: currentMovement = currentRoutine.movements[currentMovementIndex];
  $: totalMovements = currentRoutine.movements.length;
  $: progressPercentage = Math.round(((currentMovement.duration - remainingSeconds) / currentMovement.duration) * 100);

  function selectRoutine(index: number) {
    pauseTimer();
    selectedRoutineIndex = index;
    currentMovementIndex = 0;
    remainingSeconds = currentRoutine.movements[0].duration;
  }

  function startTimer() {
    if (isTimerRunning) return;
    isTimerRunning = true;
    timerInterval = setInterval(() => {
      if (remainingSeconds > 0) {
        remainingSeconds--;
      } else {
        nextMovement();
      }
    }, 1000);
  }

  function pauseTimer() {
    isTimerRunning = false;
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  function toggleTimer() {
    if (isTimerRunning) {
      pauseTimer();
    } else {
      startTimer();
    }
  }

  function resetTimer() {
    pauseTimer();
    remainingSeconds = currentMovement.duration;
  }

  function nextMovement() {
    if (currentMovementIndex < totalMovements - 1) {
      currentMovementIndex++;
      remainingSeconds = currentRoutine.movements[currentMovementIndex].duration;
    } else {
      pauseTimer();
      currentMovementIndex = 0;
      remainingSeconds = currentRoutine.movements[0].duration;
    }
  }

  function formatTime(sec: number): string {
    const mins = Math.floor(sec / 60);
    const s = sec % 60;
    return `${mins}:${s < 10 ? '0' : ''}${s}`;
  }

  onMount(() => {
    remainingSeconds = currentMovement.duration;
  });

  onDestroy(() => {
    if (timerInterval) clearInterval(timerInterval);
  });
</script>

<div class="rounded-2xl bg-[#0a0d18] border border-[#1f263d] p-6 shadow-2xl space-y-6 text-slate-100">
  <!-- Routine Selector Header -->
  <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1b2136] pb-5">
    <div class="space-y-1">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase">
        <Activity size={14} />
        Kinetix Functional Engine
      </div>
      <h2 class="text-2xl font-bold text-white tracking-tight">Guided Stretching & Movement Player</h2>
      <p class="text-xs text-slate-400 max-w-xl">
        Dr Suzanne Martin stretching architecture integrated with sanitized joint health and functional benchmark cadences.
      </p>
    </div>

    <!-- Routine Tabs -->
    <div class="flex items-center gap-2 overflow-x-auto p-1 rounded-xl bg-[#060810] border border-[#171d30]">
      {#each routines as routine, i}
        <button
          type="button"
          on:click={() => selectRoutine(i)}
          class="px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all {selectedRoutineIndex === i ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm' : 'text-slate-400 hover:text-slate-200'}"
        >
          {routine.title}
        </button>
      {/each}
    </div>
  </div>

  <!-- Active Exercise Cockpit -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <!-- Left Column: Movement Telemetry -->
    <div class="lg:col-span-2 rounded-xl bg-[#0d1222] border border-[#1d253b] p-6 space-y-5">
      <div class="flex items-center justify-between">
        <span class="text-xs font-mono uppercase text-cyan-400 tracking-wider">
          Movement {currentMovementIndex + 1} of {totalMovements}
        </span>
        <span class="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
          Target: {currentMovement.focusArea}
        </span>
      </div>

      <div>
        <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {currentMovement.name}
        </h3>
        <p class="text-sm text-slate-300 mt-2 leading-relaxed bg-[#070a14] p-3.5 rounded-xl border border-[#161d30]">
          {currentMovement.instructions}
        </p>
      </div>

      <!-- Live Countdown Dial -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl bg-[#070a14] border border-[#182036]">
        <div class="flex items-baseline gap-3">
          <span class="text-5xl sm:text-6xl font-black font-mono tracking-tight text-white">
            {formatTime(remainingSeconds)}
          </span>
          <span class="text-xs font-mono text-slate-500 uppercase">Remaining</span>
        </div>

        <!-- Controls -->
        <div class="flex items-center gap-2">
          <button
            type="button"
            on:click={toggleTimer}
            class="px-5 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 transition-all cursor-pointer {isTimerRunning ? 'bg-amber-500 hover:bg-amber-400 text-slate-950' : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20'}"
          >
            {#if isTimerRunning}
              <Pause size={18} />
              Pause
            {:else}
              <Play size={18} />
              Begin Movement
            {/if}
          </button>

          <button
            type="button"
            on:click={resetTimer}
            class="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Reset Timer"
          >
            <RotateCcw size={18} />
          </button>

          <button
            type="button"
            on:click={nextMovement}
            class="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Next Movement"
          >
            <SkipForward size={18} />
          </button>
        </div>
      </div>

      <!-- Movement Progress Bar -->
      <div class="space-y-1.5">
        <div class="flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Cadence Progress</span>
          <span class="text-cyan-400">{progressPercentage}%</span>
        </div>
        <div class="w-full bg-[#141b2e] h-2 rounded-full overflow-hidden border border-[#1e273e]">
          <div
            class="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full rounded-full transition-all duration-300"
            style="width: {progressPercentage}%;"
          ></div>
        </div>
      </div>
    </div>

    <!-- Right Column: Curriculum Sequence -->
    <div class="rounded-xl bg-[#0d1222] border border-[#1d253b] p-5 space-y-4 flex flex-col justify-between">
      <div class="space-y-3">
        <div class="flex items-center justify-between border-b border-[#1b2236] pb-2">
          <span class="text-xs font-mono text-slate-400 uppercase font-bold">Curriculum Sequence</span>
          <span class="text-xs font-mono text-emerald-400">{currentRoutine.totalMinutes} min track</span>
        </div>

        <div class="space-y-2">
          {#each currentRoutine.movements as mov, idx}
            <button
              type="button"
              on:click={() => {
                pauseTimer();
                currentMovementIndex = idx;
                remainingSeconds = mov.duration;
              }}
              class="w-full text-left p-3 rounded-lg border transition-all text-xs flex items-center justify-between {currentMovementIndex === idx ? 'bg-cyan-950/60 border-cyan-500/50 text-white font-bold' : 'bg-[#070a14] border-[#161c2e] text-slate-400 hover:text-slate-200'}"
            >
              <div class="space-y-0.5">
                <span class="block text-slate-200">{mov.name}</span>
                <span class="text-[10px] font-mono text-slate-500">{mov.focusArea}</span>
              </div>
              <span class="font-mono text-[11px] text-cyan-400 shrink-0">{formatTime(mov.duration)}</span>
            </button>
          {/each}
        </div>
      </div>

      <div class="pt-3 border-t border-[#1a2136] text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
        <Shield size={14} class="text-emerald-400" />
        <span>Joint Longevity Protocol Verified</span>
      </div>
    </div>
  </div>
</div>
