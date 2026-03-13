import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import * as C from '../../styles/components';

export const Inscricao = () => {
    const [email, setEmail] = useState('');
    const [emailConf, setEmailConf] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const { signUp } = useContext(AuthContext);

    const handleSignup = () => {
        if (!email || !emailConf || !senha) {
            setError('Preencha todos os campos');
            return;
        } else if (email !== emailConf) {
            setError('Os e-mails não são iguais');
            return;
        }

        const res = signUp(email, senha);

        if (res) {
            setError(res);
            return;
        }

        alert('Usuário cadastrado com sucesso!');
        navigate('/');
    };

    return (
        <C.Container>
            <C.Content>
                <h2>Cadastro</h2>
                <C.Input
                    type="email"
                    placeholder="Digite seu E-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError('')]}
                />
                <C.Input
                    type="email"
                    placeholder="Confirme seu E-mail"
                    value={emailConf}
                    onChange={(e) => [setEmailConf(e.target.value), setError('')]}
                />
                <C.Input
                    type="password"
                    placeholder="Digite sua Senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError('')]}
                />
                <C.LabelError>{error}</C.LabelError>
                <C.Button onClick={handleSignup}>Inscrever-se</C.Button>
                <C.LabelSignin>
                    Já tem uma conta?
                    <C.Strong>
                        <Link to="/">&nbsp;Entre</Link>
                    </C.Strong>
                </C.LabelSignin>
            </C.Content>
        </C.Container>
    );
};