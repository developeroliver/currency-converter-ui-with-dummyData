import 'react-native-gesture-handler';
import Navigation from './navigation/Navigation';
import { api } from './utils/api';

api('/latest?base=USD')
  .then((response) => {
    console.log('API connected', response);
  })
  .catch((error) => {
    console.log(error);
  });

export default function App() {
  return <Navigation />;
}
