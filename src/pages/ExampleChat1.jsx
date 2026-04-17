import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';
import '../style/ExampleChat1.css';
import { DeepChat } from 'deep-chat-react';
import * as CS from '../style/ExampleChatStyle1';

const ExampleChat1 = () => {
    const navigate = useNavigate();

    return (
        <div className="chat-page">
            {/* 1. 상단 글로벌 헤더 */}
            <header className="global-header">
                <div className='header-inner'>
                    <div className="logo-group" onClick={() => navigate('/example1')}>
                        <Icon type="full" height={36} />
                        <div className="v-line"></div>
                        <span className="header-title">국민 건강 맞춤 AI 챗봇</span>
                    </div>
                </div>
            </header>

            {/* 2. 중앙 채팅 카드 레이아웃 */}
            <main className="chat-container">
                <DeepChat
                    demo={true}
                    chatStyle={CS.chatStyle}
                    messageStyles={CS.messageStyles}
                    names={CS.nameStyles}
                    customButtons={ CS.reportUploadButtonStyles }
                    inputAreaStyle={CS.inputAreaStyle}
                    textInput={{
                        styles: CS.textInputStyles,
                        placeholder: { text: '건강 관련 궁금한 내용을 입력하세요.' }
                    }}
                    submitButtonStyles={CS.submitButtonStyles}
                    // 초기 메시지 설정
                    history={[
                        { text: '안녕.', role: 'user' },
                        { text: '국민 건강 맞춤 AI 챗봇입니다.', role: 'ai' }
                    ]}
                />
            </main>
        </div>
    );
};

export default ExampleChat1;