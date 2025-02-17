import React from 'react';
import { Button, View, Text } from 'react-native';

const ListaCategorias: React.FC = ({ navigation }) => {
    const categorias = [
        { id: 1, nome: 'Cabelos' },
        { id: 2, nome: 'Maquiagem' },
        { id: 3, nome: 'Perfumes' },
        { id: 4, nome: 'SkinCare' },
        { id: 5, nome: 'Unhas' },
        { id: 6, nome: 'Corpo e Banho' },
    ];

    return (
        <View>
            {categorias.map((categorias) => (
                <Button
                    key={categorias.id}
                    title={categorias.nome}
                    onPress={() =>
                        navigation.navigate('CategoriasGeral', {
                            categoriaId: categorias.id,
                            categoriaNome: categorias.nome,
                        })
                    }
                />
            ))}
        </View>
    );
};

export default ListaCategorias;