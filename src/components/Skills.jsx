import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';

function Skils() {
  const [skills, setSkills] = useState([]);
  const [skillName, setSkillName] = useState('');
  const [skillRange, setSkillRange] = useState('');

  useEffect(() => {
    const storedSkills = localStorage.getItem('skills');
    if (storedSkills) {
      try {
        setSkills(JSON.parse(storedSkills));
      } catch (e) {
        console.error('Ошибка при парсинге skills из localStorage', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('skills', JSON.stringify(skills));
  }, [skills]);

  const addSkill = () => {
    const range = Number(skillRange);
    if (skillName.trim() && range > 0 && range <= 100) {
      const newSkills = [...skills, { name: skillName.trim(), range }];
      setSkills(newSkills);
      setSkillName('');
      setSkillRange('');
    }
  };

  const removeSkill = (indexToRemove) => {
    const updatedSkills = skills.filter((_, i) => i !== indexToRemove);
    setSkills(updatedSkills);
  };

  return (
    <div className="skills-container">
      <h1 className="title-page">Skills</h1>
      <div className="skill-input">
        <input
          type="text"
          placeholder="Enter skill name"
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter skill range"
          value={skillRange}
          onChange={(e) => {
            const cleanedValue = e.target.value.replace(/^0+/, '');
            setSkillRange(cleanedValue);
          }}
          min="1"
          max="100"
        />
        <button onClick={addSkill}>Add Skill</button>
      </div>
      <div className="skill-list">
       {skills.map((skill, index) => (
  <div key={index} className="skill">
    <span className="skill-name">{skill.name}</span>
    <div className="skill-bar-container">
      <div className="skill-bar">
        <div
  className="skill-level"
  style={{
    '--target-width': `${skill.range}%`,
    width: `${skill.range}%`
  }}
></div>

      </div>
      <button
        className="delete-button"
        onClick={() => removeSkill(index)}
        title="Удалить"
      >
        <FaTrash />
      </button>
    </div>
  </div>
))}



      </div>
    </div>
  );
}

export default Skils;
