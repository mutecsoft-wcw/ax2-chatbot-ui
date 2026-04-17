import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';
import '../style/ExampleChat2.css';
import { DeepChat } from 'deep-chat-react';
import * as CS from '../style/ExampleChatStyle2';
import * as history from '../example-history/ExampleHistory';

const ExampleChat2 = () => {
    const navigate = useNavigate();

    return (
        <div className="chat-page">
            <header className="global-header">
                <div className='header-inner'>
                    <div className="logo-group" onClick={() => navigate('/example2')}>
                        <Icon height={36} />
                        <div className="v-line"></div>
                        <span className="header-title">스마트 AI 비서</span>
                    </div>
                </div>
            </header>

            <main className="chat-container">
                <DeepChat
                    demo={true}
                    chatStyle={CS.chatStyle}
                    avatars={CS.avatarsStyles}
                    messageStyles={CS.messageStyles}
                    customButtons={CS.reportUploadButtonStyles}
                    inputAreaStyle={CS.inputAreaStyle}
                    textInput={{
                        styles: CS.textInputStyles,
                        placeholder: { text: '건강 관련 궁금한 내용을 입력하세요.' }
                    }}
                    submitButtonStyles={CS.submitButtonStyles}
                    history={history.loadHistory(2)}
                />
            </main>
        </div>
    );
}

export default ExampleChat2;