import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import './App.css';
import Main from './components/main';

export default function App() {
  return (
    <MantineProvider forceColorScheme="dark">
      <Main />
    </MantineProvider>
  );
}
