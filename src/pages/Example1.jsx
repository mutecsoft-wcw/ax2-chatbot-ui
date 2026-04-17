import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Icon from '../components/Icon';
import '../style/Example1.css';

const Example1 = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="header-inner">
          <div className="logo-group">
            <Icon height={36} /> 
            <div className="v-line"></div>
            <h1 className="header-title">국민 건강 맞춤 AI 챗봇</h1>
          </div>
        </div>
      </header>

      {/* 중앙 섹션 */}
      <main className="hero-section">
        <h2 className="main-title">궁금하신 건강 정보가 <br />있으신가요?</h2>
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="건강 관련 궁금한 내용을 입력하세요." 
            className="search-input"
            onClick={() => navigate('/example1/chat')}
          />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>

        <div className="hash-tags">
          <span>#고혈압 원인</span>
          <span>#우울증 예방</span>
          <span>#당뇨병 식단</span>
        </div>
      </main>
    </div>
  );
};

export default Example1;