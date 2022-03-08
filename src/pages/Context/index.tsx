import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ThemeContext, themes } from './theme-context';
import ThemedButton from './themed-button';
import ThemeTogglerButton from './ThemeTogglerButton';

function Toolbar(props: any) {
  return <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>;
}

function ToggleContext() {
  return <ThemeTogglerButton />;
}

const Context: React.FC = () => {
  const [theme, setTheme] = useState(themes.light);
  return (
    <PageContainer>
      <ThemeContext.Provider
        value={{
          theme: {
            foreground: '#000000',
            background: '#eeeeee',
          },
          toggleTheme: () => {},
        }}
      >
        <ThemeContext.Provider
          value={{
            theme: theme,
            toggleTheme: () => {
              setTheme((prev) => {
                console.log('toggleTheme');
                return prev === themes.dark ? themes.light : themes.dark;
              });
            },
          }}
        >
          <Toolbar
            changeTheme={() => {
              setTheme((prev) => {
                console.log('changeTheme');
                return prev === themes.dark ? themes.light : themes.dark;
              });
            }}
          />
          <section>
            <ThemedButton>eternal dispaly</ThemedButton>
          </section>
          <ToggleContext />
          <ThemeContext.Consumer>
            {(...rest) => {
              console.log('inside:', rest);
              return <div>inside</div>;
            }}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
        <ThemeContext.Consumer>
          {(...rest) => {
            console.log('ouside:', rest);
            return <div>ouside</div>;
          }}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </PageContainer>
  );
};

export default Context;
