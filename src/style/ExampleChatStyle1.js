export const chatStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "24px",
  backgroundColor: "#ffffff",
  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
  fontFamily: "Pretendard, -apple-system, sans-serif",
  display: "flex",
  flexDirection: "column",
  padding: "10px",
  boxSizing: "border-box",
};

export const nameStyles = {
  default: {
    style: {
      fontSize: "16px",
      marginTop: "14px",
      width: "45px",
    },
  },
  ai: {
    text: "챗봇",
  },
  user: {
    text: "사용자",
  },
};

export const messageStyles = {
  default: {
    shared: {
      innerContainer: {
        fontSize: "0.95rem",
        padding: "10px 14px",
        maxWidth: "85%",
        wordBreak: "break-word",
        whiteSpace: "pre-wrap",
        overflowWrap: "anywhere",
      },
      outerContainer: {
        margin: "8px 0",
        width: "100%",
      },
    },
    ai: {
      bubble: {
        backgroundColor: "#f0f2f5",
        color: "#333",
        borderRadius: "15px",
        // borderTopLeftRadius: "2px",
        fontSize: "15px",
        lineHeight: "1.6",
        padding: "10px",
      },
    },
    user: {
      bubble: {
        backgroundColor: "#003963",
        color: "#ffffff",
        borderRadius: "12px",
        // borderTopRightRadius: "2px",
        fontSize: "15px",
        padding: "10px",
      },
    },
  },
};

export const textInputStyles = {
  container: {
    border: "1px solid #e0e0e0",
    borderRadius: "12px",
    flex: 1,
    backgroundColor: "#ffffff",
    padding: "8px",
    display: "flex",
    alignItems: "center",
    minWidth: "70px",
    width: "70%",
  },
  text: {
    fontSize: "14px",
    color: "#333",
    outline: "none",
    marginLeft: "10px",
  },
};

export const submitButtonStyles = {
  position: "inside-end",
  submit: {
    container: {
      default: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "8px",
        fontWeight: "bold",
        flexShrink: "0",
        height: "100%",
      },
    },
    text: {
      content: "전송",
      styles: {
        default: {
          color: "gray",
          fontSize: "16px",
          fontWeight: "bold",
          paddingTop: "30px",
          marginRight: "10px",
        },
      },
    },
    svg: { content: "" },
  },
  loading: {
    text: { content: "대기", styles: { default: { color: "white" } } },
    svg: { content: "" },
  },
  stop: {
    text: { content: "중지", styles: { default: { color: "white" } } },
    svg: { content: "" },
  },
  alwaysEnabled: true,
};

export const inputAreaStyle = {
  backgroundColor: "#ffffff",
  borderTop: "1px solid #e0e0e0",
  padding: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  width: "100%",
};

export const reportUploadButtonStyles = [
  {
    position: "inside-start",
    styles: {
      button: {
        default: {
          svg: {
            content: `<svg viewBox="0 0 139 133" xmlns="http://www.w3.org/2000/svg"><path d="M93,90.8H49V51.5H32.3L71,13.7l38.7,37.8H93V90.8L93,90.8z M111,109.7c2.6,0,4.7-2.1,4.7-4.7V75.9h11.2v29.8 c0,8.4-6.8,15.2-15.2,15.2H30.4c-8.4,0-15.2-6.8-15.2-15.2V75.9h11.2V105c0,2.6,2.1,4.7,4.7,4.7H111L111,109.7z"/></svg>`,
            styles: {
              default: {
                paddingTop: "30px",
              },
            },
          },
          text: {
            content: "",
            styles: {
              default: { color: "white", fontSize: "12px" },
            },
          },
          container: {
            default: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "10px", // 입력창과의 간격
              marginLeft: "10px",
              flexShrink: "0",
              height: "100%",
            },
          },
        },
      },
    },
  },
];
