import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Produtos = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:5001/api/produtos')
            .then(response => setProdutos(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Produtos</h1>
            <ul>
                {produtos.map(produto => (
                    <li key={produto.id}>
                        {produto.nome} - R$ {produto.preco.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Produtos;
