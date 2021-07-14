import MainGrid from '../src/components/mainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/profileRelations';

function ProfileSidebar(propriedades) {
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px'}} />
    </Box>
  )
}

export default function Home() {

  const githubUser = 'ws-rucm';
  const pessoasFavoritas = ['ws-anlm','peas','juunegreiros','omariosouto','rafaballerini','felipefialho'];

  return  (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridarea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridarea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
            Bem vindo(a)
            </h1>
            <OrkutNostalgicIconSet></OrkutNostalgicIconSet>

          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridarea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
            Amigos ({pessoasFavoritas.length})
            </h2>            
            <ul>
              {pessoasFavoritas.map((itemAtual) =>{
                return (
                  <li>
                    <a href={`/users/${itemAtual}` } key={itemAtual}>
                    <img src= {`https://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>
                  </a>  
                  </li>                                  
                )
              })}
            </ul>            
          </ProfileRelationsBoxWrapper> 
          <Box>
            Comunidades
          </Box>  
        </div>
      </MainGrid>
    </>    
  )
}
