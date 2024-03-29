// @ts-ignore
import Metronome from '@kevinorriss/react-metronome';
import { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const UserMetronome = (): JSX.Element => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <section
      className={
        isOpen ? 'metronome-container' : 'metronome-container hide-slider'
      }>
      <button className="metronome-slider" onClick={() => setisOpen(!isOpen)}>
        {isOpen ? <FaChevronDown /> : <FaChevronUp />}
      </button>
      <Metronome
        frequency={880}
        volume={1}
        playPauseStyle={{
          color: '#4285f4',
          backgroundColor: '#fff',
          height: '9rem',
          width: '9rem',
          fontSize: '6rem',
        }}
        bpmStyle={{ color: '#4285f4', marginTop: '1.5rem' }}
        plusStyle={{
          backgroundColor: '#4285f4',
          fontSize: '1.5rem',
          padding: '5px',
          height: 'auto',
        }}
        minusStyle={{
          backgroundColor: '#4285f4',
          fontSize: '1.5rem',
          padding: '5px',
          height: 'auto',
        }}
        trackStyle={{ height: '8px', backgroundColor: '#4285f4' }}
        railStyle={{ height: '8px' }}
        handleStyle={{ height: '18px', width: '18px' }}
        sliderStyle={{ minWidth: '250px' }}
      />
    </section>
  );
};

export default UserMetronome;
