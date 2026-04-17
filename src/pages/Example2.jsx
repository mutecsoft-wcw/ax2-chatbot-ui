import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import Icon from '../components/Icon';
import '../style/Example2.css';

const Example2 = () => {
    const navigate = useNavigate();

    return (
        <div className="landing-page">
            <header className="landing-header">
                <div className="header-inner">
                    <div className="logo-group">
                        <Icon height={36} /> 
                        <div className="v-line"></div>
                        <h1 className="header-title">스마트 AI 비서</h1>
                    </div>
                </div>
            </header>

            <main className="hero-section">
                <div className='sub-title'><h3>● AI 질환 및 건강정보 안내 서비스</h3></div>
                <h2 className="main-title">질병관리청 스마트 비서가<br />여러분의 건강을 지킵니다.</h2>

                <div className="search-container">
                    <input
                        type="text"
                        placeholder="궁금한 건강 정보를 입력해 주세요."
                        className="search-input"
                        onClick={() => navigate('/example2/chat')}
                    />
                    <button className="search-button">
                        <IoIosSearch />
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
}

export default Example2;