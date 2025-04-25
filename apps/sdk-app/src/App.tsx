import {type SanityConfig} from '@sanity/sdk'
import {SanityApp} from '@sanity/sdk-react'
// import {ExampleComponent} from './ExampleComponent'
import './App.css'
// import {ArtworkList} from './ArtworkList'
// import Doom from './Doom.jsx'

export function App() {
  // apps can access many different projects or other sources of data
  const sanityConfigs: SanityConfig[] = [
    {
      projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
      dataset: process.env.SANITY_STUDIO_DATASET!,
    },
  ]

  return (
    <div className="app-container">
      <SanityApp config={sanityConfigs} fallback={<div>Loading...</div>}>
        {/* add your own components here! */}
        {/* <ExampleComponent /> */}
        {/* <div >hello world</div> */}
        {/* <ArtworkList /> */}
        <iframe
          style={{backgroundColor: 'black', width: '100vw', height: '100vh'}}
          src="https://doomonline1.vercel.app/dos.html"
        ></iframe>
      </SanityApp>
    </div>
  )
}

export default App

// <script src="%PUBLIC_URL%/js-dos/js-dos.js"></script>
//  <link rel="stylesheet" href="%PUBLIC_URL%/js-dos/js-dos.css">
//  <script>
//     emulators.pathPrefix = "%PUBLIC_URL%/js-dos/";
//  </script>
