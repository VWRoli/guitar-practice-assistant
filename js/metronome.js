'use strict';

import * as Tone from 'tone';

const controls = document.querySelector('.controls');
const bpmNumberInput = document.querySelector('#bpm-number-input');
const bpmNumberDisplay = document.querySelector('.bpm-number-display');

const metronomeStartBtn = document.querySelector('.metronome-start-btn');
///////////////////////////////////////////////////////
//Actual metronome

class Metronome {
  _bpm = 120;
  _metronomeActive = false;
  _loop;
  _context = new (window.AudioContext || window.webkitAudioContext)();

  constructor() {
    this._handleBpm();

    //Event handlers
    metronomeStartBtn.addEventListener(
      'click',
      this._startStopHandler.bind(this)
    );
    controls.addEventListener('click', this._handleControls.bind(this));
    bpmNumberInput.addEventListener('change', this._handleSlider.bind(this));
  }
  //BPM handler
  _handleBpm() {
    if (this._bpm >= 40 && this._bpm <= 180) {
      bpmNumberInput.value = this._bpm;
      bpmNumberDisplay.textContent = this._bpm;
    }
    this._setBpm();
  }
  _setBpm() {
    Tone.Transport.bpm.value = this._bpm;
  }
  //Control handler
  _handleControls(e) {
    const target = e.target.closest('.control-btn');
    if (!target) return;

    if (target.classList.contains('btn-plus')) {
      this._bpm++;
      this._handleBpm();
    }
    if (target.classList.contains('btn-minus')) {
      this._bpm--;
      this._handleBpm();
    }
  }
  //Handle range slider
  _handleSlider() {
    this._bpm = bpmNumberInput.value;
    this._handleBpm();
  }
  //Start metronome
  _startMetronome() {
    //Loop with tone.js
    this._loop = new Tone.Loop(this._oscillator.bind(this), '4n');

    //Set bpm
    //Tone.Transport.bpm.value = this._bpm;

    //Start sound
    this._context.resume(); //Need it for autoplay policy
    Tone.start(); //Need it for autoplay policy, but for the tone.js library
    Tone.Transport.start();
    this._loop.start(0);
  }
  //Stop metronome
  _stopMetronome() {
    this._loop.stop();
  }
  //Handle start and stop function
  _startStopHandler() {
    if (this._metronomeActive) {
      metronomeStartBtn.innerHTML = `<i class="far fa-play-circle fa-9x gradient-btn"></i>`;
      this._stopMetronome();
    } else {
      metronomeStartBtn.innerHTML = `<i class="far fa-pause-circle fa-9x gradient-btn"></i>`;
      this._startMetronome();
    }
    this._metronomeActive = !this._metronomeActive;
  }

  _oscillator(time) {
    // Create an oscillator with Web Audio API
    const osc = this._context.createOscillator();
    const oscGain = this._context.createGain();

    //Create metronome sound
    osc.frequency.value = 880;
    oscGain.gain.exponentialRampToValueAtTime(1, time + 0.01);

    //Fixing speakers pluck sound issue
    oscGain.gain.setValueAtTime(1, 0);
    oscGain.gain.exponentialRampToValueAtTime(0.001, time + 0.03);

    osc.connect(oscGain);
    oscGain.connect(this._context.destination);

    osc.start(time);
    osc.stop(time + 0.03);
  }
}

const myMetronome = new Metronome();
