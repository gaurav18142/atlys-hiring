export interface HeaderProps {
    handleLoginClick: () => void;
}

export interface PostData {
    name: string;
    timestamp: string;
    text: string;
  }
export interface PostInputProps {
    handleLoginClick: () => void;
}

export interface SignInFormProps {
    onSignUpClick: () => void;
}

export interface SignUpFormProps {
    onSignInClick: () => void;
}