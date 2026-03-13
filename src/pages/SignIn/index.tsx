import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import * as C from '../../styles/components';

export const SignIn = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (!email || !senha) {
            setError('Preencha todos os campos');
            return;
        }

        const res = signIn(email, senha);

        if (res) {
            setError(res);
            return;
        }

        navigate('/home');
    };

    return (
        <C.Container>
            <C.Content>
                <h2>Login</h2>
                <C.Input
                    type="email"
                    placeholder="Digite seu E-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError('')]}
                />
                <C.Input
                    type="password"
                    placeholder="Digite sua Senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError('')]}
                />
                <C.LabelError>{error}</C.LabelError>
                <C.Button onClick={handleLogin}>Entrar</C.Button>
                <C.LabelSignin>
                    Não tem uma conta?
                    <C.Strong>
                        <Link to="/inscricao">&nbsp;Registre-se</Link>
                    </C.Strong>
                </C.LabelSignin>
            </C.Content>
        </C.Container>
    );
};