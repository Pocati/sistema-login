import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import * as C from '../../styles/components';

export const Home = () => {
    const { signOut, user } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <C.Container>
            <h2>Home</h2>
            <p>Bem-vindo, {user?.email}</p>
            <C.Button style={{ maxWidth: '200px', marginTop: '20px' }} onClick={() => [signOut(), navigate('/')]}>
                Sair
            </C.Button>
        </C.Container>
    );
};