import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import {
  Main,
  Navbar,
  Body,
  Footer,
  Text,
  Dropdown,
  DropdownImageInput,
  DropdownImageItem,
  ConnectedForm,
  InputField,
  Button,
  TextareaField,
  Validators,
  Question
} from '../.';

const useSession = (defaultCommunity: any) => {
  const [community, setCommunity] = React.useState(defaultCommunity);

  return {
    community,
    communities: [
      {
        img: {
          src:
            'https://s3.amazonaws.com/hub-central/uploads/1540751246_Ninguemficapratras-Logo.png',
          alt: 'Ninguém fica pra trás',
        },
        label: 'Ninguém fica pra trás',
        id: 1,
      },
      {
        img: {
          src:
            'https://s3.amazonaws.com/hub-central/uploads/1484260522_reboo.png',
          alt: 'Meu Rio',
        },
        label: 'Meu Rio',
        id: 4,
      },
      {
        img: {
          src:
            'https://s3.amazonaws.com/hub-central/uploads/1502212636_betaavatar.png',
          alt: 'BETA',
        },
        label: 'BETA',
        id: 3,
      },
    ],
    onChangeCommunity: (value: any) => {
      setCommunity(value);
    },
  };
};

const CommunitiesDropdown = ({ community: defaultCommunity }: any) => {
  const { community, communities, onChangeCommunity } = useSession(
    defaultCommunity
  );

  return (
    <Dropdown
      placeholder="Selecione uma comunidade"
      item={community}
      items={communities}
      onSelect={(value: any) => {
        onChangeCommunity(communities.find(c => c.id === value.id));
      }}
      dropdownInput={DropdownImageInput}
      dropdownItem={DropdownImageItem}
    />
  );
};

const Routing = () => {
  const { pathname } = useLocation();
  const { community } = useSession();
  const { required } = Validators;

  return (
    <Main>
      <Navbar
        indexRoute="/"
        brand={pathname === '/with-menu' ? 'small' : 'default'}
      >
        {pathname === '/with-menu' ? (
          <CommunitiesDropdown community={community} />
        ) : null}
      </Navbar>
      <Body>
        <Switch>
          <Route exact path="/">
            <Text>
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
              in culpa qui officia deserunt mollit anim id est laborum.`}
            </Text>
          </Route>
          <Route exact path="/with-menu">
            <Text>
              {!community
                ? 'Select your community'
                : `Welcome to ${community.label}`}
            </Text>
          </Route>
          <Route exact path="/form">
            <ConnectedForm
              onSubmit={e => console.log(e)}
              initialValues={{ city: 'Belo Horizonte' }}
            >
              {({ submitting, form }) => {
                return (
                  <>
                    <InputField label="Full Name" name="fullname" />
                    <InputField
                      label="City"
                      name="city"
                      placeholder="qual a sua cidade?"
                    />
                    <TextareaField
                      label="Mensagem"
                      name="message"
                      placeholder="Escreva uma mensagem"
                      validate={required('Required')}
                    />
                    <div>
                      <Button dark onClick={form.reset}>
                        Clean
                      </Button>
                      <Button type="submit" disabled={submitting}>
                        Submit
                      </Button>
                    </div>
                  </>
                );
              }}
            </ConnectedForm>
          </Route>
          <Route exact path="/question">
            <div style={{
              width: "800px",
              height: "600px"
            }}>
              <Question
                siteUrl={process.env.REACT_APP_METABASE_SITE_URL || ""}
                secretKey={process.env.REACT_APP_METABASE_SECRET_KEY || ""}
                config={{ resource: { question: 1140 }, params: {} }}
                questionOptions={"#bordered=false&titled=true"}
              />
            </div>
          </Route>
        </Switch>
        <Link to="/with-menu">Navigate to page with menu</Link>
      </Body>
      <Footer />
    </Main >
  );
};

const App = () => {
  return (
    <Router>
      <Routing />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
