import { createStackNavigator } from 'react-navigation-stack';
import ListaDeContatosTela from '../telas/ListaDeContatosTela';
import NovoContatoTela from '../telas/NovoContatoTela';
import { createAppContainer } from 'react-navigation';

const ContatosNavigator = createStackNavigator({
    Contatos: ListaDeContatosTela,
    NovoContato: NovoContatoTela,
});

export default createAppContainer(ContatosNavigator);