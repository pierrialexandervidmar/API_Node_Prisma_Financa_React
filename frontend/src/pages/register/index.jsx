import { Main, Body, Logo, Spacing, CreateAcc } from './styles'
import { Input, Button } from '../../components'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const save = async (e) => { 
        e.preventDefault()
        await axios.post("http://localhost:3001/user", data)
        alert('Usuario criado com sucesso')
    }

    return (
        <Main>
            <Body>
                <form onSubmit={save}>
                    <Logo>Gerenciador Financeiro</Logo>
                    <Input 
                        label="Nome" 
                        placeholder="Digite o nome" 
                        required={true}
                        value={data.name}
                        onChange={(e) => setData({...data, name: e.target.value })}
                    />
                    <Spacing />
                    <Input 
                        label="Email" 
                        placeholder="Digite o email" 
                        required={true} 
                        type="email"
                        value={data.email}
                        onChange={(e) => setData({...data, email: e.target.value})}
                    />
                    <Spacing />
                    <Input 
                        label="Senha" 
                        type="password" 
                        placeholder="Digite a senha" 
                        required={true} 
                        value={data.password}
                        onChange={(e) => setData({...data, password: e.target.value})}
                    />
                    <Spacing />
                    <Button 
                        label="Criar conta" 
                        variant="btn-primary" 
                        type="submit"
                    />
                    <Spacing />
                    <CreateAcc onClick={() => {navigate('/login')}}>Fazer login</CreateAcc>
                </form>
            </Body>
        </Main>
    )
}

export default Register;